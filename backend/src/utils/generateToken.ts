import jwt from 'jsonwebtoken';
import { Response } from 'express';
import { Types } from 'mongoose';
import {
	ACCESS_TOKEN_EXPIRATION_DAYS,
	ACCESS_TOKEN_EXPIRATION_MS,
} from '../consts/accessTokenExpiration';

export function generateToken(userId: Types.ObjectId, res: Response) {
	const secretKey = process.env.JWT_SECRET_KEY || '';
	const mode = process.env.NODE_ENV || false;

	const token = jwt.sign({ userId }, secretKey, {
		expiresIn: ACCESS_TOKEN_EXPIRATION_DAYS,
	});

	res.cookie('chat-token', token, {
		maxAge: ACCESS_TOKEN_EXPIRATION_MS,
		httpOnly: true,
		sameSite: 'strict',
		secure: mode !== 'development',
	});

	return token;
}
