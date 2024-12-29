import { useState, useRef, ChangeEvent, FormEvent } from 'react';
import toast from 'react-hot-toast';
import { useChatStore } from '../store/useChatStore';

export function useMessageInput() {
	const [text, setText] = useState('');
	const [imgPreview, setImgPreview] = useState<string | null>(null);

	const fileInputRef = useRef<HTMLInputElement | null>(null);

	const { sendMessage } = useChatStore();

	const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (!file) return;

		if (!file.type.startsWith('image/')) {
			toast.error('Please select an image file');
			return;
		}

		const reader = new FileReader();

		reader.onloadend = () => {
			if (typeof reader.result === 'string') {
				setImgPreview(reader.result);
			}
		};
		reader.readAsDataURL(file);
	};

	const handleImageDelete = () => {
		setImgPreview(null);
		if (fileInputRef.current) fileInputRef.current.value = '';
	};

	const handleSendMessage = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!text.trim() && !imgPreview) return;

		try {
			await sendMessage({
				text: text.trim(),
				image: imgPreview,
			});

			setText('');
			setImgPreview(null);
			if (fileInputRef.current) fileInputRef.current.value = '';
		} catch (error) {
			console.error('Failed to send message:', error);
		}
	};

	return {
		text,
		setText,
		imgPreview,
		fileInputRef,
		handleImageChange,
		handleImageDelete,
		handleSendMessage,
	};
}
