import Navbar from '../../components/Navbar/Navbar';
import './History.css';

const History = () => {
	return (
		<div className="page">
			<Navbar />
			<h1>History</h1>
			<div className="content">
				<div className="transaction">
					<details>
						<summary>3.50$ Used: 2024-10-03</summary>
						Date Purchased: 2024-09-28
					</details>
				</div>
				<div className="transaction">
					<details>
						<summary>5.00$ Used: 2024-09-27</summary>
						Date Purchased: 2024-09-23
					</details>
				</div>
				<div className="transaction">
					<details>
						<summary>3.50$ Used: 2024-08-05</summary>
						Date Purchased: 2024-08-03
					</details>
				</div>
				<div className="transaction">
					<details>
						<summary>2.00$ Used: 2023-12-27</summary>
						Date Purchased: 2023-12-23
					</details>
				</div>
			</div>
			<button>Back</button>
		</div>
	);
};

export default History;
