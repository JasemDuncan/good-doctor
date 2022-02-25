import React, { useState } from 'react';
import { logoutUser } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Nav from '../components/Nav';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { newDoctor } from '../redux/doctors/doctors';
import axios from 'axios';
import './Home.css';

export default function AddDoctor() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logoutUser(navigate));
    navigate('/login');
  };

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [bookingFee, setBookingFee] = useState('');
  const [biography, setBiography] = useState();
  const [image_data, setImageData] = useState();

  const lblNameChanged = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const lblAgeChanged = (e) => {
    e.preventDefault();
    setAge(e.target.value);
  };

  const lblSpecializationChanged = (e) => {
    e.preventDefault();
    setSpecialization(e.target.value);
  };

  const chkBookingFeeChanged = (e) => {
    e.preventDefault();
    setBookingFee(e.target.value);
  };

  const lblBiographyChanged = (e) => {
    e.preventDefault();
    setBiography(e.target.value);
  };

  const lblImageChanged = (e) => {
    e.preventDefault();
    setImageData(e.target.value);
  };

  const createDoctor = (doctor) => {
    axios.post('https://good-doctor-capstone.herokuapp.com/doctors', doctor)
         .then((res) => {
           if (res.status === 201) {
             dispatch(newDoctor(doctor));
           }
         })
         .catch((error) => error);
  }

  const Submit = (e) => {
    e.preventDefault();

    const doctor = {
      name,
      age,
      specialization,
      bookingFee,
      biography,
      image_data,
    };

    createDoctor(doctor);
    setName('');
    setAge('');
    setSpecialization('');
    setBiography('');
    setImageData('');
    setBookingFee('');
    navigate('/');
  };

  return (
    <div className="home-page">
      <Nav handleLogOut={handleLogOut} />
      <div className="w-50 mx-auto">
        <div className="">
        <h4 className="mt-5 fw-bold text-uppercase text-center mb-5">Add Doctor</h4>

        <Form action="/" onSubmit={Submit}>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              placeholder="Full Name"
              id="lblName"
              onChange={lblNameChanged}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Specialization</Form.Label>
            <Form.Select
                id="lblSpecialization"
                placeholder='Choose category'
                value={specialization}
                onChange={lblSpecializationChanged}
                required
              >
                <option value="">Choose Specialization</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Psychiatrist">Psychiatrist</option>
                <option value="Physicianist">Physicianist</option>
                <option value="Radiologist">Radiologist</option>
              </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Biography</Form.Label>
            <Form.Control
              type="text"
              value={biography}
              placeholder="Type your biography"
              id="lblBiography"
              onChange={lblBiographyChanged}
              required
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                value={age}
                placeholder="Type your age"
                id="lblAge"
                onChange={lblAgeChanged}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Booking Fee</Form.Label>
              <Form.Select
                id="chkBookingFee"
                placeholder='Chose'
                value={bookingFee}
                onChange={chkBookingFeeChanged}
                required
              >
                <option value=""  >Choose...</option>
                <option value="100">100</option>
                <option value="120">120</option>
                <option value="140">140</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formFile" className="mb-3">
              <Form.Label>Profile image URL</Form.Label>
              <Form.Control
                type="text"
                value={image_data}
                id="imgDoctor"
                onChange={lblImageChanged}
              />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit" value="Submit" onClick={Submit} className='rounded-pill py-3 px-5 bg-greenish'>
            Submit
          </Button>
        </Form>
        </div>
      </div>
    </div>
  )
}
