import './CreditCard.css';
import { Delete } from '@mui/icons-material';

const CreditCard = () => {
	return (
		<div>
			<div className="credit-card">
				<img src="/visa.png" alt="Visa Logo" className="visa-logo" />
				<div className="card-number"> 1234 </div>
				<div className="expiration"> EXP 07/25 </div>
				<button className="trash-bin">
					<Delete />
				</button>
			</div>
		</div>
	);
};

export default CreditCard;
