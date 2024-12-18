import { Request, Response } from 'express';

import { HttpStatusCode } from '@shared/types/httpStatusCode';
import { returnCaughtError } from 'backend/src/utils/returnCaughtError';

export function checkAuth(req: Request, res: Response) {
	try {
		res.status(HttpStatusCode.OK).json(req.user);
	} catch (err) {
		returnCaughtError(err, res, 'checkAuth.controller');
	}
}
