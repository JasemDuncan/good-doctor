import http from '../services/httpService';
import { BASE_URL } from '../utils/constants';

export const createUserAsynch = async (user) => await http.post(`${BASE_URL}/register`, user);
export const loginUserAsynch = async (user) => await http.post(`${BASE_URL}/login`, user);
