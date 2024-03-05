import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CreateAccount.css';

const CreateAccount = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [message, setMessage] = useState('');

	const handleCreateAccount = () => {
		// Check if email is valid
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			setMessage('Please enter a valid email address');
			return;
		}

		// Check if passwords match
		if (password !== confirmPassword) {
			setMessage('Passwords do not match');
			return;
		}

		// Implement create account functionality
		console.log('Creating account with:', email, password);
		setMessage('Account successfully created');

		// Redirect to login page after 2 seconds
		setTimeout(() => {
			window.location.href = '/';
		}, 2000);
	};

	return (
		<div>
			<div className="container">
				<h1>Calgary<br />Transit</h1>
				<div className="form-container">
					<h2>Create Account</h2>
					<input
						type="text"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<input
						type="password"
						placeholder="Confirm Password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
					<button onClick={handleCreateAccount}>Create Account</button>
					{message && <p className="message">{message}</p>}
					<Link to="/">
						<button className="back-button">Back</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CreateAccount;
