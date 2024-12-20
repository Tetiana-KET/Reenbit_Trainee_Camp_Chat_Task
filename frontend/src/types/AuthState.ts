export interface AuthState {
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
