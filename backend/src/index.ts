import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';

import path from 'node:path';

import { connectDB } from './lib/db';
import authRoutes from './routes/auth.routes';
import messageRoutes from './routes/message.routes';

import { PORT_MSG } from '@shared/consts/messages';
import { fileURLToPath } from 'node:url';

dotenv.config();
const PORT = process.env.PORT;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const backendPath = path.resolve(__dirname, '..');

const app = express();
app.use(
	cors({
		origin: process.env.FRONT_URL,
		credentials: true,
	})
);
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRoutes);
app.use('/api/message', messageRoutes);

if (process.env.NODE_ENV === 'production') {
	const frontendPath = path.join(backendPath, '../frontend/dist');
	app.use(express.static(frontendPath));

	app.get('*', (_req, res) => {
		res.sendFile(path.join(frontendPath, 'index.html'));
	});
}

let server;
connectDB()
	.then(() => {
		server = app.listen(PORT, () => {
			console.log(`${PORT_MSG} ${PORT}`);
		});
	})
	.catch(error => {
		console.error(error);
		process.exit(1);
	});
