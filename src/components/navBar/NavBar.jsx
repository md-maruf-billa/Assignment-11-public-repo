import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from '../button/Button';
import { userDataContext } from '../../providers/userAuthProvider/UserAuthProvider';
import Swal from 'sweetalert2';

const NavBar = () => {

    //------------get user from context----------
    const { currentUser, logOutUser } = useContext(userDataContext);
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
            .then(err => {
                Swal.fire({
                    title: "LoggedIn Failed",
                    text: `${err.message}`,
                    icon: "error"
                });
            })
    }


    //------------Shared Nav link hare-----------
    const navItems = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/services"}>Services</NavLink></li>
        <li>
            <details>
                <summary>Dashboard</summary>
                <ul className="p-2 w-[200px]">
                    <li><NavLink to={"/add-services"}>Add Service</NavLink></li>
                    <li><NavLink to={"/manage-services"}>Manage Service</NavLink></li>
                    <li><NavLink to={"/booked-services"}>Booked-Services</NavLink></li>
                    <li><NavLink to={"/service-to-do"}>Service-To-Do</NavLink></li>
                </ul>
            </details>
        </li>

    </>
    return (
        <div className='bg-green-200 fixed top-0 w-full z-50'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-56">
                            {navItems}
                        </ul>
                    </div>
                    <Link to={"/"} className='flex items-center cursor-pointer'>
                        <img className='size-[80px]' src="./houselogo.png" alt="" />
                        <p className="text-3xl font-rancho">H.H.H</p>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        currentUser?.email ?
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Profile Image"
                                            src={currentUser?.photoURL} />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li onClick={handelLogOut}><a>Logout</a></li>
                                </ul>
                            </div>
                            : <Link to={"/login"}>
                                <Button btnName={"Login"} />
                            </Link>

                    }

                </div>
            </div>
        </div>
    );
};

export default NavBar;