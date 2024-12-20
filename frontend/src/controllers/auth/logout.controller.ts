import toast from 'react-hot-toast';
import { AuthState } from '../../types/AuthState';
import { apiRoutes } from '../../consts/apiRoutes';
import { axiosInstance } from '../../lib/axios';
import { checkReturnCaughtError } from '../../utils/checkReturnCaughtError';
import { authMessages } from '../../../../shared/consts/messages';

export const logoutController = async (
	set: (state: Partial<AuthState>) => void
) => {
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
};
