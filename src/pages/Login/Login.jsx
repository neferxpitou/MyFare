import React, { useState } from 'react';
import './Login.css';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleLogin = () => {
		setError('');
		const userData = localStorage.getItem(email);
		if (userData) {
			const user = JSON.parse(userData);
			if (user.password === password) {
				localStorage.setItem('loggedInUser', email);
				navigate('/home');
			} else {
				setError('Incorrect email or password.');
			}
		} else {
			setError('Incorrect email or password.');
		}
	};

	return (
		<div className="login-container">
			<div className="app-title">
				<DirectionsBusIcon /> MyFare
			</div>
			<div className="login-error-message" aria-live="polite">
				{error || '\u00A0'}
			</div>
			<div className="login-input-fields">
				<input
					type="text"
					placeholder="Email Address"
					className="login-email-input"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Password"
					className="login-password-input"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<div className="forgot-password">
				<a>Forgot Password?</a>
			</div>
			<div className="login-wrapper">
				<button className="login-button" onClick={handleLogin}>
					Login
				</button>
			</div>
			<div className="divider">New to MyFare?</div>
			<div className="create-wrapper">
				<button
					className="create-button"
					onClick={() => navigate('/create-account')}
				>
					Create Account
				</button>
			</div>
		</div>
	);
};

export default Login;
