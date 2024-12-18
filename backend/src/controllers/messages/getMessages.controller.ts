import { Request, Response } from 'express';

import { HttpStatusCode } from '@shared/types/httpStatusCode';
import { returnCaughtError } from 'backend/src/utils/returnCaughtError';
import Message from '../../models/message.model';

export async function getMessages(req: Request, res: Response) {
	try {
		const curUserId = req.user._id;
		const { id: userReceiverId } = req.params;

		const messages = await Message.find({
			$or: [
				{ senderId: curUserId, receiverId: userReceiverId },
				{ senderId: userReceiverId, receiverId: curUserId },
			],
		}).sort({ createdAt: 1 });

		res.status(HttpStatusCode.OK).json(messages);
	} catch (err: unknown) {
		returnCaughtError(err, res, 'getMessages.controller');
	}
}
