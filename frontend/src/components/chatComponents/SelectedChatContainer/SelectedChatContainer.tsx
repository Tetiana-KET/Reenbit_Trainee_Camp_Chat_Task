import { SelectedChatHeader } from '../SelectedChatHeader/SelectedChatHeader';
import { SelectedChatMessageInput } from '../SelectedChatMessageInput/SelectedChatMessageInput';

import { MessagesComponent } from '../MessagesComponent/MessagesComponent';

export function SelectedChatContainer() {
	return (
		<div className='selectedChatContainer flex flex-col flex-1 overflow-hidden h-full'>
			<SelectedChatHeader />
			<MessagesComponent />
			<SelectedChatMessageInput />
		</div>
	);
}
