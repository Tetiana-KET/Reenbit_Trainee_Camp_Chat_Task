import { MessageInterface } from './MessageInterface';
import { User } from './User';

export interface ChatStateInterface {
	messages: MessageInterface[];
	users: User[];
	selectedUser: User | null;
	isUsersLoading: boolean;
	isMessagesLoading: boolean;
	isMessageSending: boolean;
	isMessageDeleting: boolean;

	setSelectedUser: (selectedUser: User | null) => void;

	getUsers: () => Promise<void>;
	getMessages: (userId: string) => Promise<void>;
	sendMessage: (messageData: Partial<MessageInterface>) => Promise<void>;
	updateMessage: (messageData: Partial<MessageInterface>) => Promise<void>;
	deleteMessage: (messageId: string) => Promise<void>;
}
