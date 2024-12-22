import { FormData } from './FormData';

export interface AuthStateInterface {
	authUser: any | null;
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
