import { useEffect } from 'react';
import { Users } from 'lucide-react';

import { useChatStore } from '../../../store/useChatStore';

import { ContactsListSkeleton } from '../../skeletons/ContactsListSkeleton/ContactsListSkeleton';

import styles from './ChatsList.module.css';

export function ChatsList() {
	const { users, selectedUser, isUsersLoading, setSelectedUser, getUsers } =
		useChatStore();

	useEffect(() => {
		getUsers();
	}, [getUsers]);

	if (isUsersLoading) return <ContactsListSkeleton />;

	return (
		<aside
			className={`${styles.contactsListWrapper} h-full w-30 lg:w-80 flex flex-col transition-all duration-200 `}
		>
			<div className='border-b-2 border-gray-400 bg-gray-200 w-full p-5'>
				<div className='flex items-center gap-2'>
					<Users className='size-6' />
					<span className='font-medium hidden lg:block'>Chats</span>
				</div>
			</div>

			<div className='overflow-y-auto w-full py-3'>
				{users.map(user => (
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
						<div className='relative mx-auto lg:mx-0'>
							<img
								src={user.profileImg || '/default-avatar.png'}
								alt={`${user.firstName} ${user.firstName} avatar`}
								className='size-12 object-cover rounded-full'
							/>
						</div>

						<div className='hidden lg:block flex-1 text-left min-w-0'>
							<div className='flex justify-between'>
								<div className='font-medium truncate'>{`${user.firstName} ${user.firstName}`}</div>
								<div className=''>{'date'}</div>
							</div>
							<div className='text-sm text-zinc-400'>last message text</div>
						</div>
					</button>
				))}
			</div>
		</aside>
	);
}
