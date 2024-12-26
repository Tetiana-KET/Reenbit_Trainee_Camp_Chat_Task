import { apiRoutes } from '../consts/apiRoutes';
import { axiosInstance } from '../lib/axios';
import { ChatStateInterface } from '../types/ChatStateInterface';
import { checkReturnCaughtError } from '../utils/checkReturnCaughtError';

export const getChatsController = async (
	set: (state: Partial<ChatStateInterface>) => void
) => {
	set({ isMessagesLoading: true });
	try {
		const response = await axiosInstance.get(apiRoutes.GET_USERS_WITH_CHATS);
		set({
			userChats: response.data.users,
			lastMessages: response.data.lastMessages,
		});
	} catch (err) {
		checkReturnCaughtError(err, 'getUsersController');
	} finally {
		set({ isUsersLoading: false });
	}
};
