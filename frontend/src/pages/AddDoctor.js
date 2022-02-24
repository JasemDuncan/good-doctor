import React, { useState } from 'react';
import { logoutUser } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Nav from '../components/Nav';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { addDoctor } from '../redux/doctors/doctors';

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
  // const [create_at, setCreated_at] = useState();
  // const [updated_at, setUpdate_at] = useState();
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

  const Submit = () => {
    const newDoctor = {

      name,
      age,
      specialization,
      bookingFee,
      biography,
      // create_at,
      // updated_at,
      image_data,
    };

    dispatch(CreateDoctor(newDoctor));
    setName('');

  };

  return (
    <>
      <Nav handleLogOut={handleLogOut} />

      <div className="col-10">
        <h2 className="mt-5">Form to Add Doctors</h2>

        <Form action="/" onSubmit={Submit}>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              placeholder="Type your specialization"
              id="lblName"
              onChange={lblNameChanged}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Specialization</Form.Label>
            <Form.Control
              type="text"
              value={specialization}
              placeholder="Type your specialization"
              id="lblSpecialization"
              onChange={lblSpecializationChanged}
              required
            />
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
                type="text"
                value={age}
                placeholder="Type your age"
                id="lblAge"
                onChange={lblAgeChanged}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Booking Fee</Form.Label>
              <Form.Control
              as="select"
              id="chkBookingFee"
              placeholder='Chose'
              value={bookingFee}
              onChange={chkBookingFeeChanged}
              required
              >
              </Form.Control>
              <Form.Select>
                <option value=""  >Choose...</option>
                <option value="100">100</option>
                <option value="120">120</option>
                <option value="140">140</option>
              </Form.Select>

            </Form.Group>

            <Form.Group as={Col} controlId="formFile" className="mb-3">
              <Form.Label>Default file input example</Form.Label>
              <Form.Control
                type="file"
                value={image_data}
                id="imgDoctor"
              />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit" value="Submit" onClick={Submit} className='rounded-pill py-3 px-4 mt-5 bg-greenish'>
            Submit
          </Button>
        </Form>

      </div>



    </>
  )
}
