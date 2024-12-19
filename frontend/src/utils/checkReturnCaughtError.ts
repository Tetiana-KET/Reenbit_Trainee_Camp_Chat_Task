import toast from 'react-hot-toast';
import axios from 'axios';
import { UNKNOWN_ERR_MSG } from '../../../shared/consts/messages';

export function checkReturnCaughtError(err: unknown, fileName: string): void {
	if (axios.isAxiosError(err)) {
		if (err.response?.data?.message) {
			toast.error(err.response.data.message);
		} else {
			toast.error('An error occurred during the request.');
		}
		console.error(
			`AxiosError in ${fileName}:`,
			err.response?.data || err.message
		);
	} else if (err instanceof Error) {
		toast.error(err.message);
		console.error(`Error in ${fileName}:`, err.message);
	} else {
		toast.error(UNKNOWN_ERR_MSG);
		console.error(`${UNKNOWN_ERR_MSG} in ${fileName}:`, err);
	}
}
