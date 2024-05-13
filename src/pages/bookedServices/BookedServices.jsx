import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { userDataContext } from '../../providers/userAuthProvider/UserAuthProvider';
import Lottie from 'lottie-react';
import noData from '../../assets/animation/noData.json'
import { FaCalendar, FaCheck, FaEye, FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import PageTitle from '../../components/pageTitle/PageTitle';

const BookedServices = () => {
    const { currentUser, setLoading } = useContext(userDataContext);
    const [bookedServices, setBookedServices] = useState([]);
    useEffect(() => {
        axios.get(import.meta.env.VITE_API_URL+`/booking-services?customerEmail=${currentUser.email}`)
            .then(data => setBookedServices(data.data))
            .catch(err => {

            })
    }, [])

    const handelBookingDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(import.meta.env.VITE_API_URL+`/delete-booking?_id=${id}`)
                    .then(data => {
                        if (data?.data?.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Booking has been deleted.",
                                icon: "success"
                            });

                            const remainingService = bookedServices.filter(serv => serv._id !== id);
                            setBookedServices(remainingService);
                        }
                    }).catch(err => {
                        Swal.fire({
                            title: "Opps!",
                            text: "Something went wrong!!",
                            icon: "error"
                        });
                    })

            }
        });

    }


    //----------------Handel update status---------------
    const updateStatus = (id) => {
        axios.put(import.meta.env.VITE_API_URL+`/update-booking/${id}`, { currentStatus: "completed" })
            .then(data => {
                Swal.fire({
                    title: "Congratulation",
                    text: "Updated status now Completed!",
                    icon: "success"
                });
                setLoading(true)
            })
            .catch(err => {
                Swal.fire({
                    title: "Opps!",
                    text: "Something went wrong!!",
                    icon: "error"
                });
            })
    }
    return (
        <div className='min-h-[calc(100vh-112px)] mt-28 container mx-auto'>
            <PageTitle pgTitle={"Booked Service"} />
            {
                bookedServices.length === 0 ? <div className='flex justify-center items-center flex-col'>
                    <Lottie className='h-[70vh]' animationData={noData}></Lottie>
                    <p className='text-3xl font-rancho text-green-500'>No Data Available</p>
                </div> :
                    <div>

                        <section class="container px-4 mx-auto">
                            <div class="flex items-center gap-x-3">
                                <h2 class="text-lg font-medium text-gray-800 dark:text-white">Total Booked</h2>

                                <span class="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">{bookedServices.length}</span>
                            </div>

                            <div class="flex flex-col mt-6">
                                <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                        <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                                <thead class="bg-gray-50 dark:bg-gray-800">
                                                    <tr>
                                                        <th scope="col" class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            <div class="flex items-center gap-x-3">

                                                                <span>Service Name</span>
                                                            </div>
                                                        </th>



                                                        <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            <button class="flex items-center gap-x-2">
                                                                <span>Booking Date</span>

                                                                <FaCalendar />
                                                            </button>
                                                        </th>

                                                        <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Provider Email address</th>

                                                        <th scope="col" class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            <button class="flex items-center gap-x-2">
                                                                <span>Status</span>

                                                                <svg class="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                                                    <path d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                                                    <path d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z" fill="currentColor" stroke="currentColor" stroke-width="0.3" />
                                                                </svg>
                                                            </button>
                                                        </th>

                                                        <th scope="col" class="relative py-3.5 px-4">
                                                            <span class="sr-only">Edit</span>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody class="divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">

                                                    {
                                                        bookedServices.map(booked =>
                                                            <tr key={booked._id}>
                                                                <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                                    <div class="inline-flex items-center gap-x-3">


                                                                        <div class="flex items-center gap-x-2">
                                                                            <img class="object-cover w-10 h-10 rounded-full" src={booked.photoURL} alt="" />
                                                                            <div>
                                                                                <h2 class="font-medium text-gray-800 dark:text-white ">{booked.serviceName}</h2>
                                                                                <p class="text-sm font-normal text-gray-600 dark:text-gray-400">Price: {booked.price}$</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </td>

                                                                <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{booked.bookingDate}</td>
                                                                <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{booked.serviceProviderEmail}</td>
                                                                <td class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                                    <div class={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${booked?.status == 'pending' ? "bg-yellow-50" : booked.status == 'completed' ? "bg-emerald-50" : booked.status == 'reject' ? 'bg-red-50' : "bg-purple-50"}`}>
                                                                        <span class={`h-1.5 w-1.5 rounded-full ${booked?.status == 'pending' ? "bg-yellow-600" : booked.status == 'completed' ? "bg-emerald-500" : booked.status == 'reject' ? 'bg-red-600' : "bg-purple-600"}`}></span>

                                                                        <h2 class={`text-sm font-normal ${booked?.status == 'pending' ? "text-yellow-600" : booked.status == 'completed' ? "text-emerald-500" : booked.status == 'reject' ? 'text-red-600' : "text-purple-600"}`}>{booked.status}</h2>
                                                                    </div>
                                                                </td>
                                                                <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                                    <div class="flex items-center gap-x-6">
                                                                        <button
                                                                            onClick={() => handelBookingDelete(booked._id)}
                                                                            class="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                                            </svg>
                                                                        </button>
                                                                        <button
                                                                            onClick={() => updateStatus(booked._id)}
                                                                            className={`text-xl ${booked.status == "reject" || booked.status == 'completed' ? "btn-disabled text-gray-400" : "text-green-600"}`}>
                                                                            <FaCheck></FaCheck>
                                                                        </button>
                                                                        <Link to={`/service-details/${booked.serviceId}`}>
                                                                            <FaEye className='text-xl hover:text-green-500' />
                                                                        </Link>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        )
                                                    }

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                           
                        </section>
                    </div>
            }
        </div>
    );
};

export default BookedServices;