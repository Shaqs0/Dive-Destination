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
import { Provider } from 'react-redux';
import { store } from './store/store';

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
		path: '/MainPage',
		element: <MainPage/>
	},
	{
		path: '*',
		element: <ErrorPage/>
	}
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>,
);