import axios from 'axios';

//Constants
const ADD_DOCTOR = 'ADD_DOCTOR';
const REMOVE_DOCTOR = 'REMOVE_DOCTOR';
const url = 'https://good-doctor-capstone.herokuapp.com/doctors';
const initialState = [];

// Actions
export const newDoctor = (payload) => ({
    type: ADD_DOCTOR,
    payload,
});

export const removeDoctor = (id) => ({
  type: REMOVE_DOCTOR,
  id,
});
//Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DOCTOR:
      return [...state, action.payload];
    case REMOVE_DOCTOR:
      return state.filter((doctor) => doctor.id !== action.id);
    default:
      return state;
  }
};

export default reducer;
