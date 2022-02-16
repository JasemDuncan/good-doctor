import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import doctor from './m.png';
import facebook from './f.png';
import twitter from './t.png';
import instagram from './i.png';
import dots from './dots.png';
import { getDoctors } from '../redux/doctors/doctors';


const BootstrapCarousel=() => {
    //for Doctors
    const dispatch= useDispatch();
    const doctors = useSelector((state)=> state.doctorsReducer);
    useEffect(()=>{
        if(doctors.length==0) dispatch(getDoctors());
    });
    return (
        <div>
            <Carousel variant="dark">
                <Carousel.Item className='carousel-inner'>
                    <div className='containerCarousel'>
                        <div className='doctorBanner'>
                            <div>
                                <img src={doctor} alt="Doctor" />
                            </div>                            
                            <div className='nameDoctor'> VESPA C20</div>
                            <div>
                                <img src={dots}/>
                            </div>
                            <div className='descriptionDoctor'>
                            The VESPA C20 is a stunning moped with a modern electonic system and more.
                            </div>
                            <div>
                                <img src={facebook}/>
                                <img src={twitter} />
                                <img src={instagram} />
                            </div> 
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item className='carousel-inner'>
                    <div className='containerCarousel'>
                        <div className='doctorBanner'>
                            <div>
                                <img src={doctor} alt="Doctor" />
                            </div>                            
                            <div className='nameDoctor'> VESPA C20</div>
                            {
                                doctors.map((item)=> {
                                    return(
                                        <div key={item.id}> {item.name}</div>
                                    );
                                })
                            }
                            <div>
                                <img src={dots}/>
                            </div>
                            <div className='descriptionDoctor'>
                            The VESPA C20 is a stunning moped with a modern electonic system and more.
                            </div>
                            <div>
                                <img src={facebook}/>
                                <img src={twitter} />
                                <img src={instagram} />
                            </div> 
                        </div>
                    </div>
                </Carousel.Item>                
            </Carousel>
        </div>
    )
}

export default BootstrapCarousel;