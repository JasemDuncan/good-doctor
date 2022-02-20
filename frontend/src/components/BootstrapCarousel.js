import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import doctor from './m.png';
import facebook from './f.png';
import twitter from './t.png';
import instagram from './i.png';
import dots from './dots.png';
import { getDoctors } from '../redux/doctors/doctors';
import { Link } from 'react-router-dom';


const BootstrapCarousel = () => {
    //for Doctors
    const dispatch = useDispatch();
    const doctors = useSelector((state) => state.doctorsReducer);
    useEffect(() => {
        if (doctors.length == 0) dispatch(getDoctors());
    });

    let CarouselItems = [];
    const LogitudPedazos = 3;
    for (let i = 0; i < doctors.length; i += LogitudPedazos) {
        let Pedazo = doctors.slice(i, i + LogitudPedazos);
        CarouselItems.push(Pedazo);
    }
 
    return (
        <div>
            {
                <Carousel variant="dark">
                    {
                        CarouselItems.map((item) => {
                            return (
                                <Carousel.Item className='carousel-inner' key={item}>
                                    <div className='containerCarousel'>
                                        {
                                            item.map((i) => {
                                                const path = i.id;
                                                return (

                                                    <Link className='doctorBanner' key={i.id} to={`/${path}`}>
                                                        <div>
                                                            <img src={doctor} alt="Doctor" />
                                                        </div>
                                                        <div className='nameDoctor' > {i.name}</div>
                                                        <div>
                                                            <img src={dots} />
                                                        </div>
                                                        <div className='descriptionDoctor'>
                                                            {i.specialization}
                                                        </div>
                                                        <div>
                                                            <img src={facebook} />
                                                            <img src={twitter} />
                                                            <img src={instagram} />
                                                        </div>
                                                    </Link>
                                                )
                                            })
                                        }
                                    </div>
                                </Carousel.Item>

                            )
                        })
                    }
                </Carousel>


            }







        </div>
    )
}

export default BootstrapCarousel;