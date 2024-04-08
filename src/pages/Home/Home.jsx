import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeNav from '../../components/Navbar/HomeNav';
import ArrowButtonLeft from '../../components/Buttons/ArrowButton/ArrowButtonLeft';
import ArrowButtonRight from '../../components/Buttons/ArrowButton/ArrowButtonRight';
import Unactive from '../../components/Tickets/Unactive/Unactive';
import ChatIcon from '@mui/icons-material/Chat';
import QuizIcon from '@mui/icons-material/Quiz';
import './Home.css';

const Home = () => {
	const [activeFilter, setActiveFilter] = useState(null);
	const navigate = useNavigate();

	const toggleFilter = (filter) => {
		setActiveFilter(activeFilter === filter ? null : filter);
	};

	return (
		<div className="home-container">
			<HomeNav />
			<div className="home-content">
				<button
					className="purchase-button"
					onClick={() => navigate('/tickets')}
				>
					Purchase Tickets
				</button>
				<div className="filter-buttons">
					<button
						className={`filter-button ${activeFilter === 'tickets' ? 'active' : ''}`}
						onClick={() => toggleFilter('tickets')}
					>
						Tickets
					</button>
					<button
						className={`filter-button ${activeFilter === 'passes' ? 'active' : ''}`}
						onClick={() => toggleFilter('passes')}
					>
						Passes
					</button>
				</div>
				<div className="tickets-widget">
					<ArrowButtonLeft />
					<Unactive />
					<ArrowButtonRight />
				</div>
				<button
					className="contact-us-button"
					onClick={() => navigate('/contact-us')}
				>
					Contact Us
					<ChatIcon />
				</button>
				<button className="faqs-button" onClick={() => navigate('/faqs')}>
					FAQs
					<QuizIcon />
				</button>
			</div>
		</div>
	);
};

export default Home;
