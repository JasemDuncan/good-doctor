import axios from 'axios';

const CREATE_USER = 'CREATE_USER';
const CREATE_USER_ERROR = 'CREATE_USER_ERROR';

const createUser = newUser => async (dispatch) => {
	try {
		dispatch({ type: CREATE_USER, ...newUser });
		const response = await axios({
			method: 'POST',
			url: 'http://localhost:8000/api/v1/users',
			data: { user: newUser },
			crossdomain: true,
		});
		const { token } = response.data;
		localStorage.setItem('jwt', token);	
	} catch {
		dispatch({ type: CREATE_USER_ERROR });
	}
};
export { createUser }