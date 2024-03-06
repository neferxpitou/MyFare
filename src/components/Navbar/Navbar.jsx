import './Navbar.css';
import { AccountCircleSharp } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="navbar-brand">Calgary Transit</div>
			<div className="navbar-profile">
				<Link to="/profile">
					<AccountCircleSharp />
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
