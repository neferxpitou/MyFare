import './ProfileNav.css';
import BackButton from '../Buttons/BackButton/BackButton';

const ProfileNav = () => {
	return (
		<nav className="profile-navbar">
			<BackButton />
			<div className="profile-navbar-brand">MyFare</div>
			<div className="profile-navbar-logout">
				<button className="logout-button">LOGOUT</button>
			</div>
		</nav>
	);
};

export default ProfileNav;
