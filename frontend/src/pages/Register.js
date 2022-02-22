import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createUser } from '../services/authService';

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
    <div>
      <form onSubmit={handleSubmit}>
        <h2>New User?</h2>
        <input type="text" name="name" placeholder="Full Name" value={name} onChange={handleChange} required />
        <input type="text" name="username" placeholder="Username" value={username} onChange={handleChange} required />
        <input type="number" name="age" placeholder="Age" value={age} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={password} onChange={handleChange} required />
        <input type="submit" value="Register"/>
        <Link to="/login">Login</Link>
      </form>
    </div>
  )
}

export default Register;

