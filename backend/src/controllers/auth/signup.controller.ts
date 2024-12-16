import { Request, Response } from 'express';

export function signup(_req: Request, res: Response) {
	res.send('sign up route');
}
