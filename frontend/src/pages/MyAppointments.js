import React from 'react';
import { logoutUser } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Nav from '../components/Nav';

export default function MyAppointments() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logoutUser(navigate));
    navigate('/login');
  };

  return (
    <>
      <Nav handleLogOut={handleLogOut} />

      <div className="col-10">
        <h2 className="mt-5">My Appointments</h2>
      </div>
    </>
  )
}
