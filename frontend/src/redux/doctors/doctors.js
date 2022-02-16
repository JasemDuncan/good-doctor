import axios from 'axios';

//DUCK MODEL
//Constants
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
        const specializaion=doctor.specializaion;
        const bookingFee=doctor.bookingFee;
        const biography=doctor.biography;
        const create_at=doctor.create_at;
        const updated_at=doctor.updated_at;

        fetchedDoctors.push({
            id,
            name,
            age,
            specializaion,
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
//Reducer
const reducer = (state = initialState,action) => {
    switch (action.type) {
        case GET_DOCTORS:
            return [...action.fetchedDoctors];
        default:
            return state;
    }
};

export default reducer;
