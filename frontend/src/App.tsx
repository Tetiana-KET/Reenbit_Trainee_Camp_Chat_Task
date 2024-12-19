import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import { useAuthStore } from './store/useAuthStore';
import { LoaderComponent } from './components/Loader/LoaderComponent';
import { Toaster } from 'react-hot-toast';

function App() {
	const { authUser, isCheckingAuth, checkAuth } = useAuthStore();

	useEffect(() => {
		checkAuth();
	}, []);

	if (!authUser && isCheckingAuth) {
		return <LoaderComponent />;
	}
	return (
		<>
			<Toaster position='top-right' reverseOrder={false} />
			<RouterProvider router={router(authUser)} />
		</>
	);
}

export default App;
