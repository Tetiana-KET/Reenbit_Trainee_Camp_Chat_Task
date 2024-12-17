import express, { Request, Response, NextFunction } from 'express';

import { signup } from '../controllers/auth/signup.controller';
import { login } from '../controllers/auth/login.controller';
import { logout } from '../controllers/auth/logout.controller';

const router = express.Router();

router.post(
	'/signup',
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			await signup(req, res);
		} catch (error) {
			next(error);
		}
	}
);

router.post(
	'/login',
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			await login(req, res);
		} catch (error) {
			next(error);
		}
	}
);

router.post(
	'/logout',
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			await logout(req, res);
		} catch (error) {
			next(error);
		}
	}
);

export default router;
