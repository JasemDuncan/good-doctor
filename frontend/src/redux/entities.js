import { combineReducers } from '@reduxjs/toolkit';
import doctors from './reducers/doctors';

const entities = combineReducers({
  doctors,
});

export default entities;