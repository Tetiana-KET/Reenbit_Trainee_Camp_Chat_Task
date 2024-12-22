import toast from 'react-hot-toast';

import { authMessages } from '../../../../shared/consts/messages';
import { apiRoutes } from '../../consts/apiRoutes';
import { axiosInstance } from '../../lib/axios';
import { AuthStateInterface } from '../../types/AuthStateInterface';
import { FormData } from '../../types/FormData';
import { checkReturnCaughtError } from '../../utils/checkReturnCaughtError';

export const loginController = async (
	set: (state: Partial<AuthStateInterface>) => void,
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
