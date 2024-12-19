import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { ChatPage } from '../pages/Chat.page';
import { RegisterPage } from '../pages/Register.page';
import { LoginPage } from '../pages/Login.page';
import { ProfilePage } from '../pages/Profile.page';
import { SettingsPage } from '../pages/Settings.page';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <ChatPage />,
			},
			{
				path: 'chat',
				element: <ChatPage />,
			},
			{
				path: 'register',
				element: <RegisterPage />,
			},
			{
				path: 'login',
				element: <LoginPage />,
			},
			{
				path: 'settings',
				element: <SettingsPage />,
			},
			{
				path: 'profile',
				element: <ProfilePage />,
			},
		],
	},
]);
export default router;
