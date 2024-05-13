import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/navBar/NavBar';
import { userDataContext } from '../../providers/userAuthProvider/UserAuthProvider';
import './loader.css'
import Footer from '../footer/Footer';


const Layout = () => {
    const { currentUser, loading } = useContext(userDataContext);
    if (loading) {
        return <div className='min-h-screen flex justify-center items-center'><span className="loader"></span></div>
    }
    else if (currentUser == null) {
        return <div className='min-h-screen flex justify-center items-center'><span className="loader"></span></div>
    }
    return (
        <div className='font-roboto'>
            <NavBar />
            <Outlet />
            <Footer/>
        </div>
    )

};

export default Layout;