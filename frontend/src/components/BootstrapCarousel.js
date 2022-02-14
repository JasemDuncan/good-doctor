import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import doctor from './m.png';
import facebook from './f.png';
import twitter from './t.png';
import instagram from './i.png';
import dots from './dots.png';



export default function BootstrapCarousel() {
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
