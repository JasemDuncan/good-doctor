import React from 'react';
import PropTypes from 'prop-types';

const DoctorDetail = (props) => {
    const { doctor }=props;
    return (
        <div>
            {doctor.name}
        </div>
    );
}

DoctorDetail.propTypes = {
    doctor: PropTypes.instanceOf(Object).isRequired,
};

export default DoctorDetail;