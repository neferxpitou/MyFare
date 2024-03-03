import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="navbar-brand">Transit</div>
			<div className="navbar-profile">
				<Link to="/profile">
					<img src="userIcon.png" alt="Profile" />
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
