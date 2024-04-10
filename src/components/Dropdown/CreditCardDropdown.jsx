import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import './CreditCardDropdown.css';

const CreditCardDropdown = ({ onSelect }) => {
	const navigate = useNavigate();
	const [showDropdown, setShowDropdown] = useState(false);
	const [selectedCard, setSelectedCard] = useState(null);
	const [cards, setCards] = useState([]);

	useEffect(() => {
		const loggedInUser = localStorage.getItem('loggedInUser');
		if (loggedInUser) {
			const user = JSON.parse(localStorage.getItem(loggedInUser));
			setCards(user.creditCards || []);
		}
	}, []);

	const handleCardSelect = (card) => {
		setSelectedCard(card);
		onSelect(card);
		setShowDropdown(false);
	};

	const toggleDropdown = () => setShowDropdown(!showDropdown);

	const handleAddCard = () => {
		navigate('/add-credit-card', { state: { from: '/checkout' } });
	};

	return (
		<div className="credit-card-dropdown">
			<button onClick={toggleDropdown} className="dropdown-button">
				<CreditCardIcon style={{ verticalAlign: 'middle' }} />
				{selectedCard
					? `${selectedCard.type} •••• ${selectedCard.lastFourDigits}`
					: 'Buy with Credit Card'}
			</button>
			{showDropdown && (
				<div className="dropdown-menu">
					<button className="add-card-button" onClick={handleAddCard}>
						+ Add Credit Card
					</button>
					{cards.length > 0 ? (
						cards.map((card, index) => (
							<div
								key={index}
								className="card-item"
								onClick={() => handleCardSelect(card)}
							>
								{`${card.type} •••• ${card.lastFourDigits}`}
							</div>
						))
					) : (
						<div className="card-item">No saved cards</div>
					)}
				</div>
			)}
		</div>
	);
};

export default CreditCardDropdown;
