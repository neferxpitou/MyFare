import './Increment.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Increment = ({ onClick }) => {
	return (
		<button className="increment-button" onClick={onClick}>
			<AddCircleIcon />
		</button>
	);
};

export default Increment;
