import { apiRoutes } from '../../consts/apiRoutes';
import { axiosInstance } from '../../lib/axios';
import { ChatStateInterface } from '../../types/ChatStateInterface';
import { checkReturnCaughtError } from '../../utils/checkReturnCaughtError';

export const getMessagesController = async (
	set: (state: Partial<ChatStateInterface>) => void,
	userId: string
) => {
	set({ isMessagesLoading: true });
	try {
		const response = await axiosInstance.get(`${apiRoutes.GET_MSGS}${userId}`);
		set({ messages: response.data });
	} catch (err) {
		checkReturnCaughtError(err, 'getMessagesController');
	} finally {
		set({ isMessagesLoading: false });
	}
};
