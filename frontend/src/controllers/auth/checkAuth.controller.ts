import { AuthState } from '../../types/AuthState';
import { apiRoutes } from '../../consts/apiRoutes';
import { axiosInstance } from '../../lib/axios';
import { checkReturnCaughtError } from '../../utils/checkReturnCaughtError';

export const checkAuthController = async (
	set: (state: Partial<AuthState>) => void
) => {
	try {
		const res = await axiosInstance.get(apiRoutes.CHECK_AUTH);
		set({ authUser: res.data });
	} catch (err) {
		checkReturnCaughtError(err, 'useAuthStore');
		set({ authUser: null });
	} finally {
		set({ isCheckingAuth: false });
	}
};
