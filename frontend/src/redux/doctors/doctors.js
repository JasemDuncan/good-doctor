import axios from 'axios';

//DUCK MODEL
//Constants
const ADD_DOCTOR = 'doctors/POST_DOCTORS';
const GET_DOCTORS = 'doctors/GET_DOCTORS';
const url = 'http://localhost:8000/api/v1/doctors';
const initialState = [];
//Accions
export const getDoctors = () => async (dispatch) => {
    const result = await axios(url);
    const doctors = result.data;
    const fetchedDoctors = [];
    doctors.forEach((doctor) => {
        const id = doctor.id;
        const name= doctor.name;
        const age=doctor.age;
        const specialization=doctor.specialization;
        const bookingFee=doctor.bookingFee;
        const biography=doctor.biography;
        const create_at=doctor.create_at;
        const updated_at=doctor.updated_at;

        fetchedDoctors.push({
            id,
            name,
            age,
            specialization,
            bookingFee,
            biography,
            create_at,
            updated_at
        });
    });

    dispatch({
        type: GET_DOCTORS,
        fetchedDoctors,
    });
};

export const addDoctor = ({id, name, age, specialization,bookingFee, biography, image_data }) => async (dispatch) => {
    const result = await axios.post(url, {
        item_id:id, name, age, specialization, bookingFee, biography,image_data,
    });

    if(result.data === 'Created'){
        dispatch({
            type: ADD_DOCTOR,
            doctor: {id, name, age, specialization, bookingFee, biography,image_data},
        });
    }
};
//Reducer
const reducer = (state = initialState,action) => {
    switch (action.type) {
        case GET_DOCTORS:
            return [...action.fetchedDoctors];
        case ADD_DOCTOR:
            return [...state, action.doctor];
        default:
            return state;
    }
};

export default reducer;
