import { create } from 'zustand';

import { ChatStateInterface } from '../types/ChatStateInterface';
import { Message } from '../types/Message';

import { getUsersController } from '../controllers/getUsers.Controller';
import { getMessagesController } from '../controllers/messages/getMessages.controller';
import { sendMessageController } from '../controllers/messages/sendMessage.controller';
import { updateMessageController } from '../controllers/messages/updateMessage.controller';
import { deleteMessageController } from '../controllers/messages/deleteMessage.controller';

export const useChatStore = create<ChatStateInterface>(set => ({
	messages: [],
	users: [],
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

	sendMessage: async (messageData: Partial<Message>) => {
		await sendMessageController(set, messageData);
	},

	updateMessage: async (messageData: Partial<Message>) => {
		await updateMessageController(set, messageData);
	},

	deleteMessage: async (messageId: string) => {
		await deleteMessageController(set, messageId);
	},
}));
