import { FormData } from './FormData';
import { User } from './User';
import { Socket } from 'socket.io-client';

export interface AuthStateInterface {
	authUser: User | null;
	usersOnline: User[];
	isSigningUp: boolean;
	isLoggingIn: boolean;
	isLoggingOut: boolean;
	isUpdatingProfile: boolean;
	isCheckingAuth: boolean;
	socket: Socket | null;
	checkAuth: () => Promise<void>;
	signup: (formData: FormData) => Promise<void>;
	login: (formData: Partial<FormData>) => Promise<void>;
	logout: () => Promise<void>;
	connectSocket: () => Promise<void>;
	disconnectSocket: () => void;
}
