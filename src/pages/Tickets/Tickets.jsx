import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Increment from '../../components/Buttons/Increment/Increment';
import Decrement from '../../components/Buttons/Decrement/Decrement';
import './Tickets.css';

const Tickets = ({ minValue = 0 }) => {
	const navigate = useNavigate();
	const [ASP, setASP] = useState(minValue); // Adult Single Pass
	const [ADP, setADP] = useState(minValue); // Adult Day Pass
	const [AMP, setAMP] = useState(minValue); // Adult Monthly Pass
	const [YSP, setYSP] = useState(minValue); // Youth Single Pass
	const [YDP, setYDP] = useState(minValue); // Youth Day Pass
	const [YMP, setYMP] = useState(minValue); // Youth Monthly Pass
	const [AMS, setAMS] = useState(minValue); // Adult Monthly Subscription
	const [YMS, setYMS] = useState(minValue); // Youth Monthly Subscription

	const decrement = (setter, currentValue) => {
		if (currentValue > minValue) {
			setter(currentValue - 1);
		}
	};

	const increment = (setter, currentValue) => {
		setter(currentValue + 1);
	};

	const calculateTotalPrice = () => {
		const total =
			ASP * 3.7 +
			ADP * 11.6 +
			AMP * 115 +
			YSP * 2.5 +
			YDP * 8.5 +
			YMP * 82 +
			AMS * 115 +
			YMS * 82;
		return total.toFixed(2);
	};

	const isValidSelection = () => {
		return (
			ASP > 0 ||
			ADP > 0 ||
			AMP > 0 ||
			YSP > 0 ||
			YDP > 0 ||
			YMP > 0 ||
			AMS > 0 ||
			YMS > 0
		);
	};

	const handleConfirm = () => {
		const selections = [
			ASP > 0 && {
				type: 'Adult Single Ticket',
				quantity: ASP,
				price: 3.7,
				subscription: false,
			},
			ADP > 0 && {
				type: 'Adult Day Pass',
				quantity: ADP,
				price: 11.6,
				subscription: false,
			},
			AMP > 0 && {
				type: 'Adult Monthly Pass',
				quantity: AMP,
				price: 115,
				subscription: false,
			},
			YSP > 0 && {
				type: 'Youth Single Ticket',
				quantity: YSP,
				price: 2.5,
				subscription: false,
			},
			YDP > 0 && {
				type: 'Youth Day Pass',
				quantity: YDP,
				price: 8.5,
				subscription: false,
			},
			YMP > 0 && {
				type: 'Youth Monthly Pass',
				quantity: YMP,
				price: 82,
				subscription: false,
			},
			AMS > 0 && {
				type: 'Adult Monthly Pass',
				quantity: AMS,
				price: 115,
				subscription: true,
			},
			YMS > 0 && {
				type: 'Youth Monthly Pass',
				quantity: YMS,
				price: 82,
				subscription: true,
			},
		].filter(Boolean);

		if (selections.length === 0) {
			alert('Please select at least one ticket or subscription to proceed.');
			return;
		}

		const loggedInUserEmail = localStorage.getItem('loggedInUser');
		const userData = JSON.parse(localStorage.getItem(loggedInUserEmail));
		userData.selectedTickets = selections;
		localStorage.setItem(loggedInUserEmail, JSON.stringify(userData));

		navigate('/checkout');
	};

	return (
		<div className="ticket-container">
			<Navbar />
			<div className="ticket-content">
				<div className="youth-header">Youth Fares & Passes</div>
				<div className="ticket-table">
					{/* Youth Single Ticket */}
					<div className="youth-single-pass">
						<div className="ticket-title">Single Ticket</div>
						<Decrement onClick={() => decrement(setYSP, YSP)} />
						<div className="ticket-counter">{YSP}</div>
						<Increment onClick={() => increment(setYSP, YSP)} />
						<div className="price">$2.50</div>
					</div>
					{/* Youth Day Pass */}
					<div className="youth-day-pass">
						<div className="ticket-title">Day Pass</div>
						<Decrement onClick={() => decrement(setYDP, YDP)} />
						<div className="ticket-counter">{YDP}</div>
						<Increment onClick={() => increment(setYDP, YDP)} />
						<div className="price">$8.50</div>
					</div>
					{/* Youth Monthly Pass */}
					<div className="youth-monthly-pass">
						<div className="ticket-title">Monthly Pass</div>
						<Decrement onClick={() => decrement(setYMP, YMP)} />
						<div className="ticket-counter">{YMP}</div>
						<Increment onClick={() => increment(setYMP, YMP)} />
						<div className="price">$82.00</div>
					</div>
				</div>
				<div className="adult-header">Adult Fares & Passes</div>
				<div className="ticket-table">
					{/* Adult Single Ticket */}
					<div className="adult-single-pass">
						<div className="ticket-title">Single Ticket</div>
						<Decrement onClick={() => decrement(setASP, ASP)} />
						<div className="ticket-counter">{ASP}</div>
						<Increment onClick={() => increment(setASP, ASP)} />
						<div className="price">$3.70</div>
					</div>
					{/* Adult Day Pass */}
					<div className="adult-day-pass">
						<div className="ticket-title">Day Pass</div>
						<Decrement onClick={() => decrement(setADP, ADP)} />
						<div className="ticket-counter">{ADP}</div>
						<Increment onClick={() => increment(setADP, ADP)} />
						<div className="price">$11.60</div>
					</div>
					{/* Adult Monthly Pass */}
					<div className="adult-monthly-pass">
						<div className="ticket-title">Monthly Pass</div>
						<Decrement onClick={() => decrement(setAMP, AMP)} />
						<div className="ticket-counter">{AMP}</div>
						<Increment onClick={() => increment(setAMP, AMP)} />
						<div className="price">$115.00</div>
					</div>
				</div>
				<div className="subscriptions-header">Monthly Subscriptions</div>
				<div className="subscriptions-description">
					Sign up for an <strong>Youth or Adult Monthly Subscription</strong> to
					automatically receive a monthly pass on the{' '}
					<strong>1st of each month</strong>.
				</div>
				<div className="ticket-table">
					{/* Youth Monthly Subscription */}
					<div className="youth-monthly-subscription">
						<div className="ticket-title">Youth Monthly Subscription</div>
						<Decrement onClick={() => decrement(setYMS, YMS)} />
						<div className="ticket-counter">{YMS}</div>
						<Increment onClick={() => increment(setYMS, YMS)} />
						<div className="price">$82.00</div>
					</div>
					{/* Adult Monthly Subscription */}
					<div className="adult-monthly-subscription">
						<div className="ticket-title">Adult Monthly Subscription</div>
						<Decrement onClick={() => decrement(setAMS, AMS)} />
						<div className="ticket-counter">{AMS}</div>
						<Increment onClick={() => increment(setAMS, AMS)} />
						<div className="price">$115.00</div>
					</div>
				</div>
				<div className="ticket-subtotal">
					<div className="ticket-subtotal-title">Subtotal:</div>
					<div className="ticket-subtotal-price">${calculateTotalPrice()}</div>
				</div>
				<button
					className="confirm-button"
					onClick={handleConfirm}
					disabled={!isValidSelection()}
				>
					Confirm
				</button>
			</div>
		</div>
	);
};

export default Tickets;
