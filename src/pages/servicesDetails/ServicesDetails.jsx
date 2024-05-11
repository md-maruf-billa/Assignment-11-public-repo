import React, { useContext } from 'react';
import { FaCalendarDays, FaLocationDot } from 'react-icons/fa6';
import { useLoaderData } from 'react-router-dom';
import { CiClock2 } from "react-icons/ci";
import Button from '../../components/button/Button';
import { userDataContext } from '../../providers/userAuthProvider/UserAuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
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

        const allBookingData = { photoURL, serviceName, serviceProviderName, serviceProviderEmail, customerName, customerEmail, price, bookingDate, description,status };

        axios.post("http://localhost:7000/post-booking", allBookingData)
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
            <header class="bg-white dark:bg-gray-900">
                <div class="lg:flex">
                    <div class="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
                        <div class="max-w-xl">
                            <h2 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">{serviceName}</h2>

                            <p class="mt-4 text-sm text-justify text-gray-500 dark:text-gray-400 lg:text-base">{description}</p>

                            <div class="mt-6 space-y-3">


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

                    <div class="w-full h-64 lg:w-1/2 lg:h-auto">
                        <div class="w-full h-full bg-cover" style={{ backgroundImage: `url(${photoURL})` }}>
                            <div class="w-full h-full bg-black opacity-25"></div>
                        </div>
                    </div>
                </div>
            </header>
            <div class="bg-white dark:bg-gray-900 mt-20">
                <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Pricing Plan</h1>

                <p class="max-w-2xl mx-auto mt-4 text-center text-gray-500 xl:mt-6 dark:text-gray-300">
                    Wire offers flexible pricing plans to suit your needs: Basic for individuals and small teams, Pro for advanced features, and Enterprise for customized solutions. With transparent pricing and no hidden fees, Wire ensures value in seamless communication. Choose Wire for secure collaboration without compromise.
                </p>
                <div class="container px-6 py-8 mx-auto">
                    <div class="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0">
                        <div class="flex flex-col cursor-not-allowed w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-900 dark:border-gray-700">
                            <div class="flex-shrink-0">
                                <h2 class="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-green-500 uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
                                    Casual
                                </h2>
                            </div>

                            <div class="flex-shrink-0">
                                <span class="pt-2 text-3xl font-bold text-gray-800 uppercase dark:text-gray-100">
                                    Not available
                                </span>
                            </div>

                            <ul class="flex-1 space-y-4">
                                <li class="text-gray-500 dark:text-gray-400">
                                    <p className='flex items-center gap-2'><FaLocationDot className='text-green-600' />Location:</p>
                                </li>

                                <li class="text-gray-500 dark:text-gray-400">
                                    <p className='flex items-center gap-2'><CiClock2 className='text-green-600' />Working Hour:</p>

                                </li>

                                <li class="text-gray-500 dark:text-gray-400">
                                    <p className='flex items-center gap-2'><FaCalendarDays className='text-green-600' />Finish Work At:</p>
                                </li>
                            </ul>

                            <button class="btn-disabled inline-flex items-center justify-center px-4 py-2 font-medium text-white uppercase transition-colors bg-gray-500  rounded-lg hover:bg-blue-700 focus:outline-none">
                                Booked Service
                            </button>
                        </div>
                        <div class="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-900 dark:border-gray-700">
                            <div class="flex-shrink-0">
                                <h2 class="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-green-500 uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
                                    Expert
                                </h2>
                            </div>

                            <div class="flex-shrink-0">
                                <span class="pt-2 text-3xl font-bold text-gray-800 uppercase dark:text-gray-100">
                                    ${price}
                                </span>

                                <span class="text-gray-500 dark:text-gray-400">
                                    /project
                                </span>
                            </div>

                            <ul class="flex-1 space-y-4">
                                <li class="text-gray-500 dark:text-gray-400">
                                    <p className='flex items-center gap-2'><FaLocationDot className='text-green-600' />Location: <span className='text-green-600 font-bold'>{serviceArea}</span></p>
                                </li>

                                <li class="text-gray-500 dark:text-gray-400">
                                    <p className='flex items-center gap-2'><CiClock2 className='text-green-600' />Working Hour: 8 hour /day</p>

                                </li>

                                <li class="text-gray-500 dark:text-gray-400">
                                    <p className='flex items-center gap-2'><FaCalendarDays className='text-green-600' />Finish Work At: Around 7 days</p>
                                </li>
                            </ul>

                            <button
                                onClick={() => document.getElementById('my_modal_1').showModal()}
                                class="inline-flex items-center justify-center px-4 py-2 font-medium text-white uppercase transition-colors bg-green-500 rounded-lg hover:bg-green-700 focus:outline-none">
                                Booked Service
                            </button>
                        </div>

                        <div class="flex flex-col cursor-not-allowed  w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-900 dark:border-gray-700">
                            <div class="flex-shrink-0">
                                <h2 class="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-green-500 uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
                                    Professional
                                </h2>
                            </div>

                            <div class="flex-shrink-0">
                                <span class="pt-2 text-3xl font-bold text-gray-800 uppercase dark:text-gray-100">
                                    Not available
                                </span>


                            </div>

                            <ul class="flex-1 space-y-4">
                                <li class="text-gray-500 dark:text-gray-400">
                                    <p className='flex items-center gap-2'><FaLocationDot className='text-green-600' />Location:</p>
                                </li>

                                <li class="text-gray-500 dark:text-gray-400">
                                    <p className='flex items-center gap-2'><CiClock2 className='text-green-600' />Working Hour:</p>

                                </li>

                                <li class="text-gray-500 dark:text-gray-400">
                                    <p className='flex items-center gap-2'><FaCalendarDays className='text-green-600' />Finish Work At:</p>
                                </li>
                            </ul>

                            <button class="inline-flex btn-disabled items-center justify-center px-4 py-2 font-medium text-white uppercase transition-colors bg-gray-500 rounded-lg hover:bg-blue-700 focus:outline-none">
                                Booked Service
                            </button>
                        </div>


                    </div>
                </div>
            </div>
            {/* ---------------Start Modal hare-----for booking a service--------- */}

            <dialog id="my_modal_1" className="modal">
                <div className="modal-box border-2 bg-white border-green-500">
                    <section className=" p-6 mx-auto bg-white rounded-md ">
                        <h2 className="text-3xl md:text-6xl font-semibold text-green-500 capitalize dark:text-white font-rancho text-center">Booking Service</h2>

                        <form onSubmit={handelBookService} className='mt-10'>
                            <div className="md:grid lg:grid-cols-2 space-y-3 md:space-y-0 gap-6 mt-4">

                                <div>
                                    <label className="text-gray-700  " htmlFor="username">Image URL</label>
                                    <input required name="photoURL" defaultValue={photoURL} disabled type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>

                                <div>
                                    <label className="text-gray-700  " htmlFor="emailAddress">Service Name</label>
                                    <input required name="serviceName" defaultValue={serviceName} disabled type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>




                                <div>
                                    <label className="text-gray-700  " htmlFor="Service Area">Service Provider Name</label>
                                    <input required name="serviceProviderName" defaultValue={providerName} disabled type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                                <div>
                                    <label className="text-gray-700  " htmlFor="Service Area">Service Provider Email</label>
                                    <input required name="serviceProviderEmail" defaultValue={providerEmail} disabled type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                                <div>
                                    <label className="text-gray-700  " htmlFor="Service Area">Customer Name</label>
                                    <input required name="customerName" defaultValue={currentUser?.displayName} disabled type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                                <div>
                                    <label className="text-gray-700  " htmlFor="Service Area">Customer Email</label>
                                    <input required name="customerEmail" defaultValue={currentUser?.email} disabled type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                                <div>
                                    <label className="text-gray-700  " htmlFor="password">Price</label>
                                    <input required name="price" defaultValue={price} disabled type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                                <div>
                                    <label className="text-gray-700  " htmlFor="Service Area">Booking Date</label>
                                    <input

                                        required name="bookingDate" type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                                <div className='col-span-2'>
                                    <label className="text-gray-700  " htmlFor="passwordConfirmation">Booking instruction</label>
                                    <textarea required
                                        name='description'
                                        rows="3"
                                        placeholder='Write your booking instruction ex: exact location etc' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                            </div>
                            {/* ------------ACTION BUTTON------------ */}
                            <div className="flex justify-between mt-5">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-error btn-outline">Cancel</button>
                                </form>
                                <div>
                                    <button><Button btnName={"Booking Now"} /></button>
                                </div>
                            </div>
                        </form>

                    </section>

                </div>
            </dialog>
        </div>
    );
};

export default ServicesDetails;