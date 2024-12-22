import { apiRoutes } from '../../consts/apiRoutes';
import { axiosInstance } from '../../lib/axios';
import { ChatStateInterface } from '../../types/ChatStateInterface';
import { checkReturnCaughtError } from '../../utils/checkReturnCaughtError';

export const deleteMessageController = async (
	set: (
		partialState:
			| Partial<ChatStateInterface>
			| ((state: ChatStateInterface) => Partial<ChatStateInterface>)
	) => void,
	messageId: string
) => {
	set({ isMessageDeleting: true });
	try {
		await axiosInstance.delete(`${apiRoutes.DELETE_MSG}${messageId}`);
		set(state => ({
			messages: state.messages.filter(msg => msg.id !== messageId),
		}));
	} catch (err) {
		checkReturnCaughtError(err, 'deleteMessageController');
	} finally {
		set({ isMessageDeleting: false });
	}
};
