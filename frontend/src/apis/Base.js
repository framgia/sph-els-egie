import axios from 'axios';
import Cookies from 'js-cookie';

const token = Cookies.get('auth_token');

const API = axios.create({
  baseURL: `http://127.0.0.1:8000/api`,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  },
});

export default API;
