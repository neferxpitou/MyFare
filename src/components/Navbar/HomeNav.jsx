import './HomeNav.css';
import { AccountCircleSharp } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="home-navbar">
			<div className="home-navbar-brand">MyFare</div>
			<div className="home-navbar-profile">
				<Link to="/profile">
					<AccountCircleSharp />
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
