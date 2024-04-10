import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { UserContextProvider } from './context/UserContext.jsx';
import './styles/globals.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<UserContextProvider>
			<App />
		</UserContextProvider>
	</React.StrictMode>
);
