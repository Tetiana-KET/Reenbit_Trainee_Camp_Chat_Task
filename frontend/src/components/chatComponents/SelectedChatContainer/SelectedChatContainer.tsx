import { SelectedChatHeader } from '../SelectedChatHeader/SelectedChatHeader';
import { MessageInput } from '../MessageInput/MessageInput';

import { MessagesComponent } from '../MessagesComponent/MessagesComponent';

export function SelectedChatContainer() {
	return (
		<div className='selectedChatContainer flex flex-col flex-1 overflow-hidden h-full'>
			<SelectedChatHeader />
			<MessagesComponent />
			<MessageInput />
		</div>
	);
}
