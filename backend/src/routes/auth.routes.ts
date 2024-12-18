import express, { Request, Response, NextFunction } from 'express';

import { signup } from '../controllers/auth/signup.controller';
import { login } from '../controllers/auth/login.controller';
import { logout } from '../controllers/auth/logout.controller';
import { updateProfile } from '../controllers/updateProfile.controller';

import { checkAuthentification } from '../middleware/auth.checkAuthentification';
import { checkAuth } from '../controllers/auth/checkAuth.controller';

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

router.put(
	'/update-profile',
	checkAuthentification,
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			await updateProfile(req, res);
		} catch (error) {
			next(error);
		}
	}
);

router.get('/check-auth', checkAuthentification, checkAuth);

export default router;
