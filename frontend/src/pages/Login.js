import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { loginUser } from '../services/authService';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ username })).then(() => {
      navigate('/');
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Log into Account</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          value={username}
          required
        />
        <input type="submit" value="Login" />
        <Link to="/register">Register User</Link>
      </form>
    </div>
  )
}

export default Login;