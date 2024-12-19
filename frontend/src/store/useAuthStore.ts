import { create } from 'zustand';
import { axiosInstance } from '../lib/axios';
import { apiRoutes } from '../consts/apiRoutes';
import { checkReturnCaughtError } from '../utils/checkReturnCaughtError';
import toast from 'react-hot-toast';
import { authMessages } from '../../../shared/consts/messages';

interface AuthState {
	authUser: any | null;
	isSigningUp: boolean;
	isLoggingIn: boolean;
	isLoggingOut: boolean;
	isUpdatingProfile: boolean;
	isCheckingAuth: boolean;
	checkAuth: () => Promise<void>;
	signup: (formData: any) => Promise<void>;
	login: (formData: any) => Promise<void>;
	logout: () => Promise<void>;
}

interface FormData {
	fullName: string;
	email: string;
	password: string;
}

export const useAuthStore = create<AuthState>(set => ({
	authUser: null,
	isSigningUp: false,
	isLoggingIn: false,
	isLoggingOut: false,
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

	signup: async (data: FormData) => {
		const userData = {
			firstName: data.fullName.split(' ')[0],
			lastName: data.fullName.split(' ')[1],
			email: data.email,
			password: data.password,
		};

		set({ isSigningUp: true });
		try {
			const signUpResponse = await axiosInstance.post(
				apiRoutes.SIGNUP,
				userData
			);
			set({ authUser: signUpResponse.data });
			toast.success(authMessages.CREATED_SUCCESS);
		} catch (err) {
			checkReturnCaughtError(err, 'useAuthStore');
			set({ authUser: null });
		} finally {
			set({ isSigningUp: false });
		}
	},

	logout: async () => {
		set({ isLoggingOut: true });
		try {
			await axiosInstance.post(apiRoutes.LOGOUT);
			set({ authUser: null });
			toast.success(authMessages.LOGOUT_SUCCESS);
		} catch (err) {
			checkReturnCaughtError(err, 'useAuthStore');
		} finally {
			set({ isLoggingOut: false });
		}
	},

	login: async data => {
		set({ isLoggingIn: true });
		try {
			const slogInResponse = await axiosInstance.post(apiRoutes.LOGIN, data);
			set({ authUser: slogInResponse.data });
			toast.success(authMessages.LOGIN_SUCCESS);
		} catch (err) {
			checkReturnCaughtError(err, 'useAuthStore');
		} finally {
			set({ isLoggingIn: false });
		}
	},
}));
