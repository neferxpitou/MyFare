import React from 'react';
import './ConfirmCancelModal.css';

const ConfirmCancelModal = ({ isOpen, onClose, onConfirm }) => {
	if (!isOpen) return null;

	return (
		<div className="modal-backdrop">
			<div className="modal-content">
				<div className="confirm-cancel">Confirm Cancellation</div>
				<div className="cancel-message">
					Are you sure you want to cancel this subscription?
				</div>
				<div className="modal-actions">
					<button onClick={onClose} className="modal-cancel-btn">
						No, Keep It
					</button>
					<button onClick={onConfirm} className="modal-confirm-btn">
						Yes, Cancel It
					</button>
				</div>
			</div>
		</div>
	);
};

export default ConfirmCancelModal;
