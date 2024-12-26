import express, { Request, Response, NextFunction } from 'express';
import { checkAuthentification } from '../middleware/auth.checkAuthentification';
import { getUsersExceptCurrent } from '../controllers/getUsersExceptCurrent.controller';
import { getMessages } from '../controllers/messages/getMessages.controller';
import { sendMessage } from '../controllers/messages/sendMessage.controller';
import { updateMessage } from '../controllers/messages/updateMessage.controller';
import { deleteMessage } from '../controllers/messages/deleteMessage.controller';
import { getChats } from '../controllers/messages/getChats.controller';

const router = express.Router();

router.get(
	'/users',
	checkAuthentification,
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			await getUsersExceptCurrent(req, res);
		} catch (error) {
			next(error);
		}
	}
);

router.get(
	'/:id',
	checkAuthentification,
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			await getMessages(req, res);
		} catch (error) {
			next(error);
		}
	}
);

router.get(
	'/users/chats',
	checkAuthentification,
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			await getChats(req, res);
		} catch (error) {
			next(error);
		}
	}
);

router.post(
	'/send/:id',
	checkAuthentification,
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			await sendMessage(req, res);
		} catch (error) {
			next(error);
		}
	}
);

router.put(
	'/update/:id',
	checkAuthentification,
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			await updateMessage(req, res);
		} catch (error) {
			next(error);
		}
	}
);

router.delete(
	'/delete/:id',
	checkAuthentification,
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			await deleteMessage(req, res);
		} catch (error) {
			next(error);
		}
	}
);

export default router;
