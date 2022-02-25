import http from '../services/httpService';
import { BASE_URL } from '../utils/constants';

export const getLocationsAsync = async () => await http.get(`${BASE_URL}/locations`);
export const getLocationAsync = async (locationId) => await http.get(`${BASE_URL}/locations/${locationId}`);