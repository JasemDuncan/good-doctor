import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { createAppointment } from '../services/appointmentService';
import { logoutUser } from '../services/authService';
import Nav from '../components/Nav';
import storage from '../services/storageService';

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
      <Nav handleLogOut={handleLogOut} />
      <div className="col-5 mx-auto">
        <h4 className="text-center mt-5 pb-3 pt-5 border-bottom">
          {`${name}`}
        </h4>
        <p className="mt-5 fs-5 text-center">My Biography</p>
        <div className="bg-light p-5 rounded mt-5 lh-lg">
          {biography}
        </div>
      </div>
      <div className="col-4">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <form className="booking-form border rounded p-5" onSubmit={handleSubmit}>
            <div className="">
              <div className="text-center">
                <label htmlFor="appointment_date" className="fw-bold mb-3 fs-5">
                  Select Date
                </label>
                <input
                  type="date"
                  name="appointment_date"
                  id="date"
                  value={appointment_date}
                  onChange={handleChange}
                  className="form-control py-3 mb-3"
                  required
                />
              </div>
            </div>
            <div className="">
              <button type="submit" className="btn btn-warning rounded-pill py-3 px-4 form-control">
                Book Appointment
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
}