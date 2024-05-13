import React, { useEffect, useState } from 'react';
import Button from '../button/Button';
import { Link } from 'react-router-dom';

const ServicesCard = ({ services }) => {
    const [hover, setHover] = useState(false);
    const { _id,photoURL, serviceName, price, serviceArea, description, providerPhoto, providerEmail, providerName } = services;
    const mouseOverEvent = (e) => {
        setHover(true);
    }
    const mouseOverEventOut =(e)=>{
        setHover(false)
    }
    return (

        <div
            onMouseOver={mouseOverEvent}
            onMouseOut={mouseOverEventOut}
            className="flex flex-col items-center justify-center w-full  mx-auto relative">
            <div className="w-full h-64 relative bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{ backgroundImage: `url(${photoURL})` }}>

                <div className="w-56 z-50 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800 absolute right-0 bottom-0">
                    <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{serviceName}</h3>

                    <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                        <span className="font-bold text-gray-800 dark:text-gray-200">${price}</span>
                        <Link
                            to={`/service-details/${_id}`}
                            className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">View Details</Link>

                    </div>

                </div>
            </div>
            <div className={`w-full h-full absolute top-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.5),rgba(0,0,0,0.7))] text-white rounded-lg p-4 ${hover ? 'block' : 'hidden'} `} >
                <div className='flex items-center gap-5'>
                    <img className='size-[60px] rounded-full'  src={providerPhoto} alt="" />
                    <div>
                        <h3><span className='font-bold'>Author Name:</span> {providerName}</h3>
                        <p><span className='font-bold'>Author Email:</span> {providerEmail}</p>
                    </div>
                </div>
                <p className='mt-2'>Description:</p>
                <p className='text-sm'>
                    {description.slice(0,200)}...
                </p>
            </div>

        </div>

    );
};

export default ServicesCard;