import React from 'react';
import './LogoutModal.css';

const LogoutModal = ({ isOpen, onClose, onLogout }) => {
	if (!isOpen) return null;

	const handleLogout = () => {
		onLogout();
		onClose();
	};

	return (
		<div className="modal-backdrop">
			<div className="modal-content">
				<div className="confirm-logout">Confirm Logout</div>
				<div className="confirm-logout-message">
					Are you sure you want to logout?
				</div>
				<div className="modal-actions">
					<button onClick={onClose} className="modal-close-btn">
						Cancel
					</button>
					<button onClick={handleLogout} className="modal-logout-btn">
						Logout
					</button>
				</div>
			</div>
		</div>
	);
};

export default LogoutModal;
