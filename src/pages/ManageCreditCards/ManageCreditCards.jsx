import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import './ManageCreditCards.css';

const ManageCreditCards = () => {
	const navigate = useNavigate();
	const [creditCards, setCreditCards] = useState([]);

	useEffect(() => {
		const loggedInUserEmail = localStorage.getItem('loggedInUser');
		if (loggedInUserEmail) {
			const loggedInUserData = JSON.parse(
				localStorage.getItem(loggedInUserEmail)
			);
			if (loggedInUserData && loggedInUserData.creditCards) {
				setCreditCards(loggedInUserData.creditCards);
			}
		}
	}, []);

	const addCreditCard = () => {
		navigate('/add-credit-card');
	};

	const removeCreditCard = (id) => {
		const loggedInUserEmail = localStorage.getItem('loggedInUser');
		const loggedInUserData = JSON.parse(
			localStorage.getItem(loggedInUserEmail)
		);
		const updatedCards = loggedInUserData.creditCards.filter(
			(card) => card.id !== id
		);
		const updatedUserData = { ...loggedInUserData, creditCards: updatedCards };
		localStorage.setItem(loggedInUserEmail, JSON.stringify(updatedUserData));
		setCreditCards(updatedCards);
	};

	return (
		<div className="manage-credit-cards-container">
			<Navbar />
			<div className="manage-credit-cards-header">Manage Credit Cards</div>
			<button className="add-card-btn" onClick={addCreditCard}>
				+ Add Credit Card
			</button>
			<div className="credit-cards-list">
				{creditCards.length > 0 ? (
					creditCards.map((card) => (
						<div key={card.id} className="credit-card-item">
							<div className="card-details">
								<span>{card.type}</span>
								<span>•••• {card.lastFourDigits}</span>
								<span>{card.expiry}</span>
							</div>
							<button
								className="remove-card-btn"
								onClick={() => removeCreditCard(card.id)}
							>
								<DeleteIcon />
							</button>
						</div>
					))
				) : (
					<div className="no-credit-cards">No credit cards added yet.</div>
				)}
			</div>
		</div>
	);
};

export default ManageCreditCards;
