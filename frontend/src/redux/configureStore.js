import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import doctorsReducer from './doctors/doctors';
import appointmentsReducer from './appointments/appointments';

const reducer = combineReducers({
    doctorsReducer,
    appointmentsReducer
    // additional reducers could be added here
});

const store = createStore(
    reducer,
    applyMiddleware(logger)
);

export default store;