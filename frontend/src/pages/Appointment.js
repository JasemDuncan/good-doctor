// import React from 'react';
// import { logoutUser } from '../services/authService';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import Nav from '../components/Nav';

// export default function AppointmentForm() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogOut = () => {
//     dispatch(logoutUser(navigate));
//     navigate('/login');
//   };
  
//   return (
//     <>
//       <Nav handleLogOut={handleLogOut} />

//       <div className="col-10">
//         <h2 className="mt-5">Form to Make Appointments</h2>
//       </div>
//     </>
//   )
// }


import React, { useEffect, useState } from 'react';
import './Form.css';
import { GrClose } from 'react-icons/gr';
import { HiMenuAlt4 } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getDoctors } from '../services/doctorsService';
import { createAppointment } from '../services/appointmentService';
import { getLocations } from '../services/locationsService';
import storage from '../services/storageService';

export default function Appointment() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.entities.appointment);
  const currentUser = storage.getAuthToken();
  const { list: doctors } = useSelector((state) => state.entities.doctorrs);
  const { list: locations } = useSelector((state) => state.entities.locations);
  const [appointment, setAppointment] = useState({
    location: '',
    doctor: '',
    appointment_date: ''
  });
  const loadLocations = async () => {
    try {
      dispatch(getLocations());
    } catch (error) {
      console.log('Loading locations Error');
    }
  };
  const handleChange = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };
  const loadDoctors = async () => {
    try {
      dispatch(getDoctors());
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadDoctors();
    loadLocations();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createAppointment({
        doctor_id: appointment.doctor,
        user_id: currentUser.id,
        location_id: appointment.location,
        appointment_date: appointment.appointment_date,
      }),
    ).then(() => {
      navigate('/');
    });
  };

  const closePage = () => {
    navigate('/');
  };

  const {
    location, appointment_date, doctor,
  } = appointment;

  return (
    <div className="reg">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <header className="header">
            <div className="hamburger">
              <HiMenuAlt4 />
            </div>
            <div className="search">
              <GrClose
                style={{
                  color: '#97bf11',
                  fontSize: '1.5rem',
                  paddingLeft: '10px',
                }}
                onClick={closePage}
              />
            </div>
          </header>
          <div className="containerr">
            <h1 className="reg-form-title">BOOK A CHEF TODAY TO EAT WITH US</h1>
            <div className="baar" />
            <p className="description">
              Welcome to ChefTrack, the best chef rental service in the world.
              Book a chef today and enjoy your trip. In order to book a chef, you
              must be logged in. Select your city, chef, start date and end date.
              Then click on the book button. This will create a appointment for
              you. For more information, please contact us. Thank you for
              choosing us.
            </p>
            <form className="select-book" onSubmit={handleSubmit}>
              <div className="reserve-wrapper">
                <div className="reserve-date">
                  <label htmlFor="startDate">
                    Start Date:
                    <input
                      type="date"
                      name="appointment_date"
                      id="date"
                      value={appointment_date}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
              </div>
              <div className="select-and-book">
                <div className="select-city">
                  <select name="location" value={location} onChange={handleChange}>
                    {locations.map((location) => (
                      <option key={location.id} value={location.id}>
                        {location.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="select-city">
                  <select name="doctor" value={doctor} onChange={handleChange}>
                    {doctors.map((doctor) => (
                      <option key={doctor.id} value={doctor.id}>
                        {doctor.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="book-btn">
                <button type="submit" className="btn">
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
