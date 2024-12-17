import { authMessages } from '@shared/consts/messages';
import { HttpStatusCode } from '@shared/types/httpStatusCode';
import { returnCaughtError } from 'backend/src/utils/returnCaughtError';
import { Request, Response } from 'express';

export async function logout(req: Request, res: Response) {
	try {
		res.cookie('chat-token', '', {
			maxAge: 0,
		});
		res
			.status(HttpStatusCode.OK)
			.json({ message: authMessages.LOGOUT_SUCCESS });
	} catch (err) {
		returnCaughtError(err, res, 'logout.controller');
	}
}
