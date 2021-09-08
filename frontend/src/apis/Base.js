import axios from 'axios';

const token = localStorage.getItem('auth_token');

const API = axios.create({
  baseURL: `http://127.0.0.1:8000/api`,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  },
});

export default API;
