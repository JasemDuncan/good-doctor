import { createSlice } from '@reduxjs/toolkit';

const appointment = createSlice({
  name: 'appointment',
  initialState: {
    list: [],
    loading: false,
    error: '',
  },
  reducers: {
    appointmentRequest: (state) => {
      state.loading = true;
    },
    setAppointment: (state, action) => {
      state.list = action.payload.data;
      state.loading = false;
    },
    appointmentCreated: (state, action) => {
      state.list.push(action.payload.data);
      state.loading = false;
    },
    appointmentFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  appointmentRequest,
  setAppointment,
  appointmentFailure,
  appointmentCreated,
} = appointment.actions;
export default appointment.reducer;