import { X } from 'lucide-react';
import { useAuthStore } from '../../../store/useAuthStore';
import { useChatStore } from '../../../store/useChatStore';

export function SelectedChatHeader() {
	const { selectedUser, setSelectedUser } = useChatStore();
	const { usersOnline } = useAuthStore();

	return (
		<div className='p-2.5 border-b-2 border-gray-400 bg-gray-200'>
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-3'>
					{/* Avatar */}
					<div className='avatar'>
						<div className='size-10 rounded-full relative'>
							<img
								src={selectedUser?.profileImg || '/default-avatar.png'}
								alt={`${selectedUser?.firstName} ${selectedUser?.firstName}`}
							/>
						</div>
					</div>

					{/* User info */}
					<div>
						<h3 className='font-medium'>{`${selectedUser?.firstName} ${selectedUser?.firstName}`}</h3>
						<p className='text-sm text-base-content/70'>
							{usersOnline.some(user => user._id === selectedUser?._id)
								? 'Online'
								: 'Offline'}
						</p>
					</div>
				</div>

				{/* Close button */}
				<button onClick={() => setSelectedUser(null)}>
					<X />
				</button>
			</div>
		</div>
	);
}
