import { useChatStore } from '../store/useChatStore';

import { SelectedChatContainer } from '../components/chatComponents/SelectedChatContainer/SelectedChatContainer';
import { ChatPlaceholder } from '../components/chatComponents/ChatPlaceholder/ChatPlaceholder';
import { ContactsList } from '../components/chatComponents/ContactsList/ContactsList';

export function ChatPage() {
	const { selectedUser } = useChatStore();
	return (
		<div className='chatPageWrapper flex justify-between h-full w-full flex-1 gap-1'>
			<ContactsList />

			{!selectedUser ? <ChatPlaceholder /> : <SelectedChatContainer />}
		</div>
	);
}
