import { toast } from 'react-toastify';
import { getLocationsAsync } from '../api/locations';
import { locationsRequested, setLocations, setLocationsFailure } from '../redux/reducers/locations';

export const getLocations = () => async (dispatch) => {
  dispatch(locationsRequested());
  try {
    const response = await getLocationsAsync();
    dispatch(setLocations(response.data));
  } catch (error) {
    dispatch(setLocationsFailure(error.response ? error.response.data.message : error.message));
    toast.error(error.response ? error.response.data.message : error.message);
  }
};

export const locationsGe = () => {
  console.log('locations');
};