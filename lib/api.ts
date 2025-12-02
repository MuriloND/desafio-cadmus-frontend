import axios from 'axios';
import { getClientCookie } from './client-utils';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = getClientCookie('cadmus.token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      if (typeof window !== 'undefined') {
        document.cookie = 'cadmus.token=; Max-Age=0; path=/;';
        
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export { api };