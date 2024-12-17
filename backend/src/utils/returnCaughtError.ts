import { Response } from 'express';
import { HttpStatusCode } from '@shared/types/httpStatusCode';
import { UNKNOWN_ERR_MSG } from '@shared/consts/messages';

export function returnCaughtError(
	err: unknown,
	res: Response,
	fileName: string
) {
	if (err instanceof Error) {
		console.error(`Error in ${fileName}:`, err.message);
		res
			.status(HttpStatusCode.INTERNAL_SERVER_ERROR)
			.json({ message: err.message });
	} else {
		console.error(UNKNOWN_ERR_MSG);
		res
			.status(HttpStatusCode.INTERNAL_SERVER_ERROR)
			.json({ message: UNKNOWN_ERR_MSG });
	}
}
