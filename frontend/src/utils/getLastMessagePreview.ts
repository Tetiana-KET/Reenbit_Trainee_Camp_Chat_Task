import { LastMessageData } from '../types/MessageInterface';
import { formatTimeForChatList } from './formatMessageTime';

export function getLastMessagePreview(
	userId: string,
	lastMessages: LastMessageData[]
) {
	const lastMessage = lastMessages.find(message => {
		return message.userId === userId;
	});

	if (!lastMessage) {
		return { text: '', date: '', isImage: false };
	}

	return {
		text: lastMessage.image ? 'Image' : lastMessage.text || '',
		date: formatTimeForChatList(lastMessage.updatedAt) || '',
		isImage: Boolean(lastMessage.image),
	};
}
