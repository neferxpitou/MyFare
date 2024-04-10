import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './BackButton.css';

const BackButton = () => {
	const navigate = useNavigate();
	return (
		<div className="back-button-container">
			<button className="back-button" onClick={() => navigate(-1)}>
				<ArrowBackIcon />
			</button>
		</div>
	);
};

export default BackButton;
