import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { FaEye, FaPen } from 'react-icons/fa6';
import { MdDeleteForever } from "react-icons/md";
import { Link } from 'react-router-dom';
import { userDataContext } from '../../providers/userAuthProvider/UserAuthProvider';
import Swal from 'sweetalert2';
import Lottie from 'lottie-react';
import noData from '../../assets/animation/noData.json'
import PageTitle from '../../components/pageTitle/PageTitle';

const ManageServices = () => {
    const { currentUser } = useContext(userDataContext);
    const [services, setServices] = useState([]);
    useEffect(() => {

        axios.get(import.meta.env.VITE_API_URL + `/current-user-services?providerEmail=${currentUser?.email}`)
            .then(data => setServices(data.data))
    }, [])
    console.log(services)

    //---------------- HANDEL DELETE SERVICE---------
    const handelDelete = (id) => {
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
                axios.delete(import.meta.env.VITE_API_URL + `/delete-service?_id=${id}`)
                    .then(data => {
                        if (data?.data?.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your service has been deleted.",
                                icon: "success"
                            });

                            const remainingService = services.filter(serv => serv._id !== id);
                            setServices(remainingService);
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
    return (
        <div className='container mx-auto min-h-[100vh-112px] mt-28'>
            <PageTitle pgTitle={"Manage Service"} />
            {services.length === 0 ?
                <div className='flex justify-center items-center flex-col'>
                    <Lottie className='h-[70vh]' animationData={noData}></Lottie>
                    <p className='text-3xl font-rancho text-green-500'>No Data Available</p>
                </div> :
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4'>
                    {
                        services.map(service =>
                            <div
                                // data-aos="zoom-in-up" data-aos-duration="1000"
                                key={service._id}
                                data-aos="zoom-in-up"
                                data-aos-duration="1000"
                                className='border-green-500 border  p-5 space-y-3 rounded-md z-0'>
                                <div>
                                    <img className='w-full h-[200px] rounded-lg' src={service?.photoURL} alt="" />
                                </div>
                                <div className=''>
                                    <p><span className='font-semibold'>Service Name: </span><span className='font-rancho text-2xl text-green-500'>{service.serviceName}</span></p>
                                    <p><span className='font-semibold'>Service Area: </span>{service.serviceArea}</p>
                                    <p><span className='font-semibold'>Price: </span>{service.price} $</p>

                                </div>
                                <div className='*:cursor-pointer  *:size-[40px] *:flex *:justify-center *:items-center space-y-4 *:rounded-lg *:text-white flex items-end gap-5'>
                                    <Link to={`/service-details/${service._id}`}
                                        className='p-3  border bg-green-800 '>

                                        <FaEye />

                                    </Link>
                                    <Link
                                        to={`/update-service/${service._id}`}
                                        className='p-3  border bg-green-500 '>

                                        <FaPen></FaPen>

                                    </Link>
                                    <div onClick={() => handelDelete(service._id)}
                                        className='p-3   border bg-[#EA4744] '>
                                        <MdDeleteForever />
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
            }
        </div>
    );
};

export default ManageServices;