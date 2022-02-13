import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import doctor from './m.png';
import facebook from './f.png';
import twitter from './t.png';
import instagram from './i.png';




export default function BootstrapCarousel() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    {/* <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=First slide&bg=373940"
                        alt="First slide"
                    /> */}
                    <div className='containerCarousel'>
                        <div className='doctorBanner'>
                            <div>
                                <img src={doctor} alt="Doctor" />
                            </div>                            
                            <div> VESPA C20</div>
                            <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                            <div>
                                <img src={facebook}/>
                                <img src={twitter} />
                                <img src={instagram} />
                            </div> 
                        </div>
                    </div>
                    <Carousel.Caption>
                        {/* <h3>VESPA C20</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=282c34"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
            </Carousel>
        </div>
    )
}
