import { Request, Response } from 'express';

import User from 'backend/src/models/user.model';

import { PROFILE_IMG_REQUIRED } from '@shared/consts/messages';
import { HttpStatusCode } from '@shared/types/httpStatusCode';

import { returnCaughtError } from 'backend/src/utils/returnCaughtError';
import cloudinary from '../lib/cloudinary';

export async function updateProfile(req: Request, res: Response) {
	try {
		const { profileImg } = req.body;
		const userId = req.user._id;

		if (!profileImg) {
			return res
				.status(HttpStatusCode.BAD_REQUEST)
				.json({ message: PROFILE_IMG_REQUIRED });
		}

		const uploadImgResponse = await cloudinary.uploader.upload(profileImg);
		const updatedUser = User.findByIdAndUpdate(
			userId,
			{
				profileImg: uploadImgResponse.secure_url,
			},
			{ new: true }
		);

		res.status(HttpStatusCode.OK).json(updatedUser);
	} catch (err: unknown) {
		returnCaughtError(err, res, 'updateProfile.controller');
	}
}
