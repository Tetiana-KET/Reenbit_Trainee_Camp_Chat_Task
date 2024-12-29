import { create } from 'zustand';

import { ChatStateInterface } from '../types/ChatStateInterface';
import { MessageInterface } from '../types/MessageInterface';

import { getUsersController } from '../controllers/getUsers.Controller';
import { deleteMessageController } from '../controllers/messages/deleteMessage.controller';
import { getMessagesController } from '../controllers/messages/getMessages.controller';
import { sendMessageController } from '../controllers/messages/sendMessage.controller';
import { updateMessageController } from '../controllers/messages/updateMessage.controller';
import { getChatsController } from '../controllers/getChats.controller';

export const useChatStore = create<ChatStateInterface>((set, get) => ({
	messages: [],
	lastMessages: [],
	users: [],
	userChats: [],
	selectedUser: null,
	isUsersLoading: false,
	isMessagesLoading: false,
	isMessageSending: false,
	isMessageDeleting: false,

	setSelectedUser: selectedUser =>
		set(state => ({
			...state,
			selectedUser,
		})),

	getUsers: async () => {
		await getUsersController(set);
	},

	getMessages: async (userId: string) => {
		await getMessagesController(set, userId);
	},

	getChats: async () => {
		await getChatsController(set);
	},

	sendMessage: async (messageData: Partial<MessageInterface>) => {
		await sendMessageController(set, get, messageData);
	},

	updateMessage: async (messageData: Partial<MessageInterface>) => {
		await updateMessageController(set, messageData);
	},

	deleteMessage: async (messageId: string) => {
		await deleteMessageController(set, messageId);
	},
}));
