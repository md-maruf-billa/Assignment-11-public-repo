import React from 'react';
import Lottie from "lottie-react";
import errorAnimation from './error-animation.json'
import NavBar from '../../components/navBar/NavBar';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';

const Error = () => {
    return (
        <div >
            <NavBar />
            <Lottie className='h-[90vh]' animationData={errorAnimation} />
            <div className='flex justify-center items-center'>
                <Link to={"/"}>
                    <Button btnName={"Go Home"} />
                </Link>
            </div>
        </div>
    );
};

export default Error;