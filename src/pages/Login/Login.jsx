import React from 'react';
import './Login.css';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();

	return (
		<div className="login-container">
			<div className="app-title">
				<DirectionsBusIcon /> MyFare
			</div>
			<div className="login-input-fields">
				<input
					type="text"
					placeholder="Email or Username"
					className="login-email-input"
				/>
				<input
					type="password"
					placeholder="Password"
					className="login-password-input"
				/>
			</div>
			<div className="forgot-password">
				<a href="/login">Forgot Password?</a>
			</div>
			<div className="login-wrapper">
				<button className="login-button">Login</button>
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
