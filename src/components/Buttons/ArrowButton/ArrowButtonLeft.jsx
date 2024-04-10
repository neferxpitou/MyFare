import './ArrowButton.css';
import { ArrowLeftSharp } from '@mui/icons-material';

const ArrowButtonLeft = ({ onClick }) => {
	return (
		<button className="arrow-button" onClick={onClick}>
			<ArrowLeftSharp />
		</button>
	);
};

export default ArrowButtonLeft;
