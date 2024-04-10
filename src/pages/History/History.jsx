import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './History.css';

const History = () => {
	const navigate = useNavigate();

	function parseDate(dateStr) {
		const months = {
			Jan: 0,
			Feb: 1,
			Mar: 2,
			Apr: 3,
			May: 4,
			Jun: 5,
			Jul: 6,
			Aug: 7,
			Sep: 8,
			Oct: 9,
			Nov: 10,
			Dec: 11,
		};
		const parts = dateStr.split(' ');
		const day = parseInt(parts[1], 10);
		const month = months[parts[0]];
		const year = parseInt(parts[2], 10);
		const timeParts = parts[4].split(':');
		const hour =
			parseInt(timeParts[0], 10) +
			(parts[5] === 'PM' && parts[4] !== '12:00' ? 12 : 0);
		const minutes = parseInt(timeParts[1], 10);

		return new Date(year, month, day, hour, minutes);
	}

	const handleTransactionClick = (ticket) => {
		navigate('/history-details', { state: { ticket } });
	};

	const transactionItems = [
		{
			used: 'Jan 5, 2023 at 9:15 AM',
			activated: 'Jan 5, 2023 at 8:00 AM',
			tripType: 'Youth Monthly Pass',
			price: '82.00',
			purchaseTime: 'Dec 30, 2023 at 10:00 AM',
			ticketId: 'CHLFCAOFUQM2',
		},
		{
			used: 'Feb 12, 2023 at 10:45 AM',
			activated: 'Feb 12, 2023 at 9:30 AM',
			tripType: 'Adult Day Pass',
			price: '11.60',
			purchaseTime: 'Feb 1, 2023 at 8:20 AM',
			ticketId: 'CHLFCAOFUQM3',
		},
		{
			used: 'Mar 19, 2023 at 2:05 PM',
			activated: 'Mar 19, 2023 at 1:00 PM',
			tripType: 'Youth Single Pass',
			price: '2.50',
			purchaseTime: 'Mar 10, 2023 at 3:15 PM',
			ticketId: 'CHLFCAOFUQM4',
		},
		{
			used: 'Apr 25, 2023 at 4:50 PM',
			activated: 'Apr 25, 2023 at 3:45 PM',
			tripType: 'Adult Monthly Pass',
			price: '115.00',
			purchaseTime: 'Apr 1, 2023 at 7:00 AM',
			ticketId: 'CHLFCAOFUQM5',
		},
		{
			used: 'May 30, 2023 at 6:30 AM',
			activated: 'May 30, 2023 at 6:00 AM',
			tripType: 'Adult Single Pass',
			price: '3.70',
			purchaseTime: 'May 20, 2023 at 11:10 AM',
			ticketId: 'CHLFCAOFUQM6',
		},
		{
			used: 'Jun 15, 2023 at 7:45 PM',
			activated: 'Jun 15, 2023 at 7:00 PM',
			tripType: 'Youth Day Pass',
			price: '8.50',
			purchaseTime: 'Jun 1, 2023 at 9:25 AM',
			ticketId: 'CHLFCAOFUQM7',
		},
		{
			used: 'Jul 20, 2023 at 8:55 PM',
			activated: 'Jul 20, 2023 at 8:10 PM',
			tripType: 'Youth Monthly Pass',
			price: '82.00',
			purchaseTime: 'Jul 5, 2023 at 2:30 PM',
			ticketId: 'CHLFCAOFUQM8',
		},
		{
			used: 'Aug 23, 2023 at 10:15 AM',
			activated: 'Aug 23, 2023 at 9:45 AM',
			tripType: 'Adult Day Pass',
			price: '11.60',
			purchaseTime: 'Aug 15, 2023 at 8:55 AM',
			ticketId: 'CHLFCAOFUQM9',
		},
		{
			used: 'Sep 28, 2023 at 11:35 AM',
			activated: 'Sep 28, 2023 at 11:00 AM',
			tripType: 'Adult Monthly Pass',
			price: '115.00',
			purchaseTime: 'Sep 10, 2023 at 10:40 AM',
			ticketId: 'CHLFCAOFUQM10',
		},
		{
			used: 'Oct 31, 2023 at 12:20 PM',
			activated: 'Oct 31, 2023 at 11:50 AM',
			tripType: 'Youth Single Pass',
			price: '2.50',
			purchaseTime: 'Oct 25, 2023 at 4:00 PM',
			ticketId: 'CHLFCAOFUQM11',
		},
		{
			used: 'Nov 29, 2023 at 5:55 PM',
			activated: 'Nov 29, 2023 at 5:30 PM',
			tripType: 'Adult Single Pass',
			price: '3.70',
			purchaseTime: 'Nov 15, 2023 at 12:00 PM',
			ticketId: 'CHLFCAOFUQM12',
		},
	];

	return (
		<div className="history-container">
			<Navbar />
			<div className="history-content">
				<div className="history-title">Transaction History</div>
				<div className="list-of-transactions">
					{transactionItems.map((item, index) => (
						<button
							key={index}
							className="transaction-item"
							onClick={() => handleTransactionClick(item)}
						>
							<div className="transaction-section-one">
								<div className="transaction-title">{item.tripType}</div>
								<div className="transaction-date">
									{parseDate(item.used).toLocaleDateString()}
								</div>
							</div>
							<div className="transaction-section-two">
								<div className="transaction-amount">${item.price}</div>
								<div className="Details">Tap for More Details</div>
							</div>
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default History;
