import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/navBar/NavBar';
import { userDataContext } from '../../providers/userAuthProvider/UserAuthProvider';
import './loader.css'


const Layout = () => {
    const { currentUser } = useContext(userDataContext);
    return (
        <>
            {
                !currentUser ? <div className='min-h-screen flex justify-center items-center'><span class="loader"></span></div> :
                    <div className='font-roboto'>
                        <NavBar />
                        <Outlet />
                    </div>
            }
            </>
    );
};

export default Layout;