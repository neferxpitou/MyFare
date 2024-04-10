import './ProfileNav.css';
import BackButton from '../Buttons/BackButton/BackButton';
import { Link } from 'react-router-dom';

const ProfileNav = ({ openLogoutModal }) => {
	return (
		<nav className="profile-navbar">
			<BackButton />
			<Link to="/home" className="profile-navbar-brand">
				MyFare
			</Link>
			<div className="profile-navbar-logout">
				<button className="logout-button" onClick={openLogoutModal}>
					LOGOUT
				</button>
			</div>
		</nav>
	);
};

export default ProfileNav;
