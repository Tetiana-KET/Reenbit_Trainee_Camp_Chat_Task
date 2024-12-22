import { Message } from 'types/Message';
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
	messageData: Partial<Message>
) => {
	set({ isMessageSending: true });
	try {
		const response = await axiosInstance.put(
			`${apiRoutes.UPDATE_MSG}${messageData.id}`,
			messageData
		);
		set(state => ({
			messages: state.messages.map(msg =>
				msg.id === messageData.id ? { ...msg, ...response.data } : msg
			),
		}));
	} catch (err) {
		checkReturnCaughtError(err, 'updateMessageController');
	} finally {
		set({ isMessageSending: false });
	}
};
