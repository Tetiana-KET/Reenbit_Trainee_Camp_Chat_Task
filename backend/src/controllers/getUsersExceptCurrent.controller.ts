import { Request, Response } from 'express';
import { returnCaughtError } from '../utils/returnCaughtError';
import User from '../models/user.model';
import { HttpStatusCode } from '@shared/types/httpStatusCode';

export async function getUsersExceptCurrent(req: Request, res: Response) {
	try {
		const curUserId = req.user._id;
		const users = await User.find({ _id: { $ne: curUserId } }).select(
			'-password'
		);
		res.status(HttpStatusCode.OK).json(users);
	} catch (err: unknown) {
		returnCaughtError(err, res, 'getUsersExceptCurrent.controller');
	}
}
