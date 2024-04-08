import Navbar from '../../components/Navbar/Navbar';
import './History.css';

const History = () => {
	return (
		<div className="history-container">
			<Navbar />
			<div className="history-content">
				<div className="history-title">Transaction History</div>

				<div className="list-of-transactions">
					<button className="transaction-item">
						<div className="transaction-section-one">
							<div className="transaction-title">Adult Single</div>
							<div className="transaction-date">02-16-2024</div>
						</div>

						<div className="transaction-section-two">
							<div className="transaction-amount">$3.70</div>
							<div className="Details">Tap for More Details</div>
						</div>
					</button>
				</div>
			</div>
		</div>
	);
};

export default History;
