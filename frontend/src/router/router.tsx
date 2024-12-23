import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from '../components/layoutComponents/Layout/Layout';
import { ChatPage } from '../pages/Chat.page';
import { RegisterPage } from '../pages/Register.page';
import { LoginPage } from '../pages/Login.page';
import { ProfilePage } from '../pages/Profile.page';
import { SettingsPage } from '../pages/Settings.page';

const createRouter = (authUser: any) =>
	createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					index: true,
					element: authUser ? <ChatPage /> : <Navigate to='/login' />,
				},
				{
					path: 'chat',
					element: authUser ? <ChatPage /> : <Navigate to='/login' />,
				},
				{
					path: 'register',
					element: !authUser ? <RegisterPage /> : <Navigate to='/' />,
				},
				{
					path: 'login',
					element: !authUser ? <LoginPage /> : <Navigate to='/' />,
				},
				{
					path: 'settings',
					element: <SettingsPage />,
				},
				{
					path: 'profile',
					element: authUser ? <ProfilePage /> : <Navigate to='/login' />,
				},
			],
		},
	]);

export default createRouter;
