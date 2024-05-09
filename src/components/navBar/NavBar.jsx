import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from '../button/Button';

const NavBar = () => {
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
                        <p  className="text-3xl font-rancho">H.H.H</p>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={"/login"}>
                        <Button btnName={"Login"} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;