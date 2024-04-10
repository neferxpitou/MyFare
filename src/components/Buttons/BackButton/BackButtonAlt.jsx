import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './BackButtonAlt.css';

const BackButtonAlt = () => {
	const navigate = useNavigate();

	return (
		<div className="back-button-alt-container">
			<button className="back-button-alt" onClick={() => navigate(-1)}>
				<ArrowBackIcon />
			</button>
		</div>
	);
};

export default BackButtonAlt;
