import toast from 'react-hot-toast';

import { AuthState } from '../../types/AuthState';
import { FormData } from '../../types/FormData';
import { apiRoutes } from '../../consts/apiRoutes';
import { axiosInstance } from '../../lib/axios';
import { checkReturnCaughtError } from '../../utils/checkReturnCaughtError';
import { authMessages } from '../../../../shared/consts/messages';

export const signupController = async (
	set: (state: Partial<AuthState>) => void,
	data: FormData
) => {
	const userData = {
		firstName: data.fullName.split(' ')[0],
		lastName: data.fullName.split(' ')[1],
		email: data.email,
		password: data.password,
	};

	set({ isSigningUp: true });
	try {
		const signUpResponse = await axiosInstance.post(apiRoutes.SIGNUP, userData);
		set({ authUser: signUpResponse.data });
		toast.success(authMessages.CREATED_SUCCESS);
	} catch (err) {
		checkReturnCaughtError(err, 'useAuthStore');
		set({ authUser: null });
	} finally {
		set({ isSigningUp: false });
	}
};
