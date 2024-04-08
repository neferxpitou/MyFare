import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileNav from '../../components/Navbar/ProfileNav';
import './Profile.css';

const Profile = () => {
	const navigate = useNavigate();
	return (
		<div className="profile-container">
			<ProfileNav />
			<div className="profile-content">
				<div className="update-email">
					<div className="update-title">Update Email:</div>
					<input
						type="email"
						placeholder="New Email Address"
						className="profile-email-input"
					/>
					<button className="save-email-button">Save Email</button>
				</div>
				<div className="update-password">
					<div className="update-title">Update Password:</div>
					<input
						type="password"
						placeholder="New Password"
						className="profile-password-input"
					/>
					<input
						type="password"
						placeholder="Retype New Password"
						className="profile-password-input"
					/>
					<button className="save-password-button">Save Password</button>
				</div>
				<div className="custom-divider"></div>
				<div className="separate">
					<button
						className="profile-button"
						onClick={() => navigate('/contact-us')}
					>
						Credit Cards
					</button>
					<button
						className="profile-button"
						onClick={() => navigate('/manage-subscriptions')}
					>
						Subscriptions
					</button>
					<button
						className="profile-button"
						onClick={() => navigate('/history')}
					>
						Transaction History
					</button>
				</div>
			</div>
		</div>
	);
};

export default Profile;
