import { Request, Response } from 'express';

export function logout(_req: Request, res: Response) {
	res.send('log out route');
}
