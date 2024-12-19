import { Loader } from 'lucide-react';

export function LoaderComponent() {
	return (
		<div className='flex items-center justify-center h-screen'>
			<Loader className='size-20 animate-spin' />
		</div>
	);
}
