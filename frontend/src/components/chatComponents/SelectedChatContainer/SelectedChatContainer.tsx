import { MessageInput } from '../MessageInput/MessageInput';
import { SelectedChatHeader } from '../SelectedChatHeader/SelectedChatHeader';

import { MessagesList } from '../MessagesList/MessagesList';

export function SelectedChatContainer() {
	return (
		<div className='selectedChatContainer flex flex-col flex-1 overflow-hidden h-full'>
			<SelectedChatHeader />
			<MessagesList />
			<MessageInput />
		</div>
	);
}
