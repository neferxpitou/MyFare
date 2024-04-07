import './Decrement.css';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const Decrement = ({ onClick }) => {
	return (
		<button className="decrement-button" onClick={onClick}>
			<RemoveCircleIcon />
		</button>
	);
};

export default Decrement;
