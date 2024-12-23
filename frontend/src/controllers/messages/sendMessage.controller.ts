import { apiRoutes } from '../../consts/apiRoutes';
import { axiosInstance } from '../../lib/axios';
import { ChatStateInterface } from '../../types/ChatStateInterface';
import { MessageInterface } from '../../types/MessageInterface';
import { checkReturnCaughtError } from '../../utils/checkReturnCaughtError';

export const sendMessageController = async (
	set: (
		partialState:
			| Partial<ChatStateInterface>
			| ((state: ChatStateInterface) => Partial<ChatStateInterface>)
	) => void,
	get: () => Partial<ChatStateInterface>,
	messageData: Partial<MessageInterface>
) => {
	set({ isMessageSending: true });
	const { selectedUser, messages } = get();
	try {
		const response = await axiosInstance.post(
			`${apiRoutes.SEND_MSG}${selectedUser?._id}`,
			messageData
		);

		set({ messages: [...(messages || []), response.data.message] });
	} catch (err) {
		checkReturnCaughtError(err, 'sendMessageController');
	} finally {
		set({ isMessageSending: false });
	}
};
