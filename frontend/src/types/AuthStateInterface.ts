import { FormData } from './FormData';
import { User } from './User';

export interface AuthStateInterface {
	authUser: User | null;
	usersOnline: User[];
	isSigningUp: boolean;
	isLoggingIn: boolean;
	isLoggingOut: boolean;
	isUpdatingProfile: boolean;
	isCheckingAuth: boolean;
	checkAuth: () => Promise<void>;
	signup: (formData: FormData) => Promise<void>;
	login: (formData: Partial<FormData>) => Promise<void>;
	logout: () => Promise<void>;
}
