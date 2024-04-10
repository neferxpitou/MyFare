import AppleIcon from '@mui/icons-material/Apple';
import './ApplePay.css';

const ApplePay = ({ onClick }) => {
	return (
		<button className="applePayButton" onClick={onClick}>
			<AppleIcon style={{ verticalAlign: 'middle' }} /> Buy with Apple Pay
		</button>
	);
};

export default ApplePay;
