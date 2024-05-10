import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from '../button/Button';
import { userDataContext } from '../../providers/userAuthProvider/UserAuthProvider';
import { IoIosLogOut } from "react-icons/io";
import { FaGear } from "react-icons/fa6";
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
import auth from '../../utils/firebase/firebase.config';
import { Tooltip } from 'react-tooltip';

const NavBar = () => {

    //------------get user from context----------
    const { currentUser, logOutUser, setLoading } = useContext(userDataContext);
    const [reRender, setRerender] = useState(false);
    //-------------Log out user---------
    const handelLogOut = () => {
        logOutUser()
            .then(res => {
                Swal.fire({
                    title: "Congratulation",
                    text: "Your are loggedIn successfully!",
                    icon: "success"
                });
            })
            .catch(err => {
                Swal.fire({
                    title: "LoggedIn Failed",
                    text: `${err.message}`,
                    icon: "error"
                });
            })
    }

    //---------------update Profile---------------
    const handelEditProfile = (e) => {
        e.preventDefault();
        updateProfile(auth.currentUser, {
            displayName: e.target.name.value ? e.target.name.value : e.target.name.placeholder,
            photoURL: e.target.photoURL.value ? e.target.photoURL.value : e.target.photoURL.placeholder
        })
            .then(() => {
                Swal.fire({
                    title: "Congratulation",
                    text: "Your Profile is Updated.",
                    icon: "success"
                });
                setLoading(true);
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Craft item added failed.",
                    footer: ''
                });
            })

    }
    //-------------handel theme chaining----------
    const handelThem = (e) => {
        if (e.target.checked) {
            localStorage.setItem('theme', 'black');
            setRerender(true)

        }
        else {
            localStorage.setItem('theme', 'light')
            setRerender(false)
        }
    }
    useEffect(() => {
        const th = localStorage.getItem('theme')
        document.querySelector('html').setAttribute("data-theme", th)
    }, [reRender])
    //------------Shared Nav link hare-----------
    const navItems = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/services"}>Services</NavLink></li>
        {
            currentUser?.email ? <li>
                <details>
                    <summary>Dashboard</summary>
                    <ul className="p-2 w-[200px]">
                        <li><NavLink to={"/add-services"}>Add Service</NavLink></li>
                        <li><NavLink to={"/manage-services"}>Manage Service</NavLink></li>
                        <li><NavLink to={"/booked-services"}>Booked-Services</NavLink></li>
                        <li><NavLink to={"/service-to-do"}>Service-To-Do</NavLink></li>
                    </ul>
                </details>
            </li> : <></>
        }

    </>
    return (
        <div className='bg-green-200 fixed top-0 w-full z-50'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 dark:text-white rounded-box w-56">
                            {navItems}
                        </ul>
                    </div>
                    <Link to={"/"} className='flex items-center cursor-pointer'>
                        <img className='size-[80px]' src="https://i.postimg.cc/nzLwNJtK/houselogo.png" alt="" />
                        <p className="text-3xl font-rancho">H.H.H</p>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 dark:text-white">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    <label className="swap swap-rotate">

                        {/* this hidden checkbox controls the state */}
                        <input onClick={handelThem} type="checkbox" className="theme-controller" />

                        {/* sun icon */}
                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>
                    {
                        currentUser?.email ?
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div

                                        className="w-10 rounded-full"
                                    >
                                        <img
                                            data-tooltip-id="my-tooltip"
                                            alt="Profile Image"
                                            src={currentUser?.photoURL} />
                                    </div>

                                </div>
                                <Tooltip className='z-50' id='my-tooltip'>
                                    <div>
                                        <h3>{currentUser?.displayName || 'User Name Not found'}</h3>
                                        <h3>{currentUser?.email || "Email not found"}</h3>

                                    </div>
                                </Tooltip>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li onClick={() => document.getElementById('my_modal_1').showModal()}><a><FaGear />Edit Profile</a></li>
                                    <li onClick={handelLogOut}><a> <IoIosLogOut />Logout</a></li>
                                </ul>
                            </div>
                            : <Link to={"/login"}>
                                <Button btnName={"Login"} />
                            </Link>

                    }

                </div>
            </div>



            {/* <button className="btn" >open modal</button> */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box border-2 border-green-500 bg-green-50 dark:bg-black">
                    <div
                        className=' mb-10 md:mb-0 mx-auto container flex  justify-center items-center px-2 md:px-0'>
                        <div className='px-5 py-10 rounded-lg ' >
                            <form onSubmit={handelEditProfile}>
                                <h3 className='font-rancho text-4xl md:text-6xl text-green-500'>Edit Your Profile</h3>
                                <div className='flex justify-center items-center mt-8'>
                                    <img className='size-[150px] rounded-full' src={currentUser?.photoURL} alt="" />
                                </div>
                                <div className='flex gap-1 flex-col mt-8'>
                                    <p className='font-semibold text-green-500'>Name</p>
                                    <input name='name' type="text" className='bg-transparent outline-none border-b-2' placeholder={currentUser?.displayName} />
                                </div>
                                <div className='flex gap-1 flex-col mt-6'>
                                    <span className='flex items-center gap-2'>
                                        <p className='font-semibold text-green-500'>Email</p>
                                        <small className='text-red-600'>(Not changeable)</small>
                                    </span>
                                    <input name='email' type="text" className='bg-transparent outline-none border-b-2' readOnly value={currentUser?.email || 'Email Not Public'} />
                                </div>
                                <div className='flex gap-1 flex-col mt-6'>
                                    <p className='font-semibold text-green-500'>PhotoURL</p>
                                    <input name='photoURL' type="text" className='bg-transparent outline-none border-b-2' placeholder={currentUser?.photoURL} />
                                </div>
                                <div className='flex justify-end items-center mt-10'>
                                    <button type='submit'><Button btnName={"Update"} /></button>

                                </div>
                            </form>
                        </div>
                    </div>
                    <p className='text-xs text-center'>Press Esc to close this page.</p>
                </div>
            </dialog>
        </div>
    );
};

export default NavBar;