import React from 'react';
import dots from '../components/dots.png';
import BootstrapCarousel from '../components/BootstrapCarousel';
import SideBar from '../components/SideBar';
import '../App.css';

export default function Doctors() {
  return (
    <>
      <SideBar />

      <div className='col-10 latestModels'>
          <div className='titleContainer'>
            <div className='titleDoctors'>
              LATEST DOCTORS                
            </div>
            <div className='titleDoctorsDescription'>
              Please select a Doctor
            </div>
            <div>
              <img src={dots} />
            </div>
          </div>
          <div className='listDoctors'>            
            <BootstrapCarousel/>              
          </div>
      </div>
    </>
  )
}
