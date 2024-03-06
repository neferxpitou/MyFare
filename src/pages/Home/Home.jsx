import Navbar from '../../components/Navbar/Navbar';
import LargeButton from '../../components/Buttons/LargeButton/LargeButton';
import MediumButton from '../../components/Buttons/MediumButton/MediumButton';
import ArrowButtonLeft from '../../components/Buttons/ArrowButton/ArrowButtonLeft';
import ArrowButtonRight from '../../components/Buttons/ArrowButton/ArrowButtonRight';
import UnactiveTicket from '../../components/TicketDisplay/UnactiveTicket';
import './Home.css';

const Home = () => {
	return (
		<div className="home-container">
			<Navbar />
			<div className="content">
				<div className="purchase-tickets">
					<LargeButton label="Purchase Tickets" />
				</div>
				<div className="tickets-area">
					<ArrowButtonLeft />
					<UnactiveTicket />
					<ArrowButtonRight />
				</div>
				<div className="contact-faq-website">
					<MediumButton label="Contact Us" />
					<MediumButton label="FAQs" />
					<MediumButton label="Website" />
				</div>
			</div>
		</div>
	);
};

export default Home;
