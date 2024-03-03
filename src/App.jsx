import React from 'react';
import Router from './router/Router';
import Login from './pages/Login';
import { useUser } from './context/UserContext';

function App() {
	const { user } = useUser();

	// For testing: Render the Login component if a user IS logged in (this is inverted logic for testing purposes)
	if (user) {
		return <Login />;
	}

	// For testing: If no user is logged in, display the Navbar and Router content
	// Normally, you'd expect to show the application's content when a user is logged in, not the other way around
	return <Router />;
}

export default App;
