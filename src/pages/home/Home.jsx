import React, { useEffect, useState } from 'react';
import Slider from '../../components/slider/Slider';
import ServicesCard from '../../components/servicesCard/ServicesCard';
import axios from 'axios';
import Button from '../../components/button/Button';
import { Link } from 'react-router-dom';
import PageTitle from '../../components/pageTitle/PageTitle';
import { FaClock, FaFire, FaUsers } from 'react-icons/fa6';
import { SiHomeadvisor } from "react-icons/si";
import { HiMiniRocketLaunch } from "react-icons/hi2";
import { TbWheel } from "react-icons/tb";
import { GiFireworkRocket } from "react-icons/gi";
import { AiFillLike } from "react-icons/ai";
const Home = () => {
    const [allServices, setAllServices] = useState([]);
    const [tab, setTab] = useState(1);
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



            {/* -------------------About us section------ */}
            <div className='container mx-auto flex flex-col lg:flex-row gap-10 mt-20 px-4'>
                <div className='w-full lg:w-[60%]'>
                    <div className='border-l-4 border-green-500 px-3'>
                        <p>About Us</p>
                        <h2 className='text-4xl md:text-5xl lg:text-7xl font-rancho text-green-500'>Overview Mission and Client</h2>
                    </div>

                    {/* -----------tab----------- */}
                    <div className="flex my-8 overflow-x-auto overflow-y-hidden border-b border-gray-200 whitespace-nowrap dark:border-gray-700">
                        <button
                            onClick={() => setTab(1)}
                            className={`inline-flex items-center ${tab == 1 ? 'text-blue-600 border-b-2 border-blue-500' : 'text-gray-700'} h-10 px-4 -mb-px text-sm text-center  bg-transparent  sm:text-base dark:border-blue-400 dark:text-blue-300 whitespace-nowrap focus:outline-none`}>
                            Mission-1
                        </button>

                        <button
                            onClick={() => setTab(2)}
                            className={`inline-flex items-center ${tab == 2 ? 'text-blue-600 border-b-2 border-blue-500' : 'text-gray-700'} h-10 px-4 -mb-px text-sm text-center  bg-transparent  sm:text-base dark:border-blue-400 dark:text-blue-300 whitespace-nowrap focus:outline-none`}>
                            Mission-2
                        </button>

                        <button
                            onClick={() => setTab(3)}
                            className={`inline-flex items-center ${tab == 3 ? 'text-blue-600 border-b-2 border-blue-500' : 'text-gray-700'} h-10 px-4 -mb-px text-sm text-center  bg-transparent  sm:text-base dark:border-blue-400 dark:text-blue-300 whitespace-nowrap focus:outline-none`}>
                            Mission-3
                        </button>
                    </div>
                    <div className={`${tab == 1 ? 'block' : 'hidden'} flex flex-col md:flex-row items-center gap-10 px-4`}>
                        <div className='md:w-1/2'>
                            <img className='w-full' src="./mission1.jpg" alt="" />
                        </div>
                        <div className='space-y-2 md:w-1/2'>
                            <h4 className=' font-semibold text-xl'>01. Our Mission </h4>
                            <p className='text-xl'>Empowering Homes, Empowering Lives</p>
                            <ul className='list-disc'>
                                <li>Our mission at HouseHelpHub is to empower homes by providing access to reliable and convenient house-related services.</li>
                                <li>We aim to enhance the quality of life for individuals and families by offering a diverse range of services that cater to their everyday needs, ensuring a comfortable and harmonious living environment.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={`${tab == 2 ? 'block' : 'hidden'} flex flex-col md:flex-row items-center gap-10 px-4`}>
                    <div className='md:w-1/2'>
                            <img className='w-full' src="./mission2.png" alt="" />
                        </div>
                        <div className='space-y-2 md:w-1/2'>
                            <h4 className=' font-semibold text-xl'>02. Our Mission </h4>
                            <p className='text-xl'>Connecting Homes with Trusted Service Providers:</p>
                            <ul className='list-disc'>
                                <li>We are committed to connecting homeowners with trusted service providers who are skilled, professional, and reliable.</li>
                                <li>Our mission is to foster a community of trust and transparency, where homeowners can easily find and hire vetted professionals for various tasks, from cleaning and maintenance to repairs and renovations, ultimately simplifying their household management.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={`${tab == 3 ? 'block' : 'hidden'} flex flex-col md:flex-row items-center gap-10 px-4`}>
                        <div className='md:w-1/2'>
                            <img className='w-full' src="./mission3.jpg" alt="" />
                        </div>
                        <div className='space-y-2 md:w-1/2'>
                            <h4 className=' font-semibold text-xl'>03. Our Mission </h4>
                            <p className='text-xl'>Enabling Seamless Home Management:</p>
                            <ul className='list-disc'>
                                <li>At HouseHelpHub, our mission is to streamline the process of home management by providing a comprehensive platform for accessing a wide array of house-related services.</li>
                                <li>We strive to make it easy for homeowners to find, book, and manage services online, leveraging technology to simplify tasks and optimize efficiency.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='bg-white shadow-lg  lg:w-[30%] rounded-lg'>
                    <div className='bg-green-500 py-5'>
                        <h3 className='text-3xl text-center font-semibold text-white'>Our Company</h3>
                    </div>
                    <div className='flex flex-col p-8 gap-5'>
                        <div className='flex items-center gap-3 border-b py-1'>
                            <FaUsers className='text-6xl rounded-full p-4 text-white bg-[#fc6e5a]' />
                            <div>
                                <h3 className='text-2xl font-semibold'>800</h3>
                                <p>SERVICE TECHNICIANS</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 border-b py-1'>
                            <GiFireworkRocket className='text-6xl rounded-full p-4 text-white bg-[#3caee0]' />
                            <div>
                                <h3 className='text-2xl font-semibold'>500</h3>
                                <p>REPAIRS IN 12 MONTHS</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 border-b py-1'>
                            <FaClock className='text-6xl rounded-full p-4 text-white bg-[#8dbf66]' />
                            <div>
                                <h3 className='text-2xl font-semibold'>10</h3>
                                <p>YEARS EXPERIENCE</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 border-b'>
                            <AiFillLike className='text-6xl rounded-full p-4 text-white bg-[#fbcb5f]' />
                            <div>
                                <h3 className='text-2xl font-semibold'>1200</h3>
                                <p>HAPPY CUSTOMER</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;