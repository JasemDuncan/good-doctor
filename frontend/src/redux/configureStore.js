import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import doctorsReducer from './doctors/doctors';
import { composeWithDevTools} from 'redux-devtools-extension';
import appointmentsReducer from './appointments/appointments';

const reducer = combineReducers({
    doctorsReducer,
    appointmentsReducer,
    // additional reducers could be added here
});

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(logger,thunk)),
);

export default store;