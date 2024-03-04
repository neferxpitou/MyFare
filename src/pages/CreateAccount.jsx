import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
				Calgary <br />
				Transit
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
				<h2 style={{marginBottom:40}}>Create Account</h2>
				<input
					type="text"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					style={{
						width: '140%',
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
						width: '140%',
						height: 40,
						marginBottom: 20,
						borderRadius: 20,
						paddingLeft: 10,
					}}
				/>
				<input
					type="password"
					placeholder="Confirm Password"
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
					style={{
						width: '140%',
						height: 40,
						marginBottom: 20,
						borderRadius: 20,
						paddingLeft: 10,
					}}
				/>
				<button
					style={{
						backgroundColor: 'blue',
						color: 'white',
						padding: '10px 20px',
						borderRadius: 20,
						border: 'none',
						marginBottom: 20,
					}}
					onClick={handleCreateAccount}
				>
					Create Account
				</button>
				{message && <p style={{ color: 'green' }}>{message}</p>}
				<Link
					to="/"
					style={{
						position: 'absolute',
						bottom: 10,
						left: 10,
						textDecoration: 'none',
					}}
				>
					<button
						style={{
							backgroundColor: 'gray',
							color: 'white',
							padding: '10px 20px',
							borderRadius: 20,
							border: 'none',
						}}
					>
						Back
					</button>
				</Link>
			</div>
		</div>
	);
};

export default CreateAccount;
