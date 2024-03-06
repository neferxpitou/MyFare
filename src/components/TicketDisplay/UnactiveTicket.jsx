import './UnactiveTicket.css';
import DetailsButton from '../Buttons/DetailsButton/DetailsButton';
import ActivateButton from '../Buttons/ActivateButton/ActivateButton';
const UnactiveTicket = () => {
	return (
		<div className="unactive-ticket">
			<ActivateButton label="Activate Ticket" />
			<div className="ticket-type"> ADULT DAY PASS </div>
			<DetailsButton label="Details" />
		</div>
	);
};

export default UnactiveTicket;
