import http from '../services/httpService';
import { BASE_URL } from '../utils/constants';

export const getAppointmentsAsync = async () => await http.get(`${BASE_URL}/appointments`);
export const getAppointmentAsync = async (id) => await http.get(`${BASE_URL}/appointments/${id}`);
export const createAppointmentAsync = async (appointment) => await
http.post(`${BASE_URL}/appointments`, appointment);