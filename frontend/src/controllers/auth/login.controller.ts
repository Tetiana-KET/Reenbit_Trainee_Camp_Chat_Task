import toast from 'react-hot-toast';

import { AuthState } from '../../types/AuthState';
import { FormData } from '../../types/FormData';
import { apiRoutes } from '../../consts/apiRoutes';
import { axiosInstance } from '../../lib/axios';
import { checkReturnCaughtError } from '../../utils/checkReturnCaughtError';
import { authMessages } from '../../../../shared/consts/messages';

export const loginController = async (
	set: (state: Partial<AuthState>) => void,
	data: Partial<FormData>
) => {
	set({ isLoggingIn: true });
	try {
		const slogInResponse = await axiosInstance.post(apiRoutes.LOGIN, data);
		set({ authUser: slogInResponse.data });
		toast.success(authMessages.LOGIN_SUCCESS);
	} catch (err) {
		checkReturnCaughtError(err, 'useAuthStore');
	} finally {
		set({ isLoggingIn: false });
	}
};
