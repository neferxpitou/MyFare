import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Increment from '../../components/Buttons/Increment/Increment';
import Decrement from '../../components/Buttons/Decrement/Decrement';
import './Tickets.css';

const Tickets = ({ minValue = 0 }) => {
	const navigate = useNavigate();
	const [ASP, setASP] = useState(minValue);
	const [ADP, setADP] = useState(minValue);
	const [AMP, setAMP] = useState(minValue);
	const [YSP, setYSP] = useState(minValue);
	const [YDP, setYDP] = useState(minValue);
	const [YMP, setYMP] = useState(minValue);
	const [AMS, setAMS] = useState(minValue);
	const [YMS, setYMS] = useState(minValue);

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
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'CAD',
		}).format(total);
	};

	const handleConfirm = () => {
		const selections = [
			{ type: 'Adult Single Pass', quantity: ASP, price: 3.7 },
			{ type: 'Adult Day Pass', quantity: ADP, price: 11.6 },
			{ type: 'Adult Monthly Pass', quantity: AMP, price: 115.0 },
			{ type: 'Youth Single Pass', quantity: YSP, price: 2.5 },
			{ type: 'Youth Day Pass', quantity: YDP, price: 8.5 },
			{ type: 'Youth Monthly Pass', quantity: YMP, price: 82.0 },
			{ type: 'Adult Subscription', quantity: AMS, price: 115.0 },
			{ type: 'Youth Subscription', quantity: YMS, price: 82.0 },
		].filter((selection) => selection.quantity > 0);

		localStorage.setItem('ticketSelections', JSON.stringify(selections));
		navigate('/checkout');
	};

	return (
		<div className="ticket-container">
			<Navbar />
			<div className="ticket-content">
				<div className="ticket-table">
					<div className="youth-header">Youth Fares & Passes:</div>
					<div className="youth-passes">
						<div className="youth-single-pass">
							<div className="ticket-title">Single Fare</div>
							<Decrement onClick={() => decrement(setYSP, YSP)} />
							<div className="ticket-counter">{YSP}</div>
							<Increment onClick={() => increment(setYSP, YSP)} />
							<div className="price">$2.50</div>
						</div>
						<div className="youth-day-pass">
							<div className="ticket-title">Day Pass</div>
							<Decrement onClick={() => decrement(setYDP, YDP)} />
							<div className="ticket-counter">{YDP}</div>
							<Increment onClick={() => increment(setYDP, YDP)} />
							<div className="price">$8.50</div>
						</div>
						<div className="youth-monthly-pass">
							<div className="ticket-title">Monthly Pass</div>
							<Decrement onClick={() => decrement(setYMP, YMP)} />
							<div className="ticket-counter">{YMP}</div>
							<Increment onClick={() => increment(setYMP, YMP)} />
							<div className="price">$82.00</div>
						</div>
					</div>
					<div className="adult-header">Adult Fares & Passes:</div>
					<div className="adult-passes">
						<div className="adult-single-pass">
							<div className="ticket-title">Single Fare</div>
							<Decrement onClick={() => decrement(setASP, ASP)} />
							<div className="ticket-counter">{ASP}</div>
							<Increment onClick={() => increment(setASP, ASP)} />
							<div className="price">$3.70</div>
						</div>
						<div className="adult-day-pass">
							<div className="ticket-title">Day Pass</div>
							<Decrement onClick={() => decrement(setADP, ADP)} />
							<div className="ticket-counter">{ADP}</div>
							<Increment onClick={() => increment(setADP, ADP)} />
							<div className="price">$11.60</div>
						</div>
						<div className="adult-monthly-pass">
							<div className="ticket-title">Monthly Pass</div>
							<Decrement onClick={() => decrement(setAMP, AMP)} />
							<div className="ticket-counter">{AMP}</div>
							<Increment onClick={() => increment(setAMP, AMP)} />
							<div className="price">$115.00</div>
						</div>
					</div>
				</div>
				<div className="subscriptions-header">Monthly Subscriptions:</div>
				<div className="subscriptions-description">
					Sign up for an <strong>Youth or Adult Monthly Subscription</strong> to
					automatically receive a monthly pass on the{' '}
					<strong>1st of each month</strong>.
				</div>
				<div className="ticket-table">
					<div className="youth-monthly-subscription">
						<div className="ticket-title">Youth Subscription</div>
						<Decrement onClick={() => decrement(setYMS, YMS)} />
						<div className="ticket-counter">{YMS}</div>
						<Increment onClick={() => increment(setYMS, YMS)} />
						<div className="price">$82.00</div>
					</div>
					<div className="adult-monthly-subscription">
						<div className="ticket-title">Adult Subscription</div>
						<Decrement onClick={() => decrement(setAMS, AMS)} />
						<div className="ticket-counter">{AMS}</div>
						<Increment onClick={() => increment(setAMS, AMS)} />
						<div className="price">$115.00</div>
					</div>
				</div>
				<div className="ticket-subtotal">
					<div className="ticket-subtotal-title">Subtotal: </div>
					<div className="ticket-subtotal-price">{calculateTotalPrice()}</div>
				</div>
				<button className="confirm-button" onClick={handleConfirm}>
					Confirm
				</button>
			</div>
		</div>
	);
};

export default Tickets;
