import { Loader2 } from 'lucide-react';

type SubmitButtonProps = {
	children: string;
	isLoading?: boolean;
};

export function SubmitButton({
	children,
	isLoading = false,
}: SubmitButtonProps) {
	return (
		<button
			type='submit'
			className='btn btn-neutral w-full'
			disabled={isLoading}
		>
			{isLoading ? (
				<>
					<Loader2 className='size-5 animate-spin' />
					Loading...
				</>
			) : (
				children
			)}
		</button>
	);
}
