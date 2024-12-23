import { create } from 'zustand';

import { checkAuthController } from '../controllers/auth/checkAuth.controller';
import { loginController } from '../controllers/auth/login.controller';
import { logoutController } from '../controllers/auth/logout.controller';
import { signupController } from '../controllers/auth/signup.controller';
import { AuthStateInterface } from '../types/AuthStateInterface';
import { FormData } from '../types/FormData';

export const useAuthStore = create<AuthStateInterface>(set => ({
	authUser: null,
	usersOnline: [],
	isSigningUp: false,
	isLoggingIn: false,
	isLoggingOut: false,
	isUpdatingProfile: false,
	isCheckingAuth: true,

	checkAuth: async () => {
		await checkAuthController(set);
	},

	signup: async (data: FormData) => {
		await signupController(set, data);
	},

	logout: async () => {
		await logoutController(set);
	},

	login: async (data: Partial<FormData>) => {
		await loginController(set, data);
	},
}));
