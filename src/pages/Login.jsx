import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import userIcon from '../assets/userIcon.png'; // Import the user icon image

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [rememberMe, setRememberMe] = useState(false);
	const navigate = useNavigate(); // Initialize useNavigate

	const handleLogin = () => {
		// Implement login functionality
		console.log('Logging in with:', email, password);
		// After successful login, navigate to home page
		navigate('/home');
	};

	return (
		<div
			style={{
				position: 'relative',
				height: '100vh',
				backgroundColor: '#F5F5DC',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<h1 style={{ fontSize: 16, position: 'absolute', top: 0, left: 10 }}>
				Calgary <br></br>Transit
			</h1>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					height: '100%',
				}}
			>
				<div style={{ marginTop: '-40px', marginBottom: '20px' }}>
					<img
						src={userIcon}
						alt="User Icon"
						style={{ width: 100, height: 100 }}
					/>
				</div>
				<input
					type="text"
					placeholder="Email or Username"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					style={{
						width: '80%',
						height: 40,
						marginBottom: 20,
						borderRadius: 20,
						paddingLeft: 10,
					}}
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					style={{
						width: '80%',
						height: 40,
						marginBottom: 10,
						borderRadius: 20,
						paddingLeft: 10,
					}}
				/>
				<label
					style={{ verticalAlign: 'middle', fontSize: 14, marginBottom: 10 }}
				>
					<input
						type="checkbox"
						checked={rememberMe}
						onChange={() => setRememberMe(!rememberMe)}
					/>
					Remember Me
				</label>
				<button
					style={{
						backgroundColor: 'green',
						color: 'white',
						padding: '15px 30px',
						borderRadius: 10,
						border: 'none',
						marginBottom: 30,
					}}
					onClick={handleLogin}
				>
					Login
				</button>
				<div style={{ display: 'flex' }}>
					{/* Link to Create Account page */}
					<Link to="/create-account" style={{ textDecoration: 'none' }}>
						<button
							style={{
								backgroundColor: 'blue',
								color: 'white',
								padding: '10px 20px',
								borderRadius: 20,
								border: 'none',
								marginRight: 40,
							}}
						>
							Create Account
						</button>
					</Link>
					<button
						style={{
							backgroundColor: 'blue',
							color: 'white',
							padding: '10px 20px',
							borderRadius: 20,
							border: 'none',
						}}
					>
						Forgot Password
					</button>
				</div>
				<div style={{ position: 'absolute', bottom: 10, left: 10 }}>
					<button
						onClick={() => navigate(-1)}
						style={{
							backgroundColor: 'gray',
							color: 'white',
							padding: '10px 20px',
							borderRadius: 20,
							border: 'none',
							marginRight: 40,
						}}
					>
						Back
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
