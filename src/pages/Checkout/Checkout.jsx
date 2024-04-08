import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Checkout.css';
import ApplePay from '../../components/Buttons/ApplePay/ApplePay';
import ClearIcon from '@mui/icons-material/Clear';
import CreditCardDropdown from '../../components/Dropdown/CreditCardDropdown';

const Checkout = () => {
	const [ticketSelections, setTicketSelections] = useState([]);

	useEffect(() => {
		const selections =
			JSON.parse(localStorage.getItem('ticketSelections')) || [];
		setTicketSelections(selections);
	}, []);

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
							<ClearIcon className="clear-icon" />
						</div>
					))}
				</div>
				<div className="checkout-total">
					<div className="checkout-total-title">Total: </div>
					<div className="checkout-total-price">${totalPrice.toFixed(2)}</div>
				</div>
				<div className="buy-apple-pay">
					<ApplePay />
				</div>
				<div className="divider-wrapper">
					<div className="payment-divider">OR</div>
				</div>
				<CreditCardDropdown />
				<button className="checkout-button">Checkout</button>
			</div>
		</div>
	);
};

export default Checkout;
