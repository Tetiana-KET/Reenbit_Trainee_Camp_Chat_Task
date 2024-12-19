import axios from 'axios';
import { BASE_URL } from '@shared/consts/baseUrl';
export const axiosInstance = axios.create({
	baseURL: BASE_URL,
	withCredentials: true,
});
