import Navbar from '../../components/Navbar/Navbar';
import './AddSubscriptions.css';
import { Link } from 'react-router-dom';
import React, { useState } from "react";
//references:
//https://timetoprogram.com/increment-decrement-counter-button-in-react/

const AddSubscriptions = ({ minValue = 0}) => {

	const [ASV, setASV] = useState(minValue);
	const [YSV, setYSV] = useState(minValue);
	
	const decrementASV = () => {
		if (ASV > minValue){
			setASV((prevState) => prevState - 1);
		}
	}
	const incrementASV = () => {
		setASV((prevState) => prevState + 1);
	}
	const decrementYSV = () => {
		if (YSV > minValue){
			setYSV((prevState) => prevState - 1);
		}
	}
	const incrementYSV = () => {
		setYSV((prevState) => prevState + 1);
	}
	return (
		<div>
			<Navbar />
			<h1 className="headerclass">Add Subscriptions</h1>
			<div className="subtypeclass">
				Adult Subscription: <button onClick ={decrementASV}>-</button> {ASV} <button onClick ={incrementASV}>+</button>
			</div>
			<div className="subtypeclass">
				Youth Subscription: <button onClick ={decrementYSV}>-</button> {YSV} <button onClick ={incrementYSV}>+</button>
			</div>
			<div className="headerclass"><Link to="/checkout">
				<button className="checkoutbutton">Checkout</button>
				</Link>
			</div>
			<div><Link to="/manage-subscriptions">
				<button className="backbutton">Back</button>
				</Link>
				</div>
		</div>
	);
};

export default AddSubscriptions;
