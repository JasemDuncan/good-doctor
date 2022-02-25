import { combineReducers } from '@reduxjs/toolkit';
import doctorrs from './reducers/doctorrs';
import locations from './reducers/locations';
import appointment from './reducers/appointments';

const entities = combineReducers({
  doctorrs,
  locations,
  appointment,
});

export default entities;