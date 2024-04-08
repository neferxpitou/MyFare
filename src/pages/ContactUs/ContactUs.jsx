import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './ContactUs.css';

const ContactUs = () => {
	return (
		<div className="contactus-container">
			<Navbar />
			<div className="contactus-content">
				<div className="contactus-title">Customer Service</div>
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
					<form className="contactus-form">
						<input
							className="contactus-input"
							type="text"
							placeholder="Your Email Address"
						/>
						<textarea
							className="contactus-input"
							placeholder="Type in your Message"
						></textarea>
						<button className="send-email">Send Email</button>
					</form>
				</div>
				<hr className="contactus-divider" />
				<div className="contactus-section">
					<div className="contactus-heading">Website</div>
					<a className="contactus-link">calgarytransit.com/MyFare</a>
				</div>
				<hr className="contactus-divider" />
			</div>
		</div>
	);
};

export default ContactUs;
