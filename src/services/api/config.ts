import axios from 'axios';
import { PRIVATE_KEY, BASE_URL } from '../../constants/api';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    apikey: PRIVATE_KEY,
  },
});

export default api;
