import toast from 'react-hot-toast';

import { authMessages } from '../../../../shared/consts/messages';
import { apiRoutes } from '../../consts/apiRoutes';
import { axiosInstance } from '../../lib/axios';
import { AuthStateInterface } from '../../types/AuthStateInterface';
import { FormData } from '../../types/FormData';
import { checkReturnCaughtError } from '../../utils/checkReturnCaughtError';

export const signupController = async (
	set: (state: Partial<AuthStateInterface>) => void,
	get: () => AuthStateInterface,
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
		get().connectSocket();
	} catch (err) {
		checkReturnCaughtError(err, 'useAuthStore');
		set({ authUser: null });
	} finally {
		set({ isSigningUp: false });
	}
};
