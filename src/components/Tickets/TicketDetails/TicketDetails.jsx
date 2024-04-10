import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import './TicketDetails.css';

const TicketDetails = () => {
	const location = useLocation();
	const ticket = location.state?.ticket || {};

	const formatDate = (dateString) => {
		const options = {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
		};
		return new Date(dateString).toLocaleDateString(undefined, options);
	};

	const formatPrice = (price) => {
		return Number(price).toFixed(2);
	};

	return (
		<div className="ticket-details-container">
			<Navbar />
			<h1 className="ticket-details-title">Ticket Details</h1>
			<div className="qr-code-container">
				<img
					src={`${process.env.PUBLIC_URL}/adobe-express-qr-code.png`}
					alt="QR Code"
					className="qr-code"
				/>
			</div>
			<div className="ticket-details-content">
				<div className="detail-item">
					<div className="detail-title">VALID UNTIL</div>
					<div className="detail-value">{formatDate(ticket.validUntil)}</div>
				</div>
				<hr className="details-divider" />
				<div className="detail-item">
					<div className="detail-title">ACTIVATED</div>
					<div className="detail-value">{formatDate(ticket.activated)}</div>
				</div>
				<hr className="details-divider" />
				<div className="detail-item">
					<div className="detail-title">TRIP TYPE</div>
					<div className="detail-value">{ticket.type}</div>
				</div>
				<hr className="details-divider" />
				<div className="detail-item">
					<div className="detail-title">PRICE</div>
					<div className="detail-value">${formatPrice(ticket.price)}</div>
				</div>
				<hr className="details-divider" />
				<div className="detail-item">
					<div className="detail-title">TICKET ID</div>
					<div className="detail-value">{ticket.ticketId}</div>
				</div>
			</div>
		</div>
	);
};

export default TicketDetails;
