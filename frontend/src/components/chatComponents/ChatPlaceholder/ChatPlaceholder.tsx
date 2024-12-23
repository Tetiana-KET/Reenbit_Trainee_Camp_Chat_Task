import { MessageSquare } from 'lucide-react';

export function ChatPlaceholder() {
	return (
		<div className='flex flex-col flex-1'>
			<div className='max-w-md text-center space-y-6 m-auto'>
				<div className='flex justify-center gap-4 mb-4'>
					<div className='relative'>
						<div
							className='w-16 h-16 rounded-2xl bg-accent/5 flex items-center
             justify-center animate-bounce'
						>
							<MessageSquare className='w-8 h-8 text-accent ' />
						</div>
					</div>
				</div>

				<h2 className='text-2xl font-bold'>Welcome to Chillax!</h2>
				<p className='text-base-content/60'>
					Select a conversation from the sidebar to start chatting
				</p>
			</div>
		</div>
	);
}
