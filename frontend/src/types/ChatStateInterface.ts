import { Message } from './Message';
import { User } from './User';

export interface ChatStateInterface {
	messages: Message[];
	users: User[];
	selectedUser: null;
	isUsersLoading: boolean;
	isMessagesLoading: boolean;
	isMessageSending: boolean;
	isMessageDeleting: boolean;

	getUsers: () => Promise<void>;
	getMessages: (userId: string) => Promise<void>;
	sendMessage: (messageData: Partial<Message>) => Promise<void>;
	updateMessage: (messageData: Partial<Message>) => Promise<void>;
	deleteMessage: (messageId: string) => Promise<void>;
}
