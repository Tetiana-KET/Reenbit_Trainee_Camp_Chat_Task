import { checkReturnCaughtError } from './checkReturnCaughtError';

export function formatMessageTime(dateString: string): string {
	const date = new Date(dateString);

	const day = date.getDate().toString().padStart(2, '0');
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const year = date.getFullYear();
	const hours = date.getHours().toString().padStart(2, '0');
	const minutes = date.getMinutes().toString().padStart(2, '0');

	return `${day}/${month}/${year}, ${hours}:${minutes}`;
}

export function formatTimeForChatList(dateString: string): string {
	try {
		const date = new Date(dateString);
		const formatter = new Intl.DateTimeFormat('en-US', {
			month: 'short',
			day: 'numeric',
			year: 'numeric',
		});
		return formatter.format(date);
	} catch (error) {
		checkReturnCaughtError(error, 'utils/formatTimeForChatList');
		return '';
	}
}
