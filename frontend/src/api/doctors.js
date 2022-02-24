import http from '../services/httpService';
import { BASE_URL } from '../utils/constants';

export const getDoctorsAsync = async () => await http.get(`${BASE_URL}/doctors`);
export const deleteDoctorAsync = async (doctorId) => await http.delete(`${BASE_URL}/doctors/${doctorId}`);