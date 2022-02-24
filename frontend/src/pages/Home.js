import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useRef } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import storage from '../services/storageService';
import { logoutUser } from '../services/authService';
import { doctorsSelector, fetchDoctorsDataAsync } from '../redux/reducers/doctors';
import Nav from '../components/Nav';
import Dots from '../components/Dots';
import { FaCaretRight, FaCaretLeft, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mainDiv = useRef();
  const doctorArray = useSelector((state) => doctorsSelector(state));

  const handleLogOut = () => {
    dispatch(logoutUser(navigate));
    navigate('/login');
  };

  const goToDetailsPage = (doctorId) => {
    navigate('/details', { state: { doctorId } });
  };

  const doctors = doctorArray.map((doctor) => (
    <Col key={doctor.id} sm={12} md={4} onClick={() => goToDetailsPage(doctor.id)}>
      <div className="d-flex flex-column justify-content-center align-items-center doctor-container">
        <img src={doctor} alt="Doctor" />
        <h5 className="mt-3">{doctor.name.toUpperCase()}</h5>
        <div className="d-flex">
          <Dots />
        </div>
        <p className="mt-2">{doctor.specialization}</p>
        <div className="mt-3 mb-5">
          <span className="border p-3 rounded-pill text-muted me-2">
            <FaFacebookF />
          </span>
          <span className="border p-3 rounded-pill text-muted me-2">
            <FaTwitter />
          </span>
          <span className="border p-3 rounded-pill text-muted me-2">
            <FaInstagram />
          </span>
        </div>
      </div>
    </Col>
  ));

  useEffect(() => {
    const token = storage.getAuthToken();
    if (!token) {
      navigate('/login');
    }
    dispatch(fetchDoctorsDataAsync());
  }, [navigate]);
  const scrollRight = () => {
    mainDiv.current.scrollBy(mainDiv.current.childNodes[0].offsetWidth, 0);
  };
  const scrollLeft = () => {
    mainDiv.current.scrollBy(mainDiv.current.childNodes[0].offsetWidth * -1, 0);
  };

  return (
    <div className="home-page">
      <Nav handleLogOut={handleLogOut} />
      <div className="">
        <h3 className="mt-5 pt-5 text-center">LATEST DOCTORS</h3>
        <h6 className="text-muted mt-3 text-center">Please Select a Doctor</h6>
        <div className="d-flex fs-5 mb-5 mt-4 text-muted">
          <Dots />
        </div>
        <div className="mt-4 w-100 d-flex justify-content-between align-items-center">
          <div id="previousButtonContainer">
            <div
              onClick={scrollLeft}
              onKeyPress={scrollLeft}
              role="button"
              tabIndex="0"
              id="previousButton">
              <FaCaretLeft />
            </div>
          </div>
          <Row id="mainDiv" ref={mainDiv}>
            {doctors}
          </Row>
          <div id="nextButtonContainer">
            <div
              onClick={scrollRight}
              onKeyPress={scrollRight}
              role="button"
              tabIndex="0"
              id="nextButton">
              <FaCaretRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;