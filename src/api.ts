import axios from 'axios';

const API_URL = 'https://api.chatgpt.com';
const API_KEY = '';

const axiosInstance = axios.create({
	baseURL: API_URL,
	headers: {
		Authorization: `Bearer ${API_KEY}`,
		'Content-Type': 'application/json',
	},
});

export default axiosInstance;
