import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
import { logoutUser } from '../services/authService';
import Nav from './Nav';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCaretLeft, FaBookmark } from 'react-icons/fa';
import './Details.css';
import { doctorsSelector } from '../redux/reducers/doctors';

function Details() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [selectedDate,setSelectedDate] =useState(null);

  const doctorArray = useSelector(doctorsSelector);
  const currentDoctor = doctorArray.find((doctor) => doctor.id === location.state.doctorId);

  const handleLogOut = () => {
    dispatch(logoutUser(navigate));
    navigate('/login');
  };

  const goToBookingPage = (currentDoctor) => {
    navigate(`/book/${currentDoctor.id}`, { state: { currentDoctor } });
  };
  return (
    <div className="row p-0">
      <Nav handleLogOut={handleLogOut} />
      <div className="col-10 d-flex align-items-center justify-content-between p-4">
        <div className="image-holder">
          <div id="backButtonContainer">
            <div
              onClick={() => {
                navigate('/');
              }}
              onKeyPress={() => {}}
              role="button"
              tabIndex="0"
              id="backButton"
            >
              <FaCaretLeft />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h5 className="text-end">
            {currentDoctor.name.toUpperCase()}
          </h5>
          <p className="text-end">- $50 deposit on any Appointment</p>
          <Table striped>
            <tbody>
              <tr>
                <td className="fw-bold">FEE</td>
                <td className="text-end">{`$ ${currentDoctor.bookingFee}`}</td>
              </tr>
              <tr>
                <td className="fw-bold">SPECIALIZATION</td>
                <td className="text-end">{`${currentDoctor.specialization}`}</td>
              </tr>
              <tr>
                <td className="fw-bold">DURATION</td>
                <td className="text-end">{`${currentDoctor.age} years`}</td>
              </tr>
            </tbody>
          </Table>
          <h5 className="fw-bold text-end mt-5">Biography</h5>
          <div className='datePickerContent border-top mt-5'>
            <div className='datePickerLabel mb-3 mt-3'>
              Book your date:
            </div>
            {/* <DatePicker  
              className='datePicker px-3 py-2 form-control'
              selected={selectedDate} 
              onChange={date => setSelectedDate(date)}
              dateFormat='dd/mm/yyyy'
              placeholderText='dd/mm/yyyy'
              minDate={new Date()}
              filterDate={date=> date.getDay()!=0}
            /> */}
          </div>
          <Button
            type="button"
            className="rounded-pill py-3 px-4 mt-5 bg-greenish"
            onClick={() => goToBookingPage(currentDoctor)}
          >
            <span className="me-2"><FaBookmark /></span>
            BOOK APPOINTMENT
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Details;
