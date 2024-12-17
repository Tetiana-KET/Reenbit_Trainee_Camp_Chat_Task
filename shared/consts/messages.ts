import { PASS_LENGTH } from './passLength';

export const PORT_MSG = 'Server is running on port:';

export const authMessages = {
	EMAIL_EXIST:
		'The user with this email already exists, please try another email ot login!',
	SHORT_PASS: `The password should be at least ${PASS_LENGTH} characters long!`,
	INVALID_DATA: 'Invalid user data',
};
