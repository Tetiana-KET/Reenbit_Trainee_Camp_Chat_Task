import { useAuthStore } from '../../../store/useAuthStore';
import { formatMessageTime } from '../../../utils/formatMessageTime';
import { MessageInterface } from '../../../types/MessageInterface';
import { User } from '../../../types/User';

interface MessageProps {
	message: MessageInterface;
	selectedUser: User | null;
}

export function Message({ message, selectedUser }: MessageProps) {
	const { authUser } = useAuthStore();

	return (
		<div
			key={message._id}
			className={`chat ${
				message.senderId === authUser?._id ? 'chat-end' : 'chat-start'
			}`}
		>
			<div className=' chat-image avatar'>
				<div className='size-10 rounded-full border'>
					<img
						src={
							message.senderId === authUser?._id
								? authUser.profileImg || '/default-avatar.png'
								: selectedUser?.profileImg || '/default-avatar.png'
						}
						alt='profile pic'
					/>
				</div>
			</div>
			<div className='chat-footer mb-1'>
				<time className='text-xs opacity-50 ml-1'>
					{formatMessageTime(message.createdAt)}
				</time>
			</div>
			<div className='chat-bubble flex flex-col'>
				{message.image && (
					<img
						src={message.image}
						alt='Attachment'
						className='sm:max-w-[200px] rounded-md mb-2'
					/>
				)}
				{message.text && <p>{message.text}</p>}
			</div>
		</div>
	);
}
