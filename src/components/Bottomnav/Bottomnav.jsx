import './Bottomnav.css';

const Bottomnav = ({ leftLabel, rightLabel }) => {
	return (
		<nav className="bottomnav">
			<button className="left-button">{leftLabel}</button>
			<button className="right-button">{rightLabel}</button>
		</nav>
	);
};

export default Bottomnav;
