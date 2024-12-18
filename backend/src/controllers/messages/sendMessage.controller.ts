import { Request, Response } from 'express';

import { HttpStatusCode } from '@shared/types/httpStatusCode';
import { returnCaughtError } from 'backend/src/utils/returnCaughtError';
import { getImageUrl } from 'backend/src/utils/getImageUrl';

import Message from '../../models/message.model';

export async function sendMessage(req: Request, res: Response) {
	try {
		const senderId = req.user._id;
		const { id: receiverId } = req.params;
		const { text, image } = req.body;

		let imageUrl = await getImageUrl(image);

		const newMessage = new Message({
			senderId,
			receiverId,
			text,
			image: imageUrl,
		});

		await newMessage.save();

		res.status(HttpStatusCode.CREATED).json(newMessage);
	} catch (err: unknown) {
		returnCaughtError(err, res, 'sendMessage.controller');
	}
}
