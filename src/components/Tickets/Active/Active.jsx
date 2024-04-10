import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Active.css';
import InfoIcon from '@mui/icons-material/Info';

const Active = ({ details }) => {
	const navigate = useNavigate();

	const handleTicketClick = () => {
		navigate('/ticket-details', { state: { ticket: details } });
	};

	return (
		<div className="active">
			<button className="active-ticket-button" onClick={handleTicketClick}>
				<div className="ticket-info">
					{details.type}
					<InfoIcon style={{ marginLeft: '8px' }} />
				</div>
				<img
					src={`${process.env.PUBLIC_URL}/adobe-express-qr-code.png`}
					alt="QR Code"
					className="home-qr-code"
				/>
			</button>
		</div>
	);
};

export default Active;
