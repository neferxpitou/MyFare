import React from 'react';
import './Unactive.css';
import InfoIcon from '@mui/icons-material/Info';

const Unactive = () => {
	return (
		<div className="unactive">
			<button className="ticket-button">
				ADULT DAY PASS
				<InfoIcon style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
			</button>
			<button className="activate-button">Tap to Activate</button>
		</div>
	);
};

export default Unactive;
