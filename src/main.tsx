import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { StartPage } from './pages/StartPage/StartPage';
import { Layout } from './layout/Layout/Layout';
import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage';
import { MainPage } from './pages/MainPage/MainPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <StartPage />,
			},

			{
				path: '/MainPage',
				element: <MainPage/>	
			}
		],
	},
	{
		path: '/auth/registration',
		element: <RegistrationPage/>
	},
	{
		path: '/auth/login',
		element: <LoginPage/>
	},
	{
		path: '*',
		element: <ErrorPage/>
	}
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);