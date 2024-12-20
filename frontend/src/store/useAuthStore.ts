import { create } from 'zustand';

import { AuthState } from '../types/AuthState';
import { FormData } from '../types/FormData';
import { checkAuthController } from '../controllers/auth/checkAuth.controller';
import { signupController } from '../controllers/auth/signup.controller';
import { logoutController } from '../controllers/auth/logout.controller';
import { loginController } from '../controllers/auth/login.controller';

export const useAuthStore = create<AuthState>(set => ({
	authUser: null,
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
