import { Request, Response } from 'express';

import { returnCaughtError } from 'backend/src/utils/returnCaughtError';
import { getImageUrl } from 'backend/src/utils/getImageUrl';

import Message from '../../models/message.model';

import { HttpStatusCode } from '@shared/types/httpStatusCode';
import { responseMessages } from '@shared/consts/messages';

export async function updateMessage(req: Request, res: Response) {
	try {
		const { id: messageId } = req.params;
		const { text, image } = req.body;

		let imageUrl = await getImageUrl(image);

		const updatedMessage = await Message.findByIdAndUpdate(
			messageId,
			{
				text,
				...(imageUrl ? { image: imageUrl } : {}),
			},
			{ new: true }
		);

		if (!text && !image) {
			res
				.status(HttpStatusCode.BAD_REQUEST)
				.json({ message: responseMessages.MISSING_UPDATE_CONTENT });
			return;
		}

		res.status(HttpStatusCode.OK).json(updatedMessage);
	} catch (err: unknown) {
		returnCaughtError(err, res, 'updateMessage.controller');
	}
}
