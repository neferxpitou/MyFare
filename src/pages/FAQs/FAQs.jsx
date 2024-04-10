import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './FAQs.css';

const faqsContent = [
	{
		question: 'What is MyFare?',
		answer:
			'MyFare is a mobile ticketing app that allows you to purchase and use fare products directly from your mobile device.',
	},
	{
		question: 'Is MyFare available on all devices?',
		answer:
			'MyFare is available on the majority of iOS or Android devices installed with the current or previous major version operating system.',
	},
	{
		question: 'How do I use MyFare?',
		answer:
			'After downloading MyFare, create an account, then select the product you wish to buy, enter your credit card payment information, and confirm your transaction. The purchased products will be electronically delivered to your MyFare ticket wallet and a receipt for your purchase will automatically be sent to your email address.',
	},
	{
		question: 'Are there any fees for using mobile ticketing?',
		answer:
			'MyFare is free to download. Fare products purchased using the app cost the same as those purchased from our vendors or at a ticket vending machine.',
	},
	{
		question: 'What types of products can I purchase with MyFare?',
		answer:
			'You can purchase the following products through MyFare: Adult and Youth monthly pass, Adult and Youth day pass, Adult and Youth single tickets. Additionally, you can also sign up for an Adult and Youth monthly pass subscription.',
	},
	{
		question: 'How do monthly subscriptions work on MyFare?',
		answer:
			'With a monthly subscription on MyFare, you can enjoy the convenience of an automatic monthly pass purchase. Subscriptions are charged to your payment method, and a new pass is delivered to your account each month. Your subscription will renew automatically at the start of each month. You can manage or cancel your subscription at any time.',
	},
	{
		question: 'What payment options are available to purchase fare products?',
		answer:
			'You can purchase a product using a credit card. MyFare currently accepts Visa and Mastercard and American Express. Payment can also be made through Apple Pay.',
	},
	{
		question: 'How and when should I activate my mobile ticket?',
		answer:
			'You MUST activate your ticket or pass prior to boarding a Transit vehicle or prior to entering a fare restricted area. Be ready to scan your pass or ticket at the onboard validator when boarding a vehicle or show to a Calgary Transit official upon request. Your purchased products can be found in your Ticket Wallet on the main screen of the MyFare application.',
	},
	{
		question: 'Can I transfer to other routes with a mobile ticket or pass?',
		answer:
			'Yes. You can use the same mobile ticket or pass to transfer to other fixed routes, as well as Calgary Transit Access and On Demand vehicles.',
	},
	{
		question: 'Do MyFare tickets or passes expire?',
		answer:
			'Single tickets are still valid within the 90-minute limit. Day passes are valid until 2:00 a.m. the day following activation. Monthly passes are only valid for the month purchased.',
	},
	{
		question: 'How do I know when my single ride ticket will expire?',
		answer:
			'After you’ve activated your ticket, you can check how much time you have left by tapping on the ticket itself and viewing the expiration time.',
	},
	{
		question: 'My bus has a ticket onboard validator on it. What do I do?',
		answer:
			'Please tap the QR code on the lower screen of the onboard validator. An audible beep and a coloured screen will identify the ticket as valid for use.',
	},
	{
		question: 'What if I activated my ticket by mistake; can I deactivate it?',
		answer: 'No, tickets cannot be deactivated.',
	},
];

const FAQItem = ({ faq, isOpen, toggleFAQ }) => (
	<div className="faq-item">
		<button
			className={`faq-question${isOpen ? ' open' : ''}`}
			onClick={toggleFAQ}
		>
			{faq.question}
		</button>
		<div className={`faq-answer${isOpen ? ' open' : ''}`}>
			{isOpen && <p>{faq.answer}</p>}
		</div>
	</div>
);

const FAQs = () => {
	const [openFAQs, setOpenFAQs] = useState([]);
	const [isAllOpen, setIsAllOpen] = useState(false);

	const toggleFAQ = (index) => {
		setOpenFAQs((currentOpenFAQs) => {
			if (currentOpenFAQs.includes(index)) {
				return currentOpenFAQs.filter((i) => i !== index);
			} else {
				return [...currentOpenFAQs, index];
			}
		});
	};

	const toggleAllFAQs = () => {
		if (isAllOpen) {
			setOpenFAQs([]);
		} else {
			setOpenFAQs(faqsContent.map((_, index) => index));
		}
		setIsAllOpen(!isAllOpen);
	};

	return (
		<div className="faqs-container">
			<Navbar />
			<div className="faqs-content">
				<h1 className="faqs-title">FAQs</h1>
				<button onClick={toggleAllFAQs} className="toggle-all-button">
					{isAllOpen ? 'Collapse All' : 'Expand All'}
				</button>
				{faqsContent.map((faq, index) => (
					<FAQItem
						key={index}
						faq={faq}
						isOpen={openFAQs.includes(index)}
						toggleFAQ={() => toggleFAQ(index)}
					/>
				))}
			</div>
		</div>
	);
};

export default FAQs;
