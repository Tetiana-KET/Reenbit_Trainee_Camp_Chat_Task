import { Request, Response } from 'express';

import { returnCaughtError } from 'backend/src/utils/returnCaughtError';

import Message from '../../models/message.model';

import { HttpStatusCode } from '@shared/types/httpStatusCode';
import { responseMessages } from '@shared/consts/messages';
import { HttpStatusMessage } from '@shared/types/HttpStatusMessage';

export async function deleteMessage(req: Request, res: Response) {
	try {
		const { id: messageId } = req.params;
		const message = await Message.findByIdAndDelete(messageId);

		if (!message) {
			return res
				.status(HttpStatusCode.NOT_FOUND)
				.json({ message: HttpStatusMessage.NOT_FOUND });
		}

		res
			.status(HttpStatusCode.OK)
			.json({ message: responseMessages.DELETE_SUCCESS });
	} catch (err: unknown) {
		returnCaughtError(err, res, 'deleteMessage.controller');
	}
}
