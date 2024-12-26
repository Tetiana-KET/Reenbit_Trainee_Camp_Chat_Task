import { useEffect } from 'react';

import { useChatStore } from '../../../store/useChatStore';
import { MessagesSkeleton } from '../../skeletons/MessagesSkeleton';
import { Message } from '../Message/Message';

export function MessagesList() {
	const { messages, selectedUser, isMessagesLoading, getMessages } =
		useChatStore();

	useEffect(() => {
		getMessages(selectedUser?._id || '');
	}, [getMessages, selectedUser]);

	return (
		<div className='flex-1 h-full overflow-y-auto p-4 space-y-4'>
			{isMessagesLoading ? (
				<MessagesSkeleton />
			) : (
				<>
					{messages.map(message => (
						<Message message={message} selectedUser={selectedUser} />
					))}
				</>
			)}
		</div>
	);
}
