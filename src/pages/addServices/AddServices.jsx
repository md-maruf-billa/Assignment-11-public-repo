import React, { useContext } from 'react';
import Button from './../../components/button/Button';
import { userDataContext } from '../../providers/userAuthProvider/UserAuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import PageTitle from './../../components/pageTitle/PageTitle';

const AddServices = () => {

    const { currentUser } = useContext(userDataContext);

    //----------------handel add service-----------

    const handelAddService = (e) => {
        e.preventDefault();
        const dataForm = e.target;
        const photoURL = dataForm.photoURL.value;
        const serviceName = dataForm.serviceName.value;
        const price = dataForm.price.value;
        const serviceArea = dataForm.serviceArea.value;
        const description = dataForm.description.value;
        const providerPhoto = currentUser.photoURL;
        const providerEmail = currentUser.email;
        const providerName = currentUser.displayName;
        const serviceData = { photoURL, serviceName, price, serviceArea, description, providerPhoto, providerEmail, providerName };

        // -----------sent data in server side----------
        axios.post("https://househelphub.vercel.app/add-service", serviceData)
            .then(data => {
                if (data?.data?.acknowledged) {
                    Swal.fire({
                        title: "Congratulation",
                        text: "Your Registration is successfully!",
                        icon: "success"
                    });
                    dataForm.reset();
                }
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
        <div className='min-h-[calc(100vh-112px)] mt-28'>
            <PageTitle pgTitle={"Add Service"}/>
            <section className="max-w-5xl p-6 mx-auto rounded-md shadow-md border border-green-500">
                <h2 className="text-3xl md:text-6xl font-semibold text-green-500 capitalize font-rancho text-center">Add Your Services</h2>

                <form onSubmit={handelAddService} className='mt-10'>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label  htmlFor="username">Image URL</label>
                            <input required name="photoURL" placeholder='Image URL' type="text" className="block w-full px-4 py-2 mt-2   border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label  htmlFor="emailAddress">Service Name</label>
                            <input required name="serviceName" placeholder='Service Name' type="text" className="block w-full px-4 py-2 mt-2   border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label  htmlFor="password">Price</label>
                            <input required name="price" placeholder='Price' type="text" className="block w-full px-4 py-2 mt-2   border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label  htmlFor="Service Area">Service Area</label>
                            <input required name="serviceArea" placeholder='Service Area' type="text" className="block w-full px-4 py-2 mt-2   border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                        </div>
                        <div className='col-span-2'>
                            <label  htmlFor="passwordConfirmation">Description</label>
                            <textarea required
                                name='description'
                                rows="5"
                                placeholder='Write your Product description' type="text" className="block w-full px-4 py-2 mt-2   border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button type='submit'><Button btnName={"Add Now"} /></button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddServices;