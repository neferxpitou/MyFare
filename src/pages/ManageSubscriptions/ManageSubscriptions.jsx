import Navbar from '../../components/Navbar/Navbar';
import './ManageSubscriptions.css';
import { Link } from 'react-router-dom';
const ManageSubsciptions = () => {
	return (
		<div>
			<Navbar />
			<div className="headerclass">Manage Subscriptions</div>
			<div className ="centerclass"><Link to="/add-subscriptions">
				<button className="buttonclass">Add</button>
				</Link>
				</div>
			<div className ="centerclass">
				<button className="buttonclass">Cancel</button>
				</div>
			<div><Link to="/profile">
				<button className="backbutton">Back</button>
				</Link>
				</div>
		</div>
	);
};

export default ManageSubsciptions;
