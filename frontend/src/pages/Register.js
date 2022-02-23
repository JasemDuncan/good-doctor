import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createUser } from '../services/authService';
import Logo from '../components/logo/Logo';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    username: '',
    age: '',
    password: '',
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(user)).then(() => {
      navigate('/');
    });
  };

  const { name, username, age, password } = user;

  return (
    <div className="row">
      <form onSubmit={handleSubmit} className="col-3 mx-auto d-flex flex-column justify-content-center mt-5">
        {/* <h3 className="text-center my-5">New User?</h3> */}
        <div className="w-50 mx-auto mb-5">
          <Logo />
        </div>
        <input className="form-control mb-3" type="text" name="name" placeholder="Full Name" value={name} onChange={handleChange} required />
        <input className="form-control mb-3" type="text" name="username" placeholder="Username" value={username} onChange={handleChange} required />
        <input className="form-control mb-3" type="number" name="age" placeholder="Age" value={age} onChange={handleChange} required />
        <input className="form-control mb-3" type="password" name="password" placeholder="Password" value={password} onChange={handleChange} required />
        <input className="form-control btn btn-warning" type="submit" value="Register"/>
        <Link className="d-block text-center mt-4" to="/login">Login User</Link>
      </form>
    </div>
  )
}

export default Register;

