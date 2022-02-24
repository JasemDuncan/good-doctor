import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { getDoctors } from "../services/doctorsService";
import { logoutUser } from '../services/authService';
import storage from "../services/storageService";
import Nav from '../components/Nav';

export default function MyAppointments() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = storage.getAuthToken();
  const { list: doctorrs } = useSelector((state) => state.entities.doctorrs);
  const [appointments, setAppointments] = useState([]);

  const handleLogOut = () => {
    dispatch(logoutUser(navigate));
    navigate('/login');
  };

  const loadDoctors = async () => {
    try {
      dispatch(getDoctors());
    } catch (error) {
      console.log(error);
    }
  };

  const getAppointments = async () => {
    let allAppointments = await fetch(
      `http://localhost:8000/api/v1/appointments/${currentUser.id}`
    );
    allAppointments = await allAppointments.json();
    setAppointments(allAppointments.data);
  };

  const Appointments = (
    <>
      {appointments.length > 0 ? (
        appointments.map((appointment, index) => {
          const doctor = doctorrs.find((doctor) => doctor.id === appointment.doctor_id);
          return (
            <tr key={appointment.id}>
              <td>{index + 1}</td>
              <td>{doctor.name}</td>
              <td>{appointment.appointment_date}</td>
            </tr>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </>
  );

  useEffect(async () => {
    await loadDoctors();
    await getAppointments();
  }, []);

  return (
    <>
    <Nav handleLogOut={handleLogOut} />
    <div className='col-8 mx-auto'>
      <div>
        <div className='pt-5'>
          <h3 className='my-5 text-center' id=''>
            MY APPOINTMENTS
          </h3>
          <Table className='mt-3 table-bordered'>
            <thead>
              <tr>
                <td>#</td>
                <td>Doctor</td>
                <td>Appointment Date</td>
              </tr>
            </thead>
            <tbody>{Appointments}</tbody>
          </Table>
        </div>
      </div>
    </div>
    </>
  );
}
