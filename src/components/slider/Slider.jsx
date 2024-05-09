import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import Button from '../button/Button';

const Slider = () => {
    const [sliders, setSliders] = useState([]);
    useEffect(() => {
        fetch("./slider.json")
            .then(res => res.json())
            .then(data => setSliders(data))
    }, [])

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="min-h-screen"
            >

                {
                    sliders.map((slider, idx) =>
                        <SwiperSlide key={idx}>
                            <div className='h-screen bg-no-repeat bg-cover bg-center flex justify-center items-center flex-col gap-5' style={{
                                backgroundImage: `linear-gradient(360deg, rgba(0,0,0,0.2), rgba(0,0,0,0.7)),url(${slider.image})`
                            }} >
                                <h2 className='text-9xl text-green-500 font-rancho'>{slider.title}</h2>
                                <p className='text-3xl container text-white text-center'>{slider.des}</p>

                                <Link><Button btnName={"Order a consultation"}/></Link>
                            </div>
                        </SwiperSlide>)
                }
            </Swiper>
        </>
    );
};

export default Slider;