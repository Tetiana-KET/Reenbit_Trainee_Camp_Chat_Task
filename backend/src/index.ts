import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';

import { connectDB } from './lib/db';
import authRoutes from './routes/auth.routes';

import { PORT_MSG } from '@shared/consts/messages';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRoutes);

let server;
connectDB()
	.then(() => {
		server = app.listen(process.env.PORT, () => {
			console.log(`${PORT_MSG} ${process.env.PORT}`);
		});
	})
	.catch(error => {
		console.error(error);
		process.exit(1);
	});
