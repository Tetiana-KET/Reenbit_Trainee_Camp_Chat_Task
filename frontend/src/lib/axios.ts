import axios from 'axios';
import { BASE_URL } from '../consts/baseUrl';

export const axiosInstance = axios.create({
	baseURL: import.meta.env.MODE === 'development' ? BASE_URL : '/api',
	withCredentials: true,
});
