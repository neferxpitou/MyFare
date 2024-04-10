import React from 'react';
import './Unactive.css';

const Unactive = ({ details, onActivate }) => {
	return (
		<div className="unactive">
			<button className="ticket-button">{details.type}</button>
			<button className="activate-button" onClick={onActivate}>
				Tap to Activate
			</button>
		</div>
	);
};

export default Unactive;
