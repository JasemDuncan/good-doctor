import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import { createUser } from '../redux/users/actions';
import SideBar from '../components/SideBar';
import './Register.css';
class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
      name: '',
			username: '',
			age: '',
			password: '',
			// picture: '',
		};
	}

	handleNameChange = (e) => {
		this.setState({
			name: e.target.value,
		});
	}

	handleUsernameChange = (e) => {
		this.setState({
			username: e.target.value,
		});
	}

	handleAgeChange = (e) => {
		this.setState({
			age: e.target.value,
		});
	}

	handlePasswordChange = (e) => {
		this.setState({
			password: e.target.value,
		});
	}

	// handleAvatarChange = async (e) => {
	// 	this.setState({
	// 		picture: e.target.files[0],
	// 	});
	// }

	// handleImageUpload = async (imageFile) => {
	// 	const formData = new FormData();
	// 	formData.append('file', imageFile);
	// 	formData.append('upload_preset', 'avatar');
	// 	delete axios.defaults.headers.common.Authorization;
	// 	const response = await axios({
	// 		url: 'your cloudinary api url',
	// 		method: 'POST',
	// 		data: formData,
	// 	});
	// 	return response.data.secure_url;
	// }

	onSubmitHandler = async (e) => {
		e.preventDefault();
		const {
			name, username, age, password,
		} = this.state;
		// let { picture } = this.state;
		const { newUser, user } = this.props;

		// const imgPath = await this.handleImageUpload(picture);
		// picture = imgPath;
		await newUser({
			name, username, age, password,
		});
		if (user.isLogin === true) {
			const { history } = this.props;
			history.push('/');
		} else {
			this.setState(
				{
					message: 'welcome',
				},
			);
		}
	}

render() {
  const { message } = this.state;
	return (
    <>
      <SideBar />
      <div className="col-10">
        <div className="row mt-5 pt-5">
          <form onSubmit={this.onSubmitHandler} className="col-5 shadow p-5 mx-auto bg-light mt-5">
            <h2 className="mb-5">New User?</h2>
            <input className="mb-3 form-control" onChange={this.handleNameChange} type="text" placeholder="Full name" required />
            <input className="mb-3 form-control" onChange={this.handleUsernameChange} type="text" required placeholder="Username" />
            <input className="mb-3 form-control" onChange={this.handleAgeChange} type="number" placeholder="Age" required />
            <input className="mb-3 form-control" onChange={this.handlePasswordChange} type="password" placeholder="Password" required />
            {/* <input onChange={this.handleAvatarChange} type="file" accept="/images/*" /> */}
            <button className="btn btn-warning px-5" type="submit">Create Account</button>
            <Link to="/login" className="ms-4">Login</Link>
          </form>
        </div>
      </div>
    </>
		);
	}
}

const mapStateToProps = state => ({
	user: state.user,
});

const mapDispatchToProps = dispatch => ({
	newUser: estate => dispatch(createUser(estate)),
});

Register.propTypes = {
	newUser: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
