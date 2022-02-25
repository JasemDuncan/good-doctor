import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiLink = 'http://localhost:8000/api/v1';
const initialState = {
  allDoctors: [],
};

export const fetchDoctorsDataAsync = createAsyncThunk(
  'doctors/fetchAll',
  async () => {
    let doctorData = await fetch(`${apiLink}/doctors`);
    doctorData = await doctorData.json();
    return doctorData.data;
  },
);

const doctorSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDoctorsDataAsync.fulfilled, (state, action) => {
      const { allDoctors } = state;
      action.payload.forEach((doctor) => {
        allDoctors.push(doctor);
      });
    });
  },
});

export const doctorsSelector = (state) => state.doctors.allDoctors;
export default doctorSlice.reducer;
