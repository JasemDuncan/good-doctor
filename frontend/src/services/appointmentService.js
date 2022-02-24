import { toast } from 'react-toastify';
import {
  appointmentFailure,
  setAppointment,
  appointmentCreated,
  appointmentRequest,
} from '../redux/reducers/appointments';
import {
  getAppointmentsAsync,
  createAppointmentAsync,
} from '../api/appointments';

export const getAppointment = () => async (dispatch) => {
  dispatch(appointmentRequest());
  try {
    const appointment = await getAppointmentsAsync();
    dispatch(setAppointment(appointment.data));
  } catch (error) {
    dispatch(
      appointmentFailure(
        error.response ? error.response.data.message : error.message,
      ),
    );
    toast.error(error.response ? error.response.data.message : error.message);
  }
};

export const createAppointment = (appointment) => async (dispatch) => {
  dispatch(appointmentRequest());
  try {
    const response = await createAppointmentAsync(appointment);
    dispatch(appointmentCreated(response.data));
    toast.success('Appointment created successfully');
    return response.data;
  } catch (error) {
    dispatch(
      appointmentFailure(
        error.response ? error.response.data.message : error.message,
      ),
    );
    toast.error(error.response ? error.response.data.message : error.message);
  }
  return null;
};