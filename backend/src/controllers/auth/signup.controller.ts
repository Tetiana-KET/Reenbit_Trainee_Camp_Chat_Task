import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';

import User from 'backend/src/models/user.model';

import { authMessages } from '@shared/consts/messages';
import { PASS_LENGTH } from '@shared/consts/passLength';
import { bcryptSaltLength } from 'backend/src/consts/bcryptSaltLength';
import { HttpStatusCode } from '@shared/types/httpStatusCode';
import { generateToken } from 'backend/src/utils/generateToken';

export async function signup(req: Request, res: Response) {
	const { email, firstName, lastName, password, profileImg } = req.body;

	try {
		if (password.length < PASS_LENGTH) {
			return res
				.status(HttpStatusCode.BAD_REQUEST)
				.json({ message: authMessages.SHORT_PASS });
		}
		const user = await User.findOne({ email });

		if (user) {
			return res
				.status(HttpStatusCode.BAD_REQUEST)
				.json({ message: authMessages.EMAIL_EXIST });
		}

		const salt = await bcrypt.genSalt(bcryptSaltLength);
		const hashedPassword = await bcrypt.hash(password, salt);

		const newUser = new User({
			email,
			firstName,
			lastName,
			password: hashedPassword,
			profileImg,
		});

		if (newUser) {
			generateToken(newUser._id, res);
			await newUser.save();

			res.status(HttpStatusCode.CREATED).json({
				_id: newUser._id,
				email: newUser.email,
				firstName: newUser.firstName,
				lastName: newUser.lastName,
				profileImg: newUser.profileImg,
			});
		} else {
			res
				.status(HttpStatusCode.BAD_REQUEST)
				.json({ message: authMessages.INVALID_DATA });
		}
	} catch (err: unknown) {
		if (err instanceof Error) {
			console.error('Error in signup.controller:', err.message);
			res.status(HttpStatusCode.BAD_REQUEST).json({ message: err.message });
		} else {
			console.error('An unknown error occurred');
		}
	}
}
