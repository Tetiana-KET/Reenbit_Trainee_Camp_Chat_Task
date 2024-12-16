import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { Chat } from '../pages/Chat.page';
import { Login } from '../pages/Login.page';
import { Register } from '../pages/Register.page';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Chat />,
			},
			{
				path: 'register',
				element: <Register />,
			},
			{
				path: 'login',
				element: <Login />,
			},
		],
	},
]);
export default router;
