import { create } from 'zustand';
import { io } from 'socket.io-client';

import { checkAuthController } from '../controllers/auth/checkAuth.controller';
import { loginController } from '../controllers/auth/login.controller';
import { logoutController } from '../controllers/auth/logout.controller';
import { signupController } from '../controllers/auth/signup.controller';
import { AuthStateInterface } from '../types/AuthStateInterface';
import { FormData } from '../types/FormData';

import { BE_URL } from '../consts/baseUrl';

export const useAuthStore = create<AuthStateInterface>((set, get) => ({
	authUser: null,
	usersOnline: [],
	isSigningUp: false,
	isLoggingIn: false,
	isLoggingOut: false,
	isUpdatingProfile: false,
	isCheckingAuth: true,
	socket: null,

	checkAuth: async () => {
		await checkAuthController(set, get);
	},

	signup: async (data: FormData) => {
		await signupController(set, get, data);
	},

	login: async (data: Partial<FormData>) => {
		await loginController(set, get, data);
	},

	logout: async () => {
		await logoutController(set, get);
	},

	connectSocket: async () => {
		const { authUser } = get();
		if (!authUser || get().socket?.connected) return;

		const socket = io(BE_URL, {
			query: {
				userId: authUser._id,
			},
		});
		socket.connect();

		set({ socket: socket });
		socket.on('getOnlineUsers', userIds => {
			set({ usersOnline: userIds });
		});
	},

	disconnectSocket: () => {
		if (get().socket?.connected) get().socket?.disconnect();
		set({ socket: null });
	},
}));
