import { createSlice } from '@reduxjs/toolkit';

const doctorrs = createSlice({
  name: 'doctorrs',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    doctorsRequested: (state) => {
      state.loading = true;
    },
    setDoctors: (state, action) => {
      state.list = action.payload.data;
      state.loading = false;
    },
    setDoctorsFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },

});

export const { doctorsRequested, setDoctors, setDoctorsFailure } = doctorrs.actions;
export default doctorrs.reducer;