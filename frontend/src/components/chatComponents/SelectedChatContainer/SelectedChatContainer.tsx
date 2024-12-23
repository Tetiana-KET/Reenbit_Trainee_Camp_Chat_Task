import { useEffect } from 'react';
import { useChatStore } from '../../../store/useChatStore';
import { SelectedChatHeader } from '../SelectedChatHeader/SelectedChatHeader';
import { SelectedChatInput } from '../SelectedChatInput/SelectedChatInput';
import { MessagesSkeleton } from '../../../components/skeletons/MessagesSkeleton';
import { Messages } from '../Messages/Messages';

export function SelectedChatContainer() {
	const { messages, selectedUser, isMessagesLoading, getMessages } =
		useChatStore();

	useEffect(() => {
		getMessages(selectedUser?._id || '');
	}, [getMessages, selectedUser]);

	return (
		<div className='selectedChatContainer flex flex-col flex-1 overflow-hidden h-full'>
			<SelectedChatHeader />
			<div className='flex-1 h-full overflow-y-auto p-4 space-y-4'>
				{isMessagesLoading ? <MessagesSkeleton /> : <Messages />}
			</div>
			<SelectedChatInput />
		</div>
	);
}
