import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import './HistoryDetails.css';

const HistoryDetails = () => {
	const location = useLocation();
	const ticket = location.state?.ticket || {};
	const formatPrice = (price) => {
		return Number(price).toFixed(2);
	};

	return (
		<div className="history-details-container">
			<Navbar />
			<h1 className="history-details-title">Transaction Details</h1>
			<div className="transaction-details-content">
				<div className="detail-item">
					<div className="detail-title">USED</div>
					<div className="detail-value">{ticket.used}</div>
				</div>
				<hr className="details-divider" />
				<div className="detail-item">
					<div className="detail-title">ACTIVATED</div>
					<div className="detail-value">{ticket.activated}</div>
				</div>
				<hr className="details-divider" />
				<div className="detail-item">
					<div className="detail-title">TRIP TYPE</div>
					<div className="detail-value">{ticket.tripType}</div>
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

export default HistoryDetails;
