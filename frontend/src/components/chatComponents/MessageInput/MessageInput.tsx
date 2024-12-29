import { Image, Send, X } from 'lucide-react';
import { useMessageInput } from '../../../hooks/useMessageInput';

export function MessageInput() {
	const {
		text,
		setText,
		imgPreview,
		fileInputRef,
		handleImageChange,
		handleImageDelete,
		handleSendMessage,
	} = useMessageInput();

	return (
		<div className='SelectedChatFooter w-full p-2.5 border-b-2 border-gray-400 bg-gray-200'>
			{imgPreview && (
				<div className='mb-3 flex items-center gap-2'>
					<div className='relative'>
						<img
							src={imgPreview}
							alt='Preview'
							className='w-20 h-20 object-cover rounded-lg border border-zinc-700'
						/>
						<button
							onClick={handleImageDelete}
							className='absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-base-300
              flex items-center justify-center'
							type='button'
						>
							<X className='size-3' />
						</button>
					</div>
				</div>
			)}

			<form onSubmit={handleSendMessage} className='flex items-center gap-2'>
				<div className='flex-1 flex gap-2'>
					<input
						type='text'
						className='w-full input input-bordered rounded-lg input-sm sm:input-md'
						placeholder='Type your message...'
						value={text}
						onChange={e => setText(e.target.value)}
					/>
					<input
						type='file'
						accept='image/*'
						className='hidden'
						ref={fileInputRef}
						onChange={handleImageChange}
					/>

					<button
						type='button'
						className={`hidden sm:flex btn btn-circle 
              ${imgPreview ? 'text-emerald-500' : 'text-zinc-400'}`}
						onClick={() => fileInputRef.current?.click()}
					>
						<Image size={20} />
					</button>
				</div>
				<button
					type='submit'
					className='btn btn-sm btn-circle'
					disabled={!text.trim() && !imgPreview}
				>
					<Send size={20} />
				</button>
			</form>
		</div>
	);
}
