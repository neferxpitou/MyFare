import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Checkout.css';
import ApplePay from '../../components/Buttons/ApplePay/ApplePay';
import ClearIcon from '@mui/icons-material/Clear';
import CreditCardDropdown from '../../components/Dropdown/CreditCardDropdown';
import { useNavigate } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Checkout = () => {
	const navigate = useNavigate();
	const [ticketSelections, setTicketSelections] = useState([]);
	const [selectedCard, setSelectedCard] = useState(null);
	const [showPurchaseComplete, setShowPurchaseComplete] = useState(false);

	useEffect(() => {
		const loggedInUser = localStorage.getItem('loggedInUser');
		if (loggedInUser) {
			const user = JSON.parse(localStorage.getItem(loggedInUser));
			const selections = user.selectedTickets;
			setTicketSelections(selections || []);
		}
	}, []);

	const handlePurchase = () => {
		const loggedInUser = localStorage.getItem('loggedInUser');
		if (loggedInUser && ticketSelections.length > 0) {
			const user = JSON.parse(localStorage.getItem(loggedInUser));

			const newPurchasedTickets = ticketSelections.map((selectedTicket) => ({
				...selectedTicket,
				id: `TICKET-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
			}));

			user.purchasedTickets = [
				...user.purchasedTickets,
				...newPurchasedTickets,
			];
			user.selectedTickets = [];

			localStorage.setItem(loggedInUser, JSON.stringify(user));

			setShowPurchaseComplete(true);

			setTimeout(() => {
				setShowPurchaseComplete(false);
				navigate('/home');
			}, 3000);
		}
	};

	const handleRemoveTicket = (indexToRemove) => {
		const updatedTicketSelections = ticketSelections.filter(
			(_, index) => index !== indexToRemove
		);
		setTicketSelections(updatedTicketSelections);

		const loggedInUser = localStorage.getItem('loggedInUser');
		if (loggedInUser) {
			const user = JSON.parse(localStorage.getItem(loggedInUser));
			user.selectedTickets = updatedTicketSelections;
			localStorage.setItem(loggedInUser, JSON.stringify(user));
		}

		if (updatedTicketSelections.length === 0) {
			navigate('/tickets');
		}
	};

	const totalPrice = ticketSelections.reduce(
		(total, item) => total + item.quantity * item.price,
		0
	);

	return (
		<div className="checkout-container">
			<Navbar />
			<div className="checkout-content">
				<div className="checkout-title">Checkout Summary</div>
				<div className="checkout-summary">
					{ticketSelections.map((item, index) => (
						<div key={index} className="ticket-selected">
							<div className="number-of-tickets">{item.quantity} x</div>
							<div className="type-of-ticket">{item.type}</div>
							<div className="price-of-ticket">${item.price.toFixed(2)}</div>
							<ClearIcon
								className="clear-icon"
								onClick={() => handleRemoveTicket(index)}
							/>
						</div>
					))}
				</div>
				<div className="checkout-total">
					<div className="checkout-total-title">Total:</div>
					<div className="checkout-total-price">${totalPrice.toFixed(2)}</div>
				</div>
				<div className="buy-apple-pay">
					<ApplePay onClick={handlePurchase} />
				</div>
				<div className="divider-wrapper">
					<div className="payment-divider">OR</div>
				</div>
				<CreditCardDropdown onSelect={setSelectedCard} />{' '}
				<button
					className={`checkout-button ${selectedCard ? '' : 'disabled'}`}
					onClick={handlePurchase}
					disabled={!selectedCard}
				>
					Checkout
				</button>
			</div>
			{showPurchaseComplete && (
				<>
					<div className="overlay-two"></div>
					<div className="purchase-complete-popup">
						<CheckCircleIcon style={{ color: 'green', fontSize: '40px' }} />
						<p>Purchase Complete</p>
					</div>
				</>
			)}
		</div>
	);
};

export default Checkout;
