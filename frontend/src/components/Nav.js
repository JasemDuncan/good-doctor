import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav>
      <NavLink 
        to="/doctors"
        style={({ isActive }) => ({ 
          background: isActive ? '#98bf10' : 'none',
          color: isActive ? '#fff' : 'none'
        })}
      >Doctors</NavLink>
      <NavLink 
        to="/makeAppointment"
        style={({ isActive }) => ({ 
          background: isActive ? '#98bf10' : 'none',
          color: isActive ? '#fff' : 'none'
        })}
      >Make Appointment</NavLink>
      <NavLink 
        to="/myAppointments"
        style={({ isActive }) => ({ 
          background: isActive ? '#98bf10' : 'none',
          color: isActive ? '#fff' : 'none'
        })}
      >My Appointments</NavLink>
      <NavLink 
        to="/addDoctor"
        style={({ isActive }) => ({ 
          background: isActive ? '#98bf10' : 'none',
          color: isActive ? '#fff' : 'none'
        })}
      >Add Doctor</NavLink>
      <NavLink 
        to="/deleteDoctor"
        style={({ isActive }) => ({ 
          background: isActive ? '#98bf10' : 'none',
          color: isActive ? '#fff' : 'none'
        })}
      >Delete Doctor</NavLink>
    </nav>
  )
}

export default Nav