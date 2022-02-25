import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { createAppointment } from '../services/appointmentService';
import { logoutUser } from '../services/authService';
import Nav from '../components/Nav';
import storage from '../services/storageService';
import './Book.css';

export default function BookAppointment() {
  const address = useLocation();

  const { id, name, biography } = address.state.currentDoctor;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.entities.appointment);
  const currentUser = storage.getAuthToken();

  const [appointment, setAppointment] = useState({
    doctor: id,
    appointment_date: '',
  });

  const handleLogOut = () => {
    dispatch(logoutUser(navigate));
    navigate('/login');
  };
  
  const handleChange = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createAppointment({
        doctor_id: appointment.doctor,
        user_id: currentUser.id,
        appointment_date: appointment.appointment_date,
      }),
    ).then(() => {
      navigate('/');
    });
  };

  const { appointment_date } = appointment;

  return (
    <>
      <div className="book-page">
        <div className="content">
          <div className="details">
            <h4 className="text-center border-bottom py-5">
              {`Book an Appointment with ${name}`}
            </h4>
            <div className="text-center mt-5 lh-lg">
              {biography}
            </div>
          </div>
          <div className="">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <form className="mt-5" onSubmit={handleSubmit}>
                <div className="d-flex align-items-center justify-content-center">
                  <input
                    type="date"
                    name="appointment_date"
                    id="date"
                    value={appointment_date}
                    onChange={handleChange}
                    className="py-3 bg-transparent text-center text-white rounded-pill px-5 border border-white border-2 me-2"
                    required
                  />
                  <button type="submit" className="btn bg-white rounded-pill py-3 px-5 ms-2">
                    Book
                  </button>
                </div>
                <div className="">
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}