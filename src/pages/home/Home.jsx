import React, { useEffect, useState } from 'react';
import Slider from '../../components/slider/Slider';
import ServicesCard from '../../components/servicesCard/ServicesCard';
import axios from 'axios';
import Button from '../../components/button/Button';
import { Link } from 'react-router-dom';
import PageTitle from '../../components/pageTitle/PageTitle';
import { FaFire } from 'react-icons/fa6';
import { SiHomeadvisor } from "react-icons/si";
import { HiMiniRocketLaunch } from "react-icons/hi2";
import { TbWheel } from "react-icons/tb";
const Home = () => {
    const [allServices, setAllServices] = useState([]);
    useEffect(() => {
        axios.get(import.meta.env.VITE_API_URL + '/all-services')
            .then(res => setAllServices(res.data))
    }, [])

    return (
        <div>
            <PageTitle pgTitle={"Home"} />
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
                    allServices.length == 0 ? <div className='flex justify-center items-center'><span className="loading loading-spinner text-warning"></span></div> :
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


            {/* -----------------Help section---------- */}
            <div className='container mx-auto mt-20 px-4'>
                <h3 className='text-4xl md:text-5xl lg:text-7xl font-rancho text-green-500 text-center'>What Can We Help You With?</h3>

                <div className='flex flex-col md:flex-row items-center justify-between text-center gap-10 mt-8'>
                    <div className='space-y-20'>
                        <div className='flex flex-col items-center justify-center gap-2'>
                            <FaFire className='text-red-600 text-7xl p-4 border rounded-full bg-[#ffe2db]' />
                            <h4 className='text-xl font-semibold'>Energy</h4>
                            <p>See our energy products and services available to you.</p>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-2'>
                            <SiHomeadvisor className='text-[#3fd2a8] text-7xl p-4 border rounded-full bg-[#e5faf5]' />
                            <h4 className='text-xl font-semibold'>Home Services</h4>
                            <p>Protect your boiler, heating, appliances, electricals, plumbing and drains.</p>
                        </div>
                    </div>
                    <div>
                        <img src="./service.png" alt="" />
                    </div>
                    <div className='space-y-20'>
                        <div className='flex flex-col items-center justify-center gap-2'>
                            <HiMiniRocketLaunch className='text-[#597ef0] text-7xl p-4 border rounded-full bg-[#eaf0fe]' />
                            <h4 className='text-xl font-semibold'>Smart Homes</h4>
                            <p>Enjoy the benefits of smart meters and find out more about smart products.</p>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-2'>
                            <TbWheel className='text-[#3fd2a8] text-7xl p-4 border rounded-full bg-[#e5faf5]' />
                            <h4 className='text-xl font-semibold'>Help & Support</h4>
                            <p>Choose a category to find the best way to contact us.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;