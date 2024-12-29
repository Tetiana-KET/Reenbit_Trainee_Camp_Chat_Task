import { useEffect } from 'react';
import { Users } from 'lucide-react';

import { useChatStore } from '../../../store/useChatStore';
import { getLastMessagePreview } from '../../../utils/getLastMessagePreview';
import { ChatsListSkeleton } from '../../skeletons/ChatsListSkeleton';

import styles from './ChatsList.module.css';
import { ChatsItem } from '../ChatsItem/ChatsItem';

export function ChatsList() {
	const {
		lastMessages,
		userChats,
		selectedUser,
		isUsersLoading,
		setSelectedUser,
		getChats,
	} = useChatStore();

	useEffect(() => {
		getChats();
	}, [getChats]);

	if (isUsersLoading) return <ChatsListSkeleton />;

	return (
		<aside
			className={`${styles.chatsListWrapper} h-full w-30 lg:w-80 flex flex-col transition-all duration-200 `}
		>
			<div className='border-b-2 border-gray-400 bg-gray-200 w-full p-5'>
				<div className='flex items-center gap-2'>
					<Users className='size-6' />
					<span className='font-medium hidden lg:block'>Chats</span>
				</div>
			</div>

			<div className='overflow-y-auto w-full p-3'>
				{userChats.map(user => {
					const { text, date, isImage } = getLastMessagePreview(
						user._id,
						lastMessages
					);

					return (
						<ChatsItem
							key={user._id}
							user={user}
							text={text}
							date={date}
							isImage={isImage}
							selectedUser={selectedUser}
							setSelectedUser={setSelectedUser}
						/>
					);
				})}
			</div>
		</aside>
	);
}
