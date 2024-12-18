import jwt, { JwtPayload } from 'jsonwebtoken';
import User from '../models/user.model';
import { Request, Response, NextFunction } from 'express';
import { returnCaughtError } from '../utils/returnCaughtError';
import { HttpStatusCode } from '@shared/types/httpStatusCode';
import { authMessages } from '@shared/consts/messages';
import { HttpStatusMessage } from '@shared/types/HttpStatusMessage';

interface DecodedToken extends JwtPayload {
	userId: string;
}

export async function checkAuthentification(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		const token = req.cookies.chatToken;

		const decodedToken = jwt.verify(
			token,
			process.env.JWT_SECRET_KEY || ''
		) as DecodedToken;

		if (!token || !decodedToken) {
			res
				.status(HttpStatusCode.UNAUTHORIZED)
				.json({ message: authMessages.UNAUTHORIZED });
			return;
		}

		const user = await User.findById(decodedToken.userId).select('-password');

		if (!user) {
			res
				.status(HttpStatusCode.NOT_FOUND)
				.json({ message: HttpStatusMessage.NOT_FOUND });
			return;
		}

		req.user = user;
		next();
	} catch (err: unknown) {
		returnCaughtError(err, res, 'auth.protectRoute');
	}
}
