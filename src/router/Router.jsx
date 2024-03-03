import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RouterData } from './RouteData.jsx';

// Directly pass RouterData to createBrowserRouter
const router = createBrowserRouter(
	RouterData.map((route) => ({
		path: route.path,
		element: <route.element />,
	}))
);

const Router = () => {
	return <RouterProvider router={router} />;
};

export default Router;
