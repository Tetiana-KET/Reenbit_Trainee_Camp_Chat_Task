import { apiRoutes } from '../consts/apiRoutes';
import { axiosInstance } from '../lib/axios';
import { checkReturnCaughtError } from '../utils/checkReturnCaughtError';
import { ChatStateInterface } from '../types/ChatStateInterface';

export const getUsersController = async (
	set: (state: Partial<ChatStateInterface>) => void
) => {
	set({ isUsersLoading: true });
	try {
		const response = await axiosInstance.get(apiRoutes.GET_USERS);
		set({ users: response.data });
	} catch (err) {
		checkReturnCaughtError(err, 'getUsersController');
	} finally {
		set({ isUsersLoading: false });
	}
};
