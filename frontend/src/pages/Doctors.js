import React from 'react';
// import dots from '../components/dots.png';
import { logoutUser } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import BootstrapCarousel from '../components/BootstrapCarousel';
import Nav from '../components/Nav';
import '../App.css';

export default function Doctors() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logoutUser(navigate));
    navigate('/login');
  };

  return (
    <>
      <Nav handleLogOut={handleLogOut} />

      <div className='col-10 latestModels'>
          <div className='titleContainer'>
            <div className='titleDoctors'>
              LATEST DOCTORS                
            </div>
            <div className='titleDoctorsDescription'>
              Please select a Doctor
            </div>
            <div>
              {/* <img src={dots} /> */}
            </div>
          </div>
          <div className='listDoctors'>            
            {/* <BootstrapCarousel/>               */}
          </div>
      </div>
    </>
  )
}
