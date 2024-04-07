import React, { useState } from 'react';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import './CreditCardDropdown.css';

const CreditCardDropdown = () => {
	const [showDropdown, setShowDropdown] = useState(false);
	const [selectedCard, setSelectedCard] = useState(null);

	const toggleDropdown = () => setShowDropdown(!showDropdown);

	const handleCardSelect = (card) => {
		setSelectedCard(card);
		setShowDropdown(false);
	};

	const cards = [
		{ type: 'VISA', cardNumber: '4111111111111234' },
		{ type: 'MasterCard', cardNumber: '5111111111111234' },
	];

	return (
		<div className="credit-card-dropdown">
			<button onClick={toggleDropdown} className="dropdown-button">
				<CreditCardIcon style={{ verticalAlign: 'middle' }} />
				{selectedCard
					? `${selectedCard.type} ••••${selectedCard.cardNumber?.slice(-4)}`
					: 'Buy with Credit Card'}
			</button>
			{showDropdown && (
				<div className="dropdown-menu">
					<button className="add-card-button">+ Add Credit Card</button>
					{cards.map((card, index) => (
						<div
							key={index}
							className="card-item"
							onClick={() => handleCardSelect(card)}
						>
							{`${card.type} ••••${card.cardNumber?.slice(-4)}`}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default CreditCardDropdown;
