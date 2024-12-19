import { UNKNOWN_ERR_MSG } from '../../../shared/consts/messages';

export function checkReturnCaughtError(err: unknown, fileName: string) {
	if (err instanceof Error) {
		console.error(`Error in ${fileName}:`, err.message);
	} else {
		console.error(UNKNOWN_ERR_MSG);
	}
}
