import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';

import User from 'backend/src/models/user.model';

import { authMessages } from '@shared/consts/messages';
import { HttpStatusCode } from '@shared/types/httpStatusCode';

import { generateToken } from 'backend/src/utils/generateToken';
import { returnCaughtError } from 'backend/src/utils/returnCaughtError';

export async function login(req: Request, res: Response) {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		const isPasswordValid = await bcrypt.compare(
			password,
			user?.password || ''
		);

		if (!user || !isPasswordValid) {
			return res
				.status(HttpStatusCode.BAD_REQUEST)
				.json({ message: authMessages.INVALID_CREDENTIALS });
		}

		generateToken(user._id, res);

		res.status(HttpStatusCode.OK).json({
			_id: user._id,
			email: user.email,
			firstName: user.firstName,
			lastName: user.lastName,
			profileImg: user.profileImg,
		});
	} catch (err: unknown) {
		returnCaughtError(err, res, 'login.controller');
	}
}
