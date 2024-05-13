import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer class="bg-green-200 mt-10">
            <div class="container p-6 mx-auto">
                <div class="lg:flex">
                    <div class="w-full -mx-6 lg:w-2/5">
                        <div class="px-6">
                            <a href="#">
                                <img class="w-auto size-[150px]" src="https://i.postimg.cc/nzLwNJtK/houselogo.png" alt="" />
                            </a>

                            <p class="max-w-sm mt-2 text-gray-500 dark:text-gray-400">Discover endless possibilities for efficient household management with HouseHelpHub.</p>

                            <div class="flex mt-6 items-center gap-3 text-xl -mx-2">
                                <Link to={"https://www.facebook.com/profile.php?id=100027753881743"}>
                                    <FaLinkedin className='text-blue-600' />
                                </Link>
                                <Link to={"https://www.facebook.com/profile.php?id=100027753881743"}>
                                    <FaFacebook className='text-blue-600' />
                                </Link>
                                <Link to={"https://www.facebook.com/profile.php?id=100027753881743"}>
                                    <FaTwitter className='text-black' />
                                </Link>

                                
                            </div>
                        </div>
                    </div>

                    <div class="mt-6 lg:mt-0 lg:flex-1">
                        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            <div>
                                <Link to={"/"} class="text-gray-700 uppercase dark:text-white">Home</Link>
                                <Link to={"/all-services"} href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">All Services</Link>
                                <Link to={"/booked-services"} href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Bookings</Link>
                                <Link to={"/manage-services"} href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Manage Services</Link>
                            </div>

                            <div>
                                <Link to={"/service-to-do"} class="text-gray-700 uppercase dark:text-white">Service To Do</Link>
                                <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Tec</a>
                                <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Music</a>
                                <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Videos</a>
                            </div>

                            <div>
                                <h3 class="text-gray-700 uppercase dark:text-white">Products</h3>
                                <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Mega cloud</a>
                                <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Aperion UI</a>
                                <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Meraki UI</a>
                            </div>

                            <div>
                                <h3 class="text-gray-700 uppercase dark:text-white">Contact</h3>
                                <span class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">+880 1730***996</span>
                                <span class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">eng.marufbilla@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <hr class="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

                <div>
                    <p class="text-center text-gray-500 dark:text-gray-400">© Brand 2024 - All rights reserved <br /><span className='text-xs text-blue-600'>Design By : <span className='font-rancho'>Abu-Mahid</span></span></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;