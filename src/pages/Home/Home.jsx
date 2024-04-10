import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeNav from '../../components/Navbar/HomeNav';
import ArrowButtonLeft from '../../components/Buttons/ArrowButton/ArrowButtonLeft';
import ArrowButtonRight from '../../components/Buttons/ArrowButton/ArrowButtonRight';
import Active from '../../components/Tickets/Active/Active';
import Unactive from '../../components/Tickets/Unactive/Unactive';
import ChatIcon from '@mui/icons-material/Chat';
import QuizIcon from '@mui/icons-material/Quiz';
import './Home.css';

const Home = () => {
	const navigate = useNavigate();
	const [activeFilter, setActiveFilter] = useState(null);
	const [tickets, setTickets] = useState([]);
	const [filteredTickets, setFilteredTickets] = useState([]);
	const [currentTicketIndex, setCurrentTicketIndex] = useState(0);

	useEffect(() => {
		const loggedInUser = localStorage.getItem('loggedInUser');
		if (loggedInUser) {
			const userData = JSON.parse(localStorage.getItem(loggedInUser));
			const expandedTickets = [];
			userData.purchasedTickets.forEach((ticket, idx) => {
				for (let i = 0; i < ticket.quantity; i++) {
					expandedTickets.push({
						...ticket,
						quantity: 1,
						id: `${idx}-${i}-${Date.now()}`,
					});
				}
			});
			setTickets(expandedTickets);
		}
	}, []);

	useEffect(() => {
		const passes = [
			'Youth Day Pass',
			'Youth Monthly Pass',
			'Adult Day Pass',
			'Adult Monthly Pass',
		];
		const filtered = tickets.filter((ticket) =>
			activeFilter === 'tickets'
				? !passes.includes(ticket.type)
				: activeFilter === 'passes'
					? passes.includes(ticket.type)
					: true
		);
		setFilteredTickets(filtered);
	}, [tickets, activeFilter]);

	const nextTicket = () => {
		setCurrentTicketIndex(
			(prevIndex) => (prevIndex + 1) % filteredTickets.length
		);
	};

	const prevTicket = () => {
		setCurrentTicketIndex((prevIndex) =>
			prevIndex === 0 ? filteredTickets.length - 1 : prevIndex - 1
		);
	};

	const activateTicket = (ticketId) => {
		const updatedTickets = tickets.map((ticket) => {
			if (ticket.id === ticketId) {
				const activationTime = new Date();
				let validUntil = new Date(activationTime);
				switch (ticket.type) {
					case 'Adult Single Ticket':
					case 'Youth Single Ticket':
						validUntil.setMinutes(validUntil.getMinutes() + 90);
						break;
					case 'Adult Day Pass':
					case 'Youth Day Pass':
						validUntil.setDate(validUntil.getDate() + 1);
						validUntil.setHours(2, 0, 0, 0);
						break;
					case 'Adult Monthly Pass':
					case 'Youth Monthly Pass':
						validUntil.setMonth(validUntil.getMonth() + 1);
						validUntil.setDate(0);
						validUntil.setHours(23, 59, 59, 999);
						break;
					default:
						break;
				}
				return {
					...ticket,
					activated: activationTime.toISOString(),
					validUntil: validUntil.toISOString(),
					ticketId: `TICKET-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
				};
			}
			return ticket;
		});

		const loggedInUser = localStorage.getItem('loggedInUser');
		if (loggedInUser) {
			const userData = JSON.parse(localStorage.getItem(loggedInUser));
			userData.purchasedTickets = updatedTickets;
			localStorage.setItem(loggedInUser, JSON.stringify(userData));
		}
		setTickets(updatedTickets);
	};

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
					<ArrowButtonLeft onClick={prevTicket} />
					{filteredTickets.length > 0 ? (
						filteredTickets[currentTicketIndex].activated ? (
							<Active details={filteredTickets[currentTicketIndex]} />
						) : (
							<Unactive
								details={filteredTickets[currentTicketIndex]}
								onActivate={() =>
									activateTicket(filteredTickets[currentTicketIndex].id)
								}
							/>
						)
					) : (
						<div>No Tickets</div>
					)}
					<ArrowButtonRight onClick={nextTicket} />
				</div>

				<div
					className={`ticket-counter-display ${filteredTickets.length > 0 ? 'visible' : ''}`}
				>
					{filteredTickets.length > 0
						? `Ticket ${currentTicketIndex + 1} of ${filteredTickets.length}`
						: '\u00A0'}
				</div>

				<button
					className="contact-us-button"
					onClick={() => navigate('/contact-us')}
				>
					Contact Us <ChatIcon />
				</button>
				<button className="faqs-button" onClick={() => navigate('/faqs')}>
					FAQs <QuizIcon />
				</button>
			</div>
		</div>
	);
};

export default Home;
