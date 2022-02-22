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
    <div className="row">
      <form onSubmit={handleSubmit} className="col-4 mx-auto d-flex flex-column justify-content-center mt-5 pt-5">
        <h3 className="text-center my-5">Log into Account</h3>
        <input
          className="form-control mb-3"
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          value={username}
          required
        />
        <input className="form-control btn btn-warning" type="submit" value="Login" />
        <Link to="/register" className="d-block text-center mt-4">Register User</Link>
      </form>
    </div>
  )
}

export default Login;