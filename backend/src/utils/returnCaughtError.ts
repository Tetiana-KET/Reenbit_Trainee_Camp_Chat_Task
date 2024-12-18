import { Response } from 'express';
import { HttpStatusCode } from '@shared/types/httpStatusCode';
import { UNKNOWN_ERR_MSG } from '@shared/consts/messages';
import { HttpStatusMessage } from '@shared/types/HttpStatusMessage';

export function returnCaughtError(
	err: unknown,
	res: Response,
	fileName: string
) {
	if (err instanceof Error) {
		console.error(`Error in ${fileName}:`, err.message);
		if (err.message === 'jwt must be provided') {
			res
				.status(HttpStatusCode.UNAUTHORIZED)
				.json({ message: HttpStatusMessage.UNAUTHORIZED });
		} else {
			res
				.status(HttpStatusCode.INTERNAL_SERVER_ERROR)
				.json({ message: err.message });
		}
	} else {
		console.error(UNKNOWN_ERR_MSG);
		res
			.status(HttpStatusCode.INTERNAL_SERVER_ERROR)
			.json({ message: UNKNOWN_ERR_MSG });
	}
}
