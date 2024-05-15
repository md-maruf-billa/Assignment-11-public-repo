import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from '../../components/button/Button';
import { FaLocationDot } from 'react-icons/fa6';
import { BsCurrencyDollar } from "react-icons/bs";
import PageTitle from '../../components/pageTitle/PageTitle';
import Lottie from 'lottie-react';
import noData from '../../assets/animation/noData.json';
import axios from 'axios';
const AllServices = () => {
    const [displayService , setDisplayServices] = useState([]);
    const allServices = useLoaderData();
    const totalData = allServices.length;
    const [dataParPage, setDataParPage] = useState(6);
    const totalPage = Math.ceil(totalData / dataParPage);
    const [currentPage , setCurrentPage] = useState(1);
    const pages = [];
    for (let i = 0; i < totalPage; i++) {
        pages.push(i + 1)
    }

    useEffect(()=>{
        axios.get(import.meta.env.VITE_API_URL+`/all-services?size=${dataParPage}&page=${currentPage-1}`)
        .then(data =>{
            setDisplayServices(data.data);
        })
    },[dataParPage,currentPage])
    //--------------------Handel Pagination ----------------

    return (
        <div className='min-h-[calc(100vh-112px)] mt-28 container mx-auto'>
            <PageTitle pgTitle={"All Service"} />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5'>

                {
                    allServices.length === 0 ? <div className='flex justify-center items-center flex-col'>
                        <Lottie className='h-[70vh]' animationData={noData}></Lottie>
                        <p className='text-3xl font-rancho text-green-500'>No Data Available</p>
                    </div> :
                        <>
                            {
                                displayService.map(service =>
                                    <div key={service._id} className="rounded-md shadow-md border  dark:bg-gray-50 dark:text-gray-800">
                                        <div className="flex items-center justify-between p-3">
                                            <div className="flex items-center space-x-2">
                                                <img src={service.providerPhoto} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300" />
                                                <div className="-space-y-1">
                                                    <h2 className="text-sm font-semibold leading-none">{service.providerName}</h2>
                                                    <span className="inline-block text-xs leading-none dark:text-gray-600">{service.providerEmail}</span>
                                                </div>
                                            </div>

                                        </div>
                                        <img src={service.photoURL} alt="" className="object-cover object-center w-full h-72 dark:bg-gray-500" />
                                        <div className="p-3">

                                            <div className="space-y-3">
                                                <h3 className='text-2xl font-semibold'>{service.serviceName}</h3>
                                                <p className="text-sm">
                                                    {service.description.slice(0, 200)} ...
                                                </p>
                                            </div>
                                            <div className='flex justify-between items-center mt-5'>
                                                <p className='flex items-center gap-2'><FaLocationDot className='text-red-500' /> {service.serviceArea}</p>
                                                <p className='flex items-center gap-1 font-semibold'><span>Price:</span> {service.price}<BsCurrencyDollar /> </p>
                                                <Link to={`/service-details/${service._id}`}>
                                                    <Button btnName={"Details"} />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>)
                            }
                        </>
                }
            </div>
            <div className='flex justify-center items-center mt-10 gap-5'>
                <div className="join">
                    {
                        pages.map(pg => <button
                            onClick={()=> setCurrentPage(pg)}
                            className={`join-item btn btn-square ${currentPage == pg ? "btn-secondary":""}`} 
                            
                            >{pg}</button>)
                    }

                </div>
                <select onChange={(e) => {setDataParPage(e.target.value), setCurrentPage(1)}} className="select select-bordered">
                    <option disabled selected>Par Page</option>
                    <option>6</option>
                    <option>9</option>
                    <option>12</option>
                    <option>20</option>
                </select>

            </div>
        </div>
    );
};

export default AllServices;