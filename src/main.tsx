import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { StartPage } from './pages/StartPage/StartPage';
import { Layout } from './layout/Layout/Layout';
import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: 'start',
				element: <StartPage />,
			},
		],
	},
	{
		path: '/registration',
		element: <RegistrationPage/>
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);