import './Navbar.css';
import { AccountCircleSharp } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import BackButton from '../Buttons/BackButton/BackButton';

const Navbar = () => {
	return (
		<nav className="navbar">
			<BackButton />
			<div className="navbar-brand">MyFare</div>
			<div className="navbar-profile">
				<Link to="/profile">
					<AccountCircleSharp />
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
