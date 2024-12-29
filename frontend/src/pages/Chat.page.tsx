import { useChatStore } from '../store/useChatStore';

import { SelectedChatContainer } from '../components/chatComponents/SelectedChatContainer/SelectedChatContainer';
import { ChatPlaceholder } from '../components/chatComponents/ChatPlaceholder/ChatPlaceholder';
import { ChatsList } from '../components/sideBar/ChatsList/ChatsList';

export function ChatPage() {
	const { selectedUser } = useChatStore();
	return (
		<div className='chatPageWrapper flex justify-between h-full w-full flex-1'>
			<ChatsList />

			{!selectedUser ? <ChatPlaceholder /> : <SelectedChatContainer />}
		</div>
	);
}
