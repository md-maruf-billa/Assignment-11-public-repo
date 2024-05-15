import React, { useContext } from 'react';
import { FaCalendarDays, FaLocationDot } from 'react-icons/fa6';
import { useLoaderData } from 'react-router-dom';
import { CiClock2, CiCircleCheck } from "react-icons/ci";
import Button from '../../components/button/Button';
import { userDataContext } from '../../providers/userAuthProvider/UserAuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import { RxCrossCircled } from "react-icons/rx";

const ServicesDetails = () => {
    const { currentUser, setLoading } = useContext(userDataContext);
    const data = useLoaderData();
    const { _id, photoURL, serviceName, price, serviceArea, description, providerPhoto, providerEmail, providerName } = data;


    const handelBookService = (e) => {
        e.preventDefault();
        const currentDataForm = e.target;
        const photoURL = currentDataForm.photoURL.defaultValue;
        const serviceName = currentDataForm.serviceName.defaultValue;
        const serviceProviderName = currentDataForm.serviceProviderName.defaultValue;
        const serviceProviderEmail = currentDataForm.serviceProviderEmail.defaultValue;
        const customerName = currentDataForm.customerName.defaultValue;
        const customerEmail = currentDataForm.customerEmail.defaultValue;
        const price = currentDataForm.price.defaultValue;
        const bookingDate = currentDataForm.bookingDate.value;
        const description = currentDataForm.description.value;
        const status = "pending"

        const allBookingData = { serviceId: _id, photoURL, serviceName, serviceProviderName, serviceProviderEmail, customerName, customerEmail, price, bookingDate, description, status };

        axios.post(import.meta.env.VITE_API_URL + "/post-booking", allBookingData)
            .then(res => {
                Swal.fire({
                    title: "Congratulation",
                    text: "Your Booking is Successfully saved!",
                    icon: "success"
                });
                setLoading(true)

            }).catch(err => {
                Swal.fire({
                    title: "Opps",
                    text: "Booking save failed something went wrong",
                    icon: "error"
                });
            })
    }

    return (
        <div className='container mx-auto min-h-[calc(100vh-112px)] mt-28'>
            <header >
                <div className="lg:flex">
                    <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
                        <div className="max-w-xl">
                            <h2 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">{serviceName}</h2>

                            <p className="mt-4 text-sm text-justify text-gray-500 dark:text-gray-400 lg:text-base">{description}</p>

                            <div className="mt-6 space-y-3">


                                <p className='font-rancho uppercase text-green-500'>Author-:</p>

                                <div className='flex items-center gap-5'>
                                    <img className='rounded-full size-[60px]' src={providerPhoto} alt="" />
                                    <div>
                                        <p><span className='font-bold'>Name:</span> {providerName}</p>
                                        <p><span className='font-bold'>E-mail:</span> {providerEmail}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-64 lg:w-1/2 lg:h-auto">
                        <div className="w-full h-full bg-cover" style={{ backgroundImage: `url(${photoURL})` }}>
                            <div className="w-full h-full bg-black opacity-25"></div>
                        </div>
                    </div>
                </div>
            </header>
            <div className=" mt-20">
                <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Pricing Plan</h1>

                <p className="max-w-2xl mx-auto mt-4 text-center text-gray-500 xl:mt-6 dark:text-gray-300">
                    Wire offers flexible pricing plans to suit your needs: Basic for individuals and small teams, Pro for advanced features, and Enterprise for customized solutions. With transparent pricing and no hidden fees, Wire ensures value in seamless communication. Choose Wire for secure collaboration without compromise.
                </p>
                <div className="container px-6 py-8 mx-auto">
                    <div className="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0">
                        <div className="flex flex-col cursor-not-allowed w-full max-w-sm p-8 space-y-8 text-center  border-2 border-green-300 rounded-lg lg:mx-4 dark:bg-gray-900 dark:border-gray-700">
                            <div className="flex-shrink-0">
                                <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-green-500 uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
                                    Casual
                                </h2>
                            </div>

                            <div className="flex-shrink-0">
                                <span className="pt-2 text-3xl font-bold text-gray-800 uppercase dark:text-gray-100">
                                    Not available
                                </span>
                            </div>

                            <ul className="flex-1 space-y-4">
                                <li className="text-gray-500 dark:text-gray-400">
                                    <p className='flex items-center gap-2'><FaLocationDot className='text-green-600' />Location:</p>
                                </li>

                                <li className="text-gray-500 dark:text-gray-400">
                                    <p className='flex items-center gap-2'><CiClock2 className='text-green-600' />Working Hour:</p>

                                </li>

                                <li className="text-gray-500 dark:text-gray-400">
                                    <p className='flex items-center gap-2'><FaCalendarDays className='text-green-600' />Finish Work At:</p>
                                </li>
                            </ul>

                            <button className="btn-disabled inline-flex items-center justify-center px-4 py-2 font-medium text-white uppercase transition-colors bg-gray-500  rounded-lg hover:bg-blue-700 focus:outline-none">
                                Booked Service
                            </button>
                        </div>
                        <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center  border-2 hover:border-green-500 border-green-300 rounded-lg lg:mx-4 dark:bg-gray-900 dark:border-gray-700">
                            <div className="flex-shrink-0">
                                <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-green-500 uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
                                    Expert
                                </h2>
                            </div>

                            <div className="flex-shrink-0">
                                <span className="pt-2 text-3xl font-bold text-gray-800 uppercase dark:text-gray-100">
                                    ${price}
                                </span>

                                <span className="text-gray-500 dark:text-gray-400">
                                    /project
                                </span>
                            </div>

                            <ul className="flex-1 space-y-4">
                                <li className="text-gray-500 dark:text-gray-400">
                                    <p className='flex items-center gap-2'><FaLocationDot className='text-green-600' />Location: <span className='text-green-600 font-bold'>{serviceArea}</span></p>
                                </li>

                                <li className="text-gray-500 dark:text-gray-400">
                                    <p className='flex items-center gap-2'><CiClock2 className='text-green-600' />Working Hour: 8 hour /day</p>

                                </li>

                                <li className="text-gray-500 dark:text-gray-400">
                                    <p className='flex items-center gap-2'><FaCalendarDays className='text-green-600' />Finish Work At: Around 7 days</p>
                                </li>
                            </ul>

                            <button
                                onClick={() => document.getElementById('my_modal_1').showModal()}
                                className="inline-flex items-center justify-center px-4 py-2 font-medium text-white uppercase transition-colors bg-green-500 rounded-lg hover:bg-green-700 focus:outline-none">
                                Booked Service
                            </button>
                        </div>

                        <div className="flex flex-col cursor-not-allowed  w-full max-w-sm p-8 space-y-8 text-center  border-2 border-green-300 rounded-lg lg:mx-4 dark:bg-gray-900 dark:border-gray-700">
                            <div className="flex-shrink-0">
                                <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-green-500 uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
                                    Professional
                                </h2>
                            </div>

                            <div className="flex-shrink-0">
                                <span className="pt-2 text-3xl font-bold text-gray-800 uppercase dark:text-gray-100">
                                    Not available
                                </span>


                            </div>

                            <ul className="flex-1 space-y-4">
                                <li className="text-gray-500 dark:text-gray-400">
                                    <p className='flex items-center gap-2'><FaLocationDot className='text-green-600' />Location:</p>
                                </li>

                                <li className="text-gray-500 dark:text-gray-400">
                                    <p className='flex items-center gap-2'><CiClock2 className='text-green-600' />Working Hour:</p>

                                </li>

                                <li className="text-gray-500 dark:text-gray-400">
                                    <p className='flex items-center gap-2'><FaCalendarDays className='text-green-600' />Finish Work At:</p>
                                </li>
                            </ul>

                            <button className="inline-flex btn-disabled items-center justify-center px-4 py-2 font-medium text-white uppercase transition-colors bg-gray-500 rounded-lg hover:bg-blue-700 focus:outline-none">
                                Booked Service
                            </button>
                        </div>


                    </div>
                </div>
            </div>
            {/* ---------------Start Modal hare-----for booking a service--------- */}

            <dialog id="my_modal_1" className="modal ">
                <div className="modal-box border-2  border-green-500 w-[1000px]">
                    <section className=" p-6 mx-auto  rounded-md ">
                        <h2 className="text-3xl md:text-6xl font-semibold text-green-500 capitalize dark:text-white font-rancho text-center">Booking Service</h2>

                        <form onSubmit={handelBookService} className='mt-10'>
                            <div className="md:grid lg:grid-cols-2 space-y-3 md:space-y-0 gap-5 mt-4">

                                <div>
                                    <span className='relative'><label className="text-gray-700  " htmlFor="username">Image URL</label> <RxCrossCircled className='absolute bottom-3 -right-4 text-red-600 text-xs' /></span>
                                    <input required name="photoURL" defaultValue={photoURL} disabled type="text" className="block w-full px-4 py-2 mt-2 text-gray-400  border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />

                                </div>

                                <div>
                                    <span className='relative'><label className="text-gray-700  " htmlFor="username">Service Name</label> <RxCrossCircled className='absolute bottom-3 -right-4 text-red-600 text-xs' /></span>

                                    <input required name="serviceName" defaultValue={serviceName} disabled type="text" className="block w-full px-4 py-2 mt-2 text-gray-400 border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>




                                <div>
                                    <span className='relative'><label className="text-gray-700  " htmlFor="username">Service Author</label> <RxCrossCircled className='absolute bottom-3 -right-4 text-red-600 text-xs' /></span>
                                    <input required name="serviceProviderName" defaultValue={providerName} disabled type="text" className="block w-full px-4 py-2 mt-2 text-gray-400 border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                                <div>
                                    <span className='relative'><label className="text-gray-700  " htmlFor="username">Author Email</label> <RxCrossCircled className='absolute bottom-3 -right-4 text-red-600 text-xs' /></span>
                                    <input required name="serviceProviderEmail" defaultValue={providerEmail} disabled type="text" className="block w-full px-4 py-2 mt-2 text-gray-400 border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                                <div>
                                    <span className='relative'><label className="text-gray-700  " htmlFor="username">Customer Name</label> <RxCrossCircled className='absolute bottom-3 -right-4 text-red-600 text-xs' /></span>
                                    <input required name="customerName" defaultValue={currentUser?.displayName} disabled type="text" className="block w-full px-4 py-2 mt-2 text-gray-400 border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                                <div>
                                    <span className='relative'><label className="text-gray-700  " htmlFor="username">Customer Email</label> <RxCrossCircled className='absolute bottom-3 -right-4 text-red-600 text-xs' /></span>
                                    <input required name="customerEmail" defaultValue={currentUser?.email} disabled type="text" className="block w-full px-4 py-2 mt-2 text-gray-400 border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                                <div>
                                    <span className='relative'><label className="text-gray-700  " htmlFor="username">Price</label> <RxCrossCircled className='absolute bottom-3 -right-4 text-red-600 text-xs' /></span>
                                    <input required name="price" defaultValue={price} disabled type="text" className="block w-full px-4 py-2 mt-2 text-gray-400 border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                                <div>
                                    <span className='relative'><label className="text-gray-700  " htmlFor="username">Booking Date</label> <CiCircleCheck className='absolute bottom-3 -right-4 text-green-800  text-xs' /></span>
                                    <input

                                        required name="bookingDate" type="date" className="block w-full px-4 py-2 mt-2 text-gray-600 border-gray-200 rounded-md dark:bg-gray-800  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                                <div className='col-span-2'>
                                    <span className='relative'><label className="text-gray-700  " htmlFor="username">Booking instruction</label> <CiCircleCheck className='absolute bottom-3 -right-4 text-green-800  text-xs' /></span>
                                    <textarea required
                                        name='description'
                                        rows="3"
                                        placeholder='Write your booking instruction ex: exact location etc' type="text" className="block w-full px-4 py-2 mt-2 text-gray-600 border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                            </div>
                            {/* ------------ACTION BUTTON------------ */}
                            <div className="flex justify-between mt-5">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-error btn-outline">Cancel</button>
                                </form>
                                <div>
                                    <button type='submit'><Button btnName={"Booking Now"} /></button>
                                </div>
                            </div>
                        </form>

                        <div className='flex gap-10 items-center justify-center mt-4'>
                            <small className='flex items-center gap-2'><CiCircleCheck className='text-green-800' /> You can edit it</small>
                            <small className='flex items-center gap-2'><RxCrossCircled className='text-red-600' /> You can't edit it</small>
                        </div>
                    </section>
                        <p className='text-center text-xs'>Press Esc to close it.</p>

                </div>
            </dialog>
        </div>
    );
};

export default ServicesDetails;