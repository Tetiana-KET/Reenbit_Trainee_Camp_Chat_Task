import { Request, Response } from 'express';

import { HttpStatusCode } from '@shared/types/httpStatusCode';
import { returnCaughtError } from 'backend/src/utils/returnCaughtError';
import User from 'backend/src/models/user.model';
import Message from 'backend/src/models/message.model';

export async function getChats(req: Request, res: Response) {
	try {
		const curUserId = req.user._id;

		const usersWithMessages = await Message.distinct('senderId', {
			$or: [{ receiverId: curUserId }, { senderId: curUserId }],
		});

		const users = await User.find({
			_id: { $in: usersWithMessages, $ne: curUserId },
		}).select('-password');

		const lastMessages = await Promise.all(
			users.map(async user => {
				const lastMessage = await Message.findOne({
					$or: [
						{ senderId: curUserId, receiverId: user._id },
						{ senderId: user._id, receiverId: curUserId },
					],
				})
					.sort({ updatedAt: -1 })
					.select('text image updatedAt');
				return { userId: user._id, ...lastMessage?.toObject() };
			})
		);

		res.status(HttpStatusCode.OK).json({
			users,
			lastMessages,
		});
	} catch (err: unknown) {
		returnCaughtError(err, res, 'getChats.controller');
	}
}
