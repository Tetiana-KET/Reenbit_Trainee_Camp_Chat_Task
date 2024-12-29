import { LastMessageData, MessageInterface } from './MessageInterface';
import { User } from './User';

export interface ChatStateInterface {
	messages: MessageInterface[];
	lastMessages: LastMessageData[];
	users: User[];
	userChats: User[];
	selectedUser: User | null;
	isUsersLoading: boolean;
	isMessagesLoading: boolean;
	isMessageSending: boolean;
	isMessageDeleting: boolean;

	setSelectedUser: (selectedUser: User | null) => void;

	getUsers: () => Promise<void>;
	getChats: () => Promise<void>;
	getMessages: (userId: string) => Promise<void>;
	sendMessage: (messageData: Partial<MessageInterface>) => Promise<void>;
	updateMessage: (messageData: Partial<MessageInterface>) => Promise<void>;
	deleteMessage: (messageId: string) => Promise<void>;
	subscribeToMessages: () => void;
	unsubscribeFromMessages: () => void;
}
