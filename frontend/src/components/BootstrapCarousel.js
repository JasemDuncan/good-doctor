import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import doctor from './m.png';
import facebook from './f.png';
import twitter from './t.png';
import instagram from './i.png';
import dots from './dots.png';
import { getDoctors } from '../redux/doctors/doctors';


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

    console.log("begin");
    console.log(CarouselItems);

    for (let i = 0; i < CarouselItems.length; i++) {
        console.log("Carousel");
        console.log(CarouselItems[i]);
        for (let j = 0; j < CarouselItems[i].length; j++) {
            console.log("CarouselItem");
            console.log(CarouselItems[i][j].name);
        }
    }
    if (doctors.length > 0) {
        console.log(doctors)
    }
    console.log("end");

    function createCarousel() {
        console.log("bing function");
        CarouselItems.map((item) => {


            // for (let i = 0; i < CarouselItems.length; i++) {
            item.map((i) => {
                <div>duncan</div>
                console.log(i.name);
            });
            console.log(item[0]);
            console.log(item);
            // for (let j = 0; j < CarouselItems[i].length; j++) {
            <Carousel variant="dark">
                <Carousel.Item className='carousel-inner'>
                    <div className='containerCarousel'>
                        {/* {CarouselItems[i][j].name} */}
                        {console.log("jasem")}
                    </div>
                </Carousel.Item>
            </Carousel>
            // }

            // }

        });
        console.log("end function");
    }

    return (
        <div>
            {/* <Carousel variant="dark">
                <Carousel.Item className='carousel-inner'>
                    <div className='containerCarousel'>
                        {
                            doctors.map((item) => {
                                return (
                                    <div className='doctorBanner' key={item.id}>
                                        <div>
                                            <img src={doctor} alt="Doctor" />
                                        </div>
                                        <div className='nameDoctor' > {item.name}</div>
                                        <div>
                                            <img src={dots} />
                                        </div>
                                        <div className='descriptionDoctor'>
                                            {item.specialization}
                                        </div>
                                        <div>
                                            <img src={facebook} />
                                            <img src={twitter} />
                                            <img src={instagram} />
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </Carousel.Item>
             </Carousel> */
                <Carousel variant="dark">
                    {
                        CarouselItems.map((item) => {
                            return (
                                <Carousel.Item className='carousel-inner'>
                                    <div className='containerCarousel'>
                                        {
                                            item.map((i) => {
                                                return (

                                                    <div className='doctorBanner' key={i.id}>
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
                                                    </div>
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