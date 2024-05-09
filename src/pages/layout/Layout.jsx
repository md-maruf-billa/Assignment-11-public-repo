import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/navBar/NavBar';


const Layout = () => {
    return (
        <div className='font-roboto'>
            <NavBar/>
            <Outlet/>
        </div>
    );
};

export default Layout;