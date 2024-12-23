import { Users } from 'lucide-react';

export function ChatsListSkeleton() {
	const skeletonContacts = Array(8).fill(null);

	return (
		<aside
			className='h-full w-30 lg:w-80
    flex flex-col transition-all duration-200'
		>
			{/* Header */}
			<div className='border-b border-base-300 w-full p-5'>
				<div className='flex items-center gap-2'>
					<Users className='w-6 h-6' />
					<span className='font-medium hidden lg:block'>Contacts</span>
				</div>
			</div>

			{/* Contacts */}
			<div className='overflow-y-auto w-full py-3'>
				{skeletonContacts.map((_, idx) => (
					<div key={idx} className='w-full p-3 flex items-center gap-3'>
						{/* Avatar */}
						<div className='relative mx-auto lg:mx-0'>
							<div className='skeleton size-12 rounded-full' />
						</div>

						{/* User info */}
						<div className='hidden lg:block text-left min-w-0 flex-1'>
							<div className='skeleton h-4 w-32 mb-2' />
							<div className='skeleton h-3 w-16' />
						</div>
					</div>
				))}
			</div>
		</aside>
	);
}