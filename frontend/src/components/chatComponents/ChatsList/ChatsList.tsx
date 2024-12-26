import { useEffect } from 'react';
import { Users, Image } from 'lucide-react';

import { useChatStore } from '../../../store/useChatStore';

import { ChatsListSkeleton } from '../../skeletons/ChatsListSkeleton';

import { formatTimeForChatList } from '../../../utils/formatMessageTime';

import styles from './ChatsList.module.css';

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

	const getLastMessagePreview = (userId: string) => {
		const lastMessage = lastMessages.find(message => {
			return message.userId === userId;
		});

		if (!lastMessage) {
			return { text: '', date: '', isImage: false };
		}

		return {
			text: lastMessage.image ? 'Image' : lastMessage.text || '',
			date: formatTimeForChatList(lastMessage.updatedAt) || '',
			isImage: Boolean(lastMessage.image),
		};
	};

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
					const { text, date, isImage } = getLastMessagePreview(user._id);

					return (
						<button
							key={user._id}
							onClick={() => setSelectedUser(user)}
							className={`
              w-full p-3 flex items-center gap-3 border-b-2 border-y-gray-300
              hover:bg-base-300 transition-colors
              ${
								selectedUser?._id === user._id
									? 'bg-base-300 ring-1 ring-base-300'
									: ''
							}
            `}
						>
							<div className='relative mx-auto lg:mx-0 flex items-center'>
								<img
									src={user.profileImg || '/default-avatar.png'}
									alt={`${user.firstName} ${user.lastName} avatar`}
									className='size-12 object-cover rounded-full'
								/>
							</div>

							<div className='hidden lg:block flex-1 text-left min-w-0'>
								<div className='flex justify-between'>
									<div className='font-medium truncate'>{`${user.firstName} ${user.lastName}`}</div>
									<div className='text-[12px] truncate flex items-center'>
										{date}
									</div>
								</div>
								<div className='text-sm text-zinc-400 truncate'>
									{isImage ? (
										<Image size={14} className='text-zinc-500' />
									) : (
										text
									)}
								</div>
							</div>
						</button>
					);
				})}
			</div>
		</aside>
	);
}
