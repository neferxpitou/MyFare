import './ArrowButton.css';
import { ArrowRightSharp } from '@mui/icons-material';

const ArrowButtonRight = ({ onClick }) => {
	return (
		<button className="arrow-button" onClick={onClick}>
			<ArrowRightSharp />
		</button>
	);
};

export default ArrowButtonRight;
