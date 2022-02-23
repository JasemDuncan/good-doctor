import React, { useState } from 'react';
import Nav from './Nav';
import { useDispatch, useSelector } from 'react-redux';
import dots from '../components/dots.png';
import doctorImg from './m.png';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { logoutUser } from '../services/authService';
import 'react-datepicker/dist/react-datepicker.css';

const DoctorDetail = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { doctor } = props;
    const [selectedDate,setSelectedDate] =useState(null);

    const handleLogOut = () => {
        dispatch(logoutUser(navigate));
        navigate('/login');
    };

    return (
        <>
            <Nav handleLogOut={handleLogOut} />
            <div className='col-10 latestModelsDetails'>
                <div className='titleContainerDetails'>
                    <div className='imgDoctorDetail'>
                        <img src={doctorImg} alt="Doctor" />
                    </div>

                    <div className='doctorsDetails'>
                        <div className='nameExperience'>
                            <div className='titleDoctorsDetails'>
                                {doctor.name}
                            </div>
                            <div className='spacilization'>
                                {doctor.specialization}
                            </div>
                            <div className='biography'>
                                - {doctor.biography}
                            </div>
                        </div>
                        <div>
                            <Table striped hover>
                                <tbody>
                                    <tr>
                                        <td>Discount</td>
                                        <td>20%</td>
                                    </tr>
                                    <tr>
                                        <td>Booking Fee</td>
                                        <td>{doctor.bookingFee}</td>
                                    </tr>
                                    <tr>
                                        <td>Total ammount payable</td>
                                        <td>{
                                            parseInt(doctor.bookingFee) - (0.2 * (parseInt(doctor.bookingFee)))
                                        }
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div className='datePickerContent'>
                            <div className='datePickerLabel'>
                                Book your date:
                            </div>
                            <DatePicker  
                                className='datePicker'
                                selected={selectedDate} 
                                onChange={date => setSelectedDate(date)}
                                dateFormat='dd/MM/yyyy'
                                minDate={new Date()}
                                filterDate={date=> date.getDay()!=0}
                            />
                        </div>
                        <div className='discoverMore'>
                            DISCOVER MORE DOCTORS 
                            <div class="loader">Loading...</div>
                        </div>
                        <Link  key={doctor.id} to={`/${doctor.id}`}>
                            <Button variant="success" className='btnAppoitment' >Book an Appointment</Button>{' '}
                        </Link>
                    </div>
                </div>
            </div>

        </>

    );
}

export default DoctorDetail;