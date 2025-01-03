import mongoose from 'mongoose';

export async function connectDB() {
	mongoose
		.connect(process.env.MONGO_URL || '')
		.then(() => {
			console.log('Connected to MongoDB');
		})
		.catch(error => {
			console.error('MongoDB connection error:', error);
		});
}
