import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServicesDetails = () => {
    const data = useLoaderData();
    const { photoURL, serviceName, price, serviceArea, description, providerPhoto, providerEmail, providerName } = data;
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
                                    Up to 5 projects
                                </li>

                                <li class="text-gray-500 dark:text-gray-400">
                                    Up to 10 collaborators
                                </li>

                                <li class="text-gray-500 dark:text-gray-400">
                                    2Gb of storage
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
                                    Unlimited projects
                                </li>

                                <li class="text-gray-500 dark:text-gray-400">
                                    Unlimited collaborators
                                </li>

                                <li class="text-gray-500 dark:text-gray-400">
                                    Unlimited storage
                                </li>

                                <li class="text-gray-500 dark:text-gray-400">
                                    Real-time collaborations
                                </li>

                                <li class="text-gray-500 dark:text-gray-400">
                                    24x7 Support
                                </li>
                            </ul>

                            <button class="inline-flex items-center justify-center px-4 py-2 font-medium text-white uppercase transition-colors bg-green-500 rounded-lg hover:bg-green-700 focus:outline-none">
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
                                    Up to 10 projects
                                </li>

                                <li class="text-gray-500 dark:text-gray-400">
                                    Up to 20 collaborators
                                </li>

                                <li class="text-gray-500 dark:text-gray-400">
                                    10Gb of storage
                                </li>

                                <li class="text-gray-500 dark:text-gray-400">
                                    Real-time collaborations
                                </li>
                            </ul>

                            <button class="inline-flex btn-disabled items-center justify-center px-4 py-2 font-medium text-white uppercase transition-colors bg-gray-500 rounded-lg hover:bg-blue-700 focus:outline-none">
                                Booked Service
                            </button>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServicesDetails;