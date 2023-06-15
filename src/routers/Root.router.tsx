import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppPage, HomePage } from '../pages';
import { AboutPage } from '../pages/about';
interface IRootRouterProps {}

const Router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
		children: [
			{
				path: 'app',
				element: <AppPage />,
			},
		],
	},
	{
		path: '/about',
		element: <AboutPage />,
	},
]);

export const RootRouter: React.FC<IRootRouterProps> = () => {
	return <RouterProvider router={Router}></RouterProvider>;
};
