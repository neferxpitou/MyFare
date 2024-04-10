import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileNav from '../../components/Navbar/ProfileNav';
import './Profile.css';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import ReceiptIcon from '@mui/icons-material/Receipt';
import LogoutModal from '../../components/Buttons/LogoutModal/LogoutModal';

const Profile = () => {
	const navigate = useNavigate();
	const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
	const [newEmail, setNewEmail] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [retypePassword, setRetypePassword] = useState('');

	const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

	const [showSuccessPopup, setShowSuccessPopup] = useState(false);
	const [successMessage, setSuccessMessage] = useState('');

	const logout = () => {
		localStorage.removeItem('loggedInUser');
		navigate('/');
	};

	const saveNewEmail = () => {
		const loggedInUser = localStorage.getItem('loggedInUser');
		if (loggedInUser && isEmailValid(newEmail)) {
			const userData = JSON.parse(localStorage.getItem(loggedInUser));
			userData.email = newEmail;
			localStorage.setItem(loggedInUser, JSON.stringify(userData));
			localStorage.setItem(newEmail, JSON.stringify(userData));
			localStorage.removeItem(loggedInUser);
			localStorage.setItem('loggedInUser', newEmail);

			setSuccessMessage('Email updated successfully.');
			setShowSuccessPopup(true);

			setTimeout(() => {
				navigate('/home');
			}, 2000);
		}
	};

	const saveNewPassword = () => {
		if (newPassword === retypePassword) {
			const loggedInUser = localStorage.getItem('loggedInUser');
			if (loggedInUser) {
				const userData = JSON.parse(localStorage.getItem(loggedInUser));
				userData.password = newPassword;
				localStorage.setItem(loggedInUser, JSON.stringify(userData));

				setSuccessMessage('Password updated successfully.');
				setShowSuccessPopup(true);

				setTimeout(() => {
					navigate('/home');
				}, 2000);
			}
		}
	};

	return (
		<div className="profile-container">
			<ProfileNav openLogoutModal={() => setLogoutModalOpen(true)} />
			<div className="profile-content">
				<div className="update-email">
					<div className="update-title">Update Email:</div>
					<input
						type="email"
						placeholder="New Email Address"
						className="profile-email-input"
						value={newEmail}
						onChange={(e) => setNewEmail(e.target.value)}
					/>
					<button
						className="save-email-button"
						onClick={saveNewEmail}
						disabled={!isEmailValid(newEmail)}
					>
						Save Email
					</button>
				</div>
				<div className="update-password">
					<div className="update-title">Update Password:</div>
					<input
						type="password"
						placeholder="New Password"
						className="profile-password-input"
						value={newPassword}
						onChange={(e) => setNewPassword(e.target.value)}
					/>
					<input
						type="password"
						placeholder="Retype New Password"
						className="profile-password-input"
						value={retypePassword}
						onChange={(e) => setRetypePassword(e.target.value)}
					/>
					<button
						className="save-password-button"
						onClick={saveNewPassword}
						disabled={
							!newPassword || !retypePassword || newPassword !== retypePassword
						}
					>
						Save Password
					</button>
				</div>
				<div className="custom-divider"></div>
				<div className="separate">
					<button
						className="profile-button"
						onClick={() => navigate('/manage-credit-cards')}
					>
						Manage Credit Cards <CreditCardIcon />
					</button>
					<button
						className="profile-button"
						onClick={() => navigate('/manage-subscriptions')}
					>
						Manage Subscriptions <EventRepeatIcon />
					</button>
					<button
						className="profile-button"
						onClick={() => navigate('/history')}
					>
						Transaction History <ReceiptIcon />
					</button>
				</div>
			</div>
			{showSuccessPopup && (
				<>
					<div className="popup-backdrop"></div>
					<div className="success-popup">
						<p>{successMessage}</p>
					</div>
				</>
			)}

			<LogoutModal
				isOpen={isLogoutModalOpen}
				onClose={() => setLogoutModalOpen(false)}
				onLogout={logout}
			/>
		</div>
	);
};

export default Profile;
