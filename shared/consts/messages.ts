import { PASS_LENGTH } from './passLength';

export const PORT_MSG = 'Server is running on port:';

export const UNKNOWN_ERR_MSG = 'An unknown error occurred';

export const authMessages = {
	EMAIL_EXIST:
		'The user with this email already exists, please try another email or login!',
	SHORT_PASS: `The password should be at least ${PASS_LENGTH} characters long!`,
	INVALID_DATA: 'Invalid user data',
	INVALID_CREDENTIALS: 'Invalid email or password',
	REQUIRED_FIELDS: 'Email, firstName, lastName and password are required!',
	LOGOUT_SUCCESS: 'Logged out successfully!',
};
