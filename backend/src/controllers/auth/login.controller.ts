import { Request, Response } from 'express';
export function login(_req: Request, res: Response) {
	res.send('log in route');
}
