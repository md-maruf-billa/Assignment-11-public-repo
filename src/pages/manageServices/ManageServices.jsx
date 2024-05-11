import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { FaEye, FaPen } from 'react-icons/fa6';
import { MdDeleteForever } from "react-icons/md";
import { Link } from 'react-router-dom';
import { userDataContext } from '../../providers/userAuthProvider/UserAuthProvider';

const ManageServices = () => {
    const { currentUser } = useContext(userDataContext);
    const [services, setServices] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:7000/current-user-services?providerEmail=${currentUser?.email}`)
            .then(data => setServices(data.data))
    }, [])
    return (
        <div className='container mx-auto min-h-[100vh-112px] mt-28'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 px-4'>
                {
                    services.map(service =>
                        <div
                            // data-aos="zoom-in-up" data-aos-duration="1000"
                            key={service._id} className='border-green-500 border flex items-center justify-between p-3 md:px-12 md:py-8 rounded-md z-0'>
                            <div>
                                <img className='h-[150px] md:h-[200px] w-[130px] md:w-[190px] rounded-lg' src={service?.photoURL} alt="" />
                            </div>
                            <div className='text-xs md:text-base'>
                                <p><span className='font-semibold'>Service Name: </span><span className='font-rancho md:text-2xl text-green-500'>{service.serviceName}</span></p>
                                <p><span className='font-semibold'>Service Area: </span>{service.serviceArea}</p>
                                <p><span className='font-semibold'>Price: </span>{service.price} $</p>

                            </div>
                            <div className='*:cursor-pointer  *:size-[40px] *:flex justify-center items-center space-y-4 *:rounded-lg *:text-white'>
                                <Link  to={`/service-details/${service._id}`} className='p-3  border bg-green-800 cursor-pointer flex justify-center items-center'>

                                    <FaEye />

                                </Link>
                                <Link
                                    to={`/update-service/${service._id}`}
                                    className='p-3  border bg-green-500 cursor-pointer flex justify-center items-center'>
                                   
                                        <FaPen></FaPen>
                                    
                                </Link>
                                <div onClick={() => handelDelete()}
                                    className='p-3   border bg-[#EA4744] cursor-pointer flex justify-center items-center'>
                                    <MdDeleteForever />
                                </div>
                            </div>
                        </div>)
                }
            </div>

        </div>
    );
};

export default ManageServices;