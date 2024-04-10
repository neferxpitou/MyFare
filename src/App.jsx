import React from 'react';
import Router from './router/Router';
import Login from './pages/Login/Login';
import { useUser } from './context/UserContext';

function App() {
	const { user } = useUser();

	if (user) {
		return <Login />;
	}

	return <Router />;
}

export default App;
