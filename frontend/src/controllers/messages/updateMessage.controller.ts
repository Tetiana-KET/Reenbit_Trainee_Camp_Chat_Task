import { MessageInterface } from 'types/MessageInterface';
import { apiRoutes } from '../../consts/apiRoutes';
import { axiosInstance } from '../../lib/axios';
import { ChatStateInterface } from '../../types/ChatStateInterface';
import { checkReturnCaughtError } from '../../utils/checkReturnCaughtError';

export const updateMessageController = async (
	set: (
		partialState:
			| Partial<ChatStateInterface>
			| ((state: ChatStateInterface) => Partial<ChatStateInterface>)
	) => void,
	messageData: Partial<MessageInterface>
) => {
	set({ isMessageSending: true });
	try {
		const response = await axiosInstance.put(
			`${apiRoutes.UPDATE_MSG}${messageData._id}`,
			messageData
		);
		set(state => ({
			messages: state.messages.map(msg =>
				msg._id === messageData._id ? { ...msg, ...response.data } : msg
			),
		}));
	} catch (err) {
		checkReturnCaughtError(err, 'updateMessageController');
	} finally {
		set({ isMessageSending: false });
	}
};
