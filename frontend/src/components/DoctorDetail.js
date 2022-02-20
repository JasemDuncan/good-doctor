import React from 'react';
import PropTypes from 'prop-types';
import SideBar from '../components/SideBar';
import dots from '../components/dots.png';
import doctorImg from './m.png';

const DoctorDetail = (props) => {
    const { doctor } = props;
    return (
        <>
            <SideBar />
            <div className='col-10 latestModelsDetails'>
                <div className='titleContainerDetails'>
                    <div className='imgDoctorDetail'>
                        <img src={doctorImg} alt="Doctor" />
                    </div>
                    <div className='doctorsDetails'>
                        <div className='titleDoctorsDetails'>
                            LATEST DOCTORS
                        </div>
                        <div className='titleDoctorsDescription'>
                            Please select a Doctor
                        </div>
                        <div>
                            <img src={dots} />
                        </div>
                    </div>
                </div>
                <div className='listDoctors'>
                    <div>
                        {doctor.name}
                    </div>
                </div>
            </div>

        </>

    );
}

DoctorDetail.propTypes = {
    doctor: PropTypes.instanceOf(Object).isRequired,
};

export default DoctorDetail;