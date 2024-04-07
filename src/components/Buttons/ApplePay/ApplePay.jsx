import AppleIcon from '@mui/icons-material/Apple';
import './ApplePay.css';

const ApplePay = () => {
	return (
		<button className="applePayButton">
			<AppleIcon style={{ verticalAlign: 'middle' }} /> Buy with Apple Pay
		</button>
	);
};

export default ApplePay;
