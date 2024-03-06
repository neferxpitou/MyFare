import Navbar from '../../components/Navbar/Navbar';
import Bottomnav from '../../components/Bottomnav/Bottomnav';
import LargeButton from '../../components/Buttons/LargeButton/LargeButton';
import MediumButton from '../../components/Buttons/MediumButton/MediumButton';
import ArrowButtonLeft from '../../components/Buttons/ArrowButton/ArrowButtonLeft';
import ArrowButtonRight from '../../components/Buttons/ArrowButton/ArrowButtonRight';
import CreditCard from '../../components/CardsDisplay/CreditCard';
import './Profile.css';

const Profile = () => {
	return (
		<div className="profile-container">
			<Navbar />
			<div className="content">
				<div className="account-details">
					<LargeButton label="Account Details" />
				</div>
				<div className="cards-area">
					<ArrowButtonLeft />
					<CreditCard />
					<ArrowButtonRight />
				</div>
				<div className="subscriptions-history">
					<MediumButton label="Manage Subscriptions" />
					<MediumButton label="Transaction History" />
				</div>
			</div>
			<Bottomnav leftLabel="< BACK" rightLabel="LOGOUT" />
		</div>
	);
};

export default Profile;
