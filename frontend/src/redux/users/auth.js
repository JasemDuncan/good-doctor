const initialState = {
	isLogin: false,
	user: {
    name: '',
		username: '',
		age: '',
		password: '',
		// picture: '',
	}
};
const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CREATE_USER': return {
			...state.user,
			isLogin: true,
			user: {
        name: action.name,
				username: action.username,
				age: action.email,
				password: action.password,
				// picture: action.picture,
			},
		};
		case 'CREATE_USER_ERROR': return {
			isLogin: false,
		};
		default: return state;
	}
};
export default authReducer;
