import { create } from 'zustand';
import { axiosInstance } from '../lib/axios';
import { apiRoutes } from '../consts/apiRoutes';
import { checkReturnCaughtError } from '../utils/checkReturnCaughtError';

interface AuthState {
	authUser: any | null;
	isSigningUp: boolean;
	isLoggingIn: boolean;
	isUpdatingProfile: boolean;
	isCheckingAuth: boolean;
	checkAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>(set => ({
	authUser: null,
	isSigningUp: false,
	isLoggingIn: false,
	isUpdatingProfile: false,
	isCheckingAuth: true,
	checkAuth: async () => {
		try {
			const res = await axiosInstance.get(apiRoutes.CHECK_AUTH);
			set({ authUser: res.data });
		} catch (err) {
			checkReturnCaughtError(err, 'useAuthStore');
			set({ authUser: null });
		} finally {
			set({ isCheckingAuth: false });
		}
	},
}));
