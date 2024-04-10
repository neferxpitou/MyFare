import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackButtonAlt from '../../components/Buttons/BackButton/BackButtonAlt';
import './CreateAccount.css';

const CreateAccount = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [retypePassword, setRetypePassword] = useState('');
	const [error, setError] = useState('');

	const validateEmail = (email) => {
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	};

	const handleSignUp = () => {
		setError('');

		if (!email || !password || !retypePassword) {
			setError('Please fill in all fields.');
			return;
		}

		if (!validateEmail(email)) {
			setError('Please enter a valid email address.');
			return;
		}

		if (password !== retypePassword) {
			setError('Passwords do not match.');
			return;
		}

		if (localStorage.getItem(email)) {
			setError('An account with this email already exists.');
			return;
		}

		const userData = {
			email,
			password,
			creditCards: [],
			selectedTickets: [],
			purchasedTickets: [],
		};

		localStorage.setItem(email, JSON.stringify(userData));
		localStorage.setItem('loggedInUser', email);

		navigate('/home');
	};

	return (
		<div className="create-account-container">
			<div className="back-button-wrapper">
				<BackButtonAlt />
			</div>
			<div className="create-title">Create Your Account</div>
			<div className="create-account-error">{error || '\u00A0'}</div>
			<div className="create-input-fields">
				<input
					type="email"
					placeholder="Email Address"
					className="create-email-input"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Password"
					className="create-password-input"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Retype Password"
					className="create-password-input"
					value={retypePassword}
					onChange={(e) => setRetypePassword(e.target.value)}
				/>
			</div>
			<div className="sign-up-wrapper">
				<button className="sign-up-button" onClick={handleSignUp}>
					Sign Up
				</button>
			</div>
		</div>
	);
};

export default CreateAccount;
