import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './AddCreditCard.css';

const AddCreditCard = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [cardNumber, setCardNumber] = useState('');
	const [expiry, setExpiry] = useState('');
	const [cvv, setCvv] = useState('');
	const [cardHolderName, setCardHolderName] = useState('');
	const [error, setError] = useState('');

	const isValidCardNumber = (number) =>
		number.length >= 16 && number.length <= 19;

	const isValidExpiry = (expiry) => /^(0[1-9]|1[0-2])\/[0-9]{2}$/.test(expiry);

	const isValidCvv = (cvv) => /^\d{3,4}$/.test(cvv);

	const handleCancel = () => {
		const redirectTo = location.state?.from || '/manage-credit-cards';
		navigate(redirectTo);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setError('');

		if (!isValidCardNumber(cardNumber)) {
			setError(
				'Invalid card number. Please enter a valid 16 to 19 digit card number.'
			);
			return;
		}

		if (!isValidExpiry(expiry)) {
			setError(
				'Invalid expiry date. Please enter a valid expiry date in MM/YY format.'
			);
			return;
		}

		if (!isValidCvv(cvv)) {
			setError('Invalid CVV. Please enter a 3 or 4 digit CVV.');
			return;
		}

		if (!cardHolderName.trim()) {
			setError("Please enter the cardholder's name.");
			return;
		}

		const loggedInUserEmail = localStorage.getItem('loggedInUser');
		if (loggedInUserEmail) {
			const loggedInUserData = JSON.parse(
				localStorage.getItem(loggedInUserEmail)
			);
			const newCard = {
				id: Date.now(),
				type: cardNumber.startsWith('4') ? 'Visa' : 'MasterCard',
				lastFourDigits: cardNumber.slice(-4),
				expiry,
				cardHolderName,
			};
			loggedInUserData.creditCards.push(newCard);
			localStorage.setItem(loggedInUserEmail, JSON.stringify(loggedInUserData));
			const redirectTo = location.state?.from || '/manage-credit-cards';
			navigate(redirectTo);
		} else {
			setError('User not found. Please log in again.');
		}
	};

	return (
		<div className="add-credit-card-container">
			<Navbar />
			<form className="add-credit-card-form" onSubmit={handleSubmit}>
				<h1>Add a New Credit Card</h1>
				<input
					type="text"
					placeholder="Card Number"
					value={cardNumber}
					onChange={(e) => setCardNumber(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Expiry (MM/YY)"
					value={expiry}
					onChange={(e) => setExpiry(e.target.value)}
				/>
				<input
					type="text"
					placeholder="CVV"
					value={cvv}
					onChange={(e) => setCvv(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Cardholder Name"
					value={cardHolderName}
					onChange={(e) => setCardHolderName(e.target.value)}
				/>
				<div className="form-actions">
					<button type="button" onClick={handleCancel} className="cancel-btn">
						Cancel
					</button>
					<button type="submit" className="save-btn">
						Save Card
					</button>
				</div>
				{error && <div className="add-credit-card-error">{error}</div>}
			</form>
		</div>
	);
};

export default AddCreditCard;
