import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const loggedInUser = localStorage.getItem('user');
		if (loggedInUser) {
			setUser(JSON.parse(loggedInUser));
		}
	}, []);

	const login = (userData) => {
		localStorage.setItem('user', JSON.stringify(userData));
		setUser(userData);
	};

	const logout = () => {
		localStorage.removeItem('user');
		setUser(null);
	};

	return (
		<UserContext.Provider value={{ user, login, logout }}>
			{children}
		</UserContext.Provider>
	);
};

export const useUser = () => useContext(UserContext);
