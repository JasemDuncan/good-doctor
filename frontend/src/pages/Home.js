import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useRef } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import storage from '../services/storageService';
import { logoutUser } from '../services/authService';
import { doctorsSelector, fetchDoctorsDataAsync } from '../redux/reducers/doctors';
import Nav from '../components/Nav';

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
      <div className="d-flex flex-column justify-content-center align-items-center">
        {/* <img src={doctor.image} alt="" className="doctor-img" /> */}
        <h5 className="mt-3 fsize-15">{doctor.name.toUpperCase()}</h5>
        <div className="d-flex fsize-3 mb-4 text-muted">
          {/* <Icons /> */}
        </div>
        <p className="fsize-12">{doctor.specialization}</p>
        <div>
          <i className="fab fa-facebook border border-secondary rounded-circle p-1 me-1" />
          <i className="fab fa-twitter border border-secondary rounded-circle p-1 me-1" />
          <i className="fab fa-instagram border border-secondary rounded-circle p-1" />
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
    <div className="row">
      <Nav handleLogOut={handleLogOut} />
      
      <div className="col-10">
        <h2 className="mt-5 fs-1 text-center">LATEST DOCTORS</h2>
        <h4 className="text-muted my-5 text-center">Please Select A Doctor</h4>
        <div className="d-flex fsize-5 mb-4 text-muted">
          {/* <Icons /> */}
        </div>
        <div className="mt-4 w-100 d-flex justify-content-between align-items-center">
          <div id="previousButtonContainer">
            <div
              onClick={scrollLeft}
              onKeyPress={scrollLeft}
              role="button"
              tabIndex="0"
              id="previousButton">
              <i className="fa fa-caret-left fsize-25" />
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
              <i className="fa fa-caret-right fsize-25" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;