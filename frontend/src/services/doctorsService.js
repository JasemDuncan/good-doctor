import { toast } from 'react-toastify';
import { getDoctorsAsync } from '../api/doctors';
import { doctorsRequested, setDoctors, setDoctorsFailure } from '../redux/reducers/doctorrs';

export const getDoctors = () => async (dispatch) => {
  dispatch(doctorsRequested());
  try {
    const response = await getDoctorsAsync();
    dispatch(setDoctors(response.data));
  } catch (error) {
    dispatch(setDoctorsFailure(error.response ? error.response.data.message : error.message));
    toast.error(error.response ? error.response.data.message : error.message);
  }
};

export const doctorsGe = () => {
  console.log('casrs');
};