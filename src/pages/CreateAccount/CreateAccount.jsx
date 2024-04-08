import BackButtonAlt from '../../components/Buttons/BackButton/BackButtonAlt';
import './CreateAccount.css';

const CreateAccount = () => {
	return (
		<div className="create-account-container">
			<div className="back-button-wrapper">
				<BackButtonAlt />
			</div>
			<div className="create-title">Create Your Account</div>
			<div className="create-input-fields">
				<input
					type="text"
					placeholder="Email Address"
					className="create-email-input"
				/>
				<input
					type="text"
					placeholder="Password"
					className="create-password-input"
				/>
				<input
					type="text"
					placeholder="Retype Password"
					className="create-password-input"
				/>
			</div>
			<div className="sign-up-wrapper">
				<button className="sign-up-button">Sign Up</button>
			</div>
		</div>
	);
};

export default CreateAccount;
