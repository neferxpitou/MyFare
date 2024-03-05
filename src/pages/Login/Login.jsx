import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import userIcon from '../../assets/userIcon.png';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [rememberMe, setRememberMe] = useState(false);
	const navigate = useNavigate();

	const handleLogin = () => {
		console.log('Logging in with:', email, password);
		navigate('/home');
	};

	return (
		<div className="container">
			<h1>
				Calgary <br /> Transit
			</h1>
			<div className="login-form">
				<div className="user-icon">
					<img
						src={userIcon}
						alt="User Icon"
						className="user-icon"
						style={{ width: '100px', height: '100px' }}
					/>
				</div>
				<input
					type="text"
					placeholder="Email or Username"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<label>
					<input
						type="checkbox"
						checked={rememberMe}
						onChange={() => setRememberMe(!rememberMe)}
					/>
					Remember Me
				</label>
				<button className="login-button" onClick={handleLogin}>
					Login
				</button>
				<div className="buttons-container">
					<button className="forgot-password-button">
						Forgot Password
					</button>
					{/* Link to Create Account page */}
					<Link to="/create-account" style={{ textDecoration: 'none' }}>
						<button className="create-account-button">
							Create Account
						</button>
					</Link>
				</div>
			</div>
			<div className="back-button-container">
				<button className="back-button" onClick={() => navigate(-1)}>
					Back
				</button>
			</div>
		</div>
	);
};

export default Login;
