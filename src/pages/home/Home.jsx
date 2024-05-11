import React, { useEffect, useState } from 'react';
import Slider from '../../components/slider/Slider';
import ServicesCard from '../../components/servicesCard/ServicesCard';
import axios from 'axios';
import Button from '../../components/button/Button';
import { Link } from 'react-router-dom';

const Home = () => {
    const [allServices, setAllServices] = useState([]);
    useEffect(() => {
        axios.get('https://househelphub.vercel.app/all-services')
            .then(res => setAllServices(res.data))
    }, [])
    return (
        <div>
            {/* --------Banner hare------------ */}
            <Slider />


            {/* --------------Services Card here----------------- */}

            <div className='mt-20 px-5'>
                <div className='flex items-center justify-center gap-7'>
                    <img className='w-[25%] md:w-auto' src="https://renovation.thememove.com/data/images/services_page_title.png" alt="" />
                    <div className='w-3/4 md:w-1/2 text-center'>
                        <h2 className='text-4xl md:text-5xl lg:text-7xl font-rancho text-green-500 '>Professional Services </h2>
                        <p className='text-xs md:text-base '>Every home owner has a list of renovation, home repair, or home improvement projects he or she needs done both interior and exterior. Sometimes that list can get quite long, too! The bathrooms that needs updating.</p>
                    </div>
                </div>

                {/* -------------------Card-------- */}

                {
                    !allServices ? <div className='flex justify-center items-center'><span className="loading loading-spinner text-warning"></span></div> :
                        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  mt-20'>
                            {
                                allServices.map(services => <ServicesCard key={services._id} services={services} />)
                            }

                        </div>
                }
            </div>

            {/* ---------------See all services------------------ */}
            <div className='flex justify-center items-center mt-10'>
                <Link to={"/all-services"}>
                    <Button btnName={"See all Services"} />
                </Link>
            </div>
        </div>
    );
};

export default Home;