import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	// Check local storage for user info on component mount
	useEffect(() => {
		const loggedInUser = localStorage.getItem('user');
		if (loggedInUser) {
			setUser(JSON.parse(loggedInUser));
		}
	}, []);

	const login = (userData) => {
		localStorage.setItem('user', JSON.stringify(userData)); // Persist user data in local storage
		setUser(userData);
	};

	const logout = () => {
		localStorage.removeItem('user'); // Clear user data from local storage
		setUser(null);
	};

	return (
		<UserContext.Provider value={{ user, login, logout }}>
			{children}
		</UserContext.Provider>
	);
};

// Custom hook to use the user context
export const useUser = () => useContext(UserContext);
