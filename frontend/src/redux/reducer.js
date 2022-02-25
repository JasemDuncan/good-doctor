import { combineReducers } from '@reduxjs/toolkit';
import entities from './entities';
import auth from './reducers/auth';
import doctors from './reducers/doctors';

const reducer = combineReducers({
  auth,
  doctors,
  entities,
});

export default reducer;