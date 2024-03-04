import { Navigate } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Profile from '../pages/Profile.jsx';
import Tickets from '../pages/Tickets.jsx';
import Checkout from '../pages/Checkout.jsx';
import History from '../pages/History.jsx';
import ManageSubsciptions from '../pages/ManageSubscriptions.jsx';
import AddSubscriptions from '../pages/AddSubscriptions.jsx';
import Login from '../pages/Login.jsx';
import CreateAccount from '../pages/CreateAccount.jsx';

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
		path: '/add-subscriptions',
		element: AddSubscriptions,
	},
	{
		path: '/create-account',
		element: CreateAccount,
	},
	{
		path: '*',
		element: () => <Navigate to="/" replace />, // Use a function for dynamic components like Navigate
	},
];
