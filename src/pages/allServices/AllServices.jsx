import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from '../../components/button/Button';

const AllServices = () => {

    const allServices = useLoaderData();
    return (
        <div className='min-h-[calc(100vh-112px)] mt-28 container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5'>

                {
                    allServices.map(service =>
                        <div key={service._id} className="rounded-md shadow-md  dark:bg-gray-50 dark:text-gray-800">
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
                                <div className='flex justify-end mt-5'>
                                    <Link to={`/service-details/${service._id}`}>
                                        <Button btnName={"Details"}/>
                                    </Link>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default AllServices;