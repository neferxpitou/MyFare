import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './ContactUs.css';

const ContactUs = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [showConfirmation, setShowConfirmation] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (email && message) {
			setShowConfirmation(true);
			setTimeout(() => {
				navigate('/home');
			}, 2000);
		}
	};

	return (
		<div className="contactus-container">
			<Navbar />

			{showConfirmation && <div className="overlay"></div>}

			<div className="contactus-content">
				<div className="contactus-title">Contact Us</div>
				<div className="contactus-section">
					<div className="contactus-heading">Phone</div>
					<div className="contactus-details">(403) 268-1969</div>
				</div>
				<hr className="contactus-divider" />
				<div className="contactus-section">
					<div className="contactus-heading">Email</div>
					<div className="contactus-details">MyFare@calgary.ca</div>
					<hr className="contactus-divider" />
					<div className="contactus-note">
						For any issues with the application, please fill out the form below
						and we will get back to you as soon as possible.
					</div>
					<form className="contactus-form" onSubmit={handleSubmit}>
						<input
							className="contactus-input"
							type="text"
							placeholder="Your Email Address"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<textarea
							className="contactus-input"
							placeholder="Type in your Message"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						></textarea>
						<button
							className={`send-email ${email && message ? '' : 'disabled'}`}
							type="submit"
							disabled={!email || !message}
						>
							Send Email
						</button>
					</form>
				</div>
				<hr className="contactus-divider" />
				<div className="contactus-section">
					<div className="contactus-heading">Website</div>
					<a className="contactus-link">calgarytransit.com/MyFare</a>
				</div>
				<hr className="contactus-divider" />
			</div>
			{showConfirmation && (
				<div className="confirmation-popup">
					<CheckCircleIcon style={{ color: 'green', fontSize: '40px' }} />
					<p>Email sent successfully!</p>
				</div>
			)}
		</div>
	);
};

export default ContactUs;
