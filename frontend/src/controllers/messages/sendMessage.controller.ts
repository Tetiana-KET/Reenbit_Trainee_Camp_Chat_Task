import { Message } from '../../types/Message';
import { apiRoutes } from '../../consts/apiRoutes';
import { axiosInstance } from '../../lib/axios';
import { ChatStateInterface } from '../../types/ChatStateInterface';
import { checkReturnCaughtError } from '../../utils/checkReturnCaughtError';

export const sendMessageController = async (
	set: (
		partialState:
			| Partial<ChatStateInterface>
			| ((state: ChatStateInterface) => Partial<ChatStateInterface>)
	) => void,
	messageData: Partial<Message>
) => {
	set({ isMessageSending: true });
	try {
		const response = await axiosInstance.post(
			`${apiRoutes.SEND_MSG}${messageData.receiverId}`,
			messageData
		);
		set(state => ({
			messages: [...(state.messages || []), response.data],
		}));
	} catch (err) {
		checkReturnCaughtError(err, 'sendMessageController');
	} finally {
		set({ isMessageSending: false });
	}
};
