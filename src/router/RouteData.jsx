import { Navigate } from 'react-router-dom';
import Home from '../pages/Home/Home.jsx';
import Profile from '../pages/Profile/Profile.jsx';
import Tickets from '../pages/Tickets/Tickets.jsx';
import Checkout from '../pages/Checkout/Checkout.jsx';
import History from '../pages/History/History.jsx';
import ManageSubsciptions from '../pages/ManageSubscriptions/ManageSubscriptions.jsx';
import Login from '../pages/Login/Login.jsx';
import CreateAccount from '../pages/CreateAccount/CreateAccount.jsx';
import ContactUs from '../pages/ContactUs/ContactUs.jsx';
import FAQs from '../pages/FAQs/FAQs.jsx';
export const RouterData = [
	{
		path: '/',
		element: Home, // Use the component itself, not JSX
	},
	{
		path: '/login',
		element: Login,
	},
	{
		path: '/profile',
		element: Profile,
	},
	{
		path: '/tickets',
		element: Tickets,
	},
	{
		path: '/checkout',
		element: Checkout,
	},
	{
		path: '/history',
		element: History,
	},
	{
		path: '/manage-subscriptions',
		element: ManageSubsciptions,
	},
	{
		path: '/create-account',
		element: CreateAccount,
	},
	{
		path: '/contact-us',
		element: ContactUs,
	},
	{
		path: '/faqs',
		element: FAQs,
	},
	{
		path: '*',
		element: () => <Navigate to="/" replace />,
	},
];
