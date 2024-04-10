import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ConfirmCancelModal from '../../components/Buttons/ConfirmCancelModal/ConfirmCancelModal';
import './ManageSubscriptions.css';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';

const ManageSubscriptions = () => {
	const [subscriptions, setSubscriptions] = useState([]);
	const [isCancelModalOpen, setCancelModalOpen] = useState(false);
	const [selectedSubscriptionId, setSelectedSubscriptionId] = useState(null);

	useEffect(() => {
		const loggedInUser = localStorage.getItem('loggedInUser');
		if (loggedInUser) {
			const userData = JSON.parse(localStorage.getItem(loggedInUser));
			const subscriptionEntries = [];

			userData.purchasedTickets.forEach((ticket, idx) => {
				if (ticket.subscription && !ticket.canceled) {
					for (let i = 0; i < ticket.quantity; i++) {
						subscriptionEntries.push({
							...ticket,
							id: `${idx}-${i}`,
							details: `Active Subscription`,
							price: `$${parseFloat(ticket.price).toFixed(2)}/month`,
						});
					}
				}
			});

			setSubscriptions(subscriptionEntries);
		}
	}, []);

	const showCancelModal = (id) => {
		setSelectedSubscriptionId(id);
		setCancelModalOpen(true);
	};

	const closeCancelModal = () => {
		setCancelModalOpen(false);
	};

	const confirmCancellation = () => {
		const subscriptionToCancel = subscriptions.find(
			(sub) => sub.id === selectedSubscriptionId
		);
		if (subscriptionToCancel) {
			const loggedInUser = localStorage.getItem('loggedInUser');
			if (loggedInUser) {
				const userData = JSON.parse(localStorage.getItem(loggedInUser));
				userData.purchasedTickets.forEach((ticket) => {
					if (ticket.type === subscriptionToCancel.type) {
						ticket.canceled = true;
					}
				});
				localStorage.setItem(loggedInUser, JSON.stringify(userData));
				setSubscriptions(
					subscriptions.filter((sub) => sub.id !== selectedSubscriptionId)
				);
			}
		}
		closeCancelModal();
	};

	return (
		<div className="manage-subscriptions-container">
			<Navbar />
			<h1 className="manage-subscriptions-title">Manage Subscriptions</h1>
			<div className="subscriptions-list">
				{subscriptions.length > 0 ? (
					subscriptions.map((subscription, index) => (
						<div key={index} className="subscription-item">
							<EventRepeatIcon className="subscription-icon" />
							<div className="subscription-details">
								<h2>{subscription.type}</h2>
								<p>{subscription.details}</p>
								<div className="subscription-price">{subscription.price}</div>
							</div>
							<button
								className="cancel-subscription-button"
								onClick={() => showCancelModal(subscription.id)}
							>
								Cancel
							</button>
						</div>
					))
				) : (
					<div className="no-subscriptions-message">
						There are no active subscriptions.
					</div>
				)}
			</div>
			{isCancelModalOpen && (
				<ConfirmCancelModal
					isOpen={isCancelModalOpen}
					onClose={closeCancelModal}
					onConfirm={confirmCancellation}
				/>
			)}
		</div>
	);
};

export default ManageSubscriptions;
