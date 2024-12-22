import toast from 'react-hot-toast';
import { authMessages } from '../../../../shared/consts/messages';
import { apiRoutes } from '../../consts/apiRoutes';
import { axiosInstance } from '../../lib/axios';
import { AuthStateInterface } from '../../types/AuthStateInterface';
import { checkReturnCaughtError } from '../../utils/checkReturnCaughtError';

export const logoutController = async (
	set: (state: Partial<AuthStateInterface>) => void
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
