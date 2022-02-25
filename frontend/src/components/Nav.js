import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from './logo/Logo';
import './Nav.css';

const Nav = ({ handleLogOut }) => {
  return (
    <nav className="">
      <div className="my-5">
        <Logo />
      </div>
      <NavLink 
        to="/"
        style={({ isActive }) => ({ 
          background: isActive ? '#98bf10' : 'none',
          color: isActive ? '#fff' : 'none'
        })}
      >Doctors</NavLink>
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
      
      <button className="btn bg-light py-3 mt-4 rounded-0" type="submit" onClick={handleLogOut}>
        Log out
      </button>
    </nav>
  )
}

Nav.propTypes = {
  handleLogOut: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Nav