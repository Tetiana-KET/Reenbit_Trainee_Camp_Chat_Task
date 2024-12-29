import { Image } from 'lucide-react';
import { useAuthStore } from '../../../store/useAuthStore';
import { User } from '../../../types/User';

interface ChatItemProps {
	user: User;
	text: string;
	date: string;
	isImage: boolean;
	selectedUser: User | null;
	setSelectedUser: (selectedUser: User | null) => void;
}

export function ChatsItem({
	user,
	text,
	date,
	isImage,
	selectedUser,
	setSelectedUser,
}: ChatItemProps) {
	const { usersOnline } = useAuthStore();

	return (
		<button
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

				<span
					className={`absolute bottom-1 right-1 size-2 ${
						usersOnline.includes(user._id) ? 'bg-green-500' : 'bg-red-500'
					}  
                  rounded-full ring-2 ring-zinc-500`}
				/>
			</div>

			<div className='hidden lg:block flex-1 text-left min-w-0'>
				<div className='flex justify-between'>
					<div className='font-medium truncate'>{`${user.firstName} ${user.lastName}`}</div>
					<div className='text-[12px] truncate flex items-center'>{date}</div>
				</div>
				<div className='text-sm text-zinc-400 truncate'>
					{isImage ? <Image size={14} className='text-zinc-500' /> : text}
				</div>
			</div>
		</button>
	);
}
