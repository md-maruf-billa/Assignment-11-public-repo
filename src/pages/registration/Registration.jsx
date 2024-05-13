import React, { useContext, useState } from 'react';
import Button from '../../components/button/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { userDataContext } from '../../providers/userAuthProvider/UserAuthProvider';
import Swal from 'sweetalert2'
import { updateProfile } from 'firebase/auth';
import auth from '../../utils/firebase/firebase.config';
import PageTitle from '../../components/pageTitle/PageTitle';
import { FaEyeSlash } from 'react-icons/fa6';
import { VscEye } from "react-icons/vsc";

const Registration = () => {
    const { loginWithGoogle, signUnWithPassword, setLoading } = useContext(userDataContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [passErr, setPassErr] = useState('');
    const [strongPass, setStrongPass] = useState("");
    const [successPass, setSuccessPass] = useState("");
    const [eye, setEye] = useState(true);

    //----------------------Google login hare-----------------
    const handelGoogleLogin = () => {
        loginWithGoogle()
            .then(res => {
                Swal.fire({
                    title: "Congratulation",
                    text: "Your are loggedIn successfully!",
                    icon: "success"
                });
                navigate(location.pathname || "/")
            })
            .catch(err => {
                Swal.fire({
                    title: "LoggedIn Failed",
                    text: `${err.message.split('/')[1].replace(")", "")}`,
                    icon: "error"
                });
            })
    }


    //-------------login with email and password------------
    const handelRegistration = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = strongPass;

        signUnWithPassword(email, password)
            .then(res => {
                updateProfile(auth.currentUser, {
                    displayName: `${name}`, photoURL: `${photoURL}`
                })
                    .then(res => {
                        setLoading(true);
                        Swal.fire({
                            title: "Congratulation",
                            text: "Your Registration is successfully!",
                            icon: "success"
                        });
                        navigate("/")
                    })
                    .catch(err => {
                        Swal.fire({
                            title: "LoggedIn Failed",
                            text: `${err.message.split('/')[1].replace(")", "")}`,
                            icon: "error"
                        });
                    })
            })
            .catch(err => {
                Swal.fire({
                    title: "LoggedIn Failed",
                    text: `${err.message.split('/')[1].replace(")", "")}`,
                    icon: "error"
                });
            })

    }

    const managePassword = (e) => {
        const password = e.target.value;
        if (password.length == 0) {
            setPassErr("")
            return
        }
        else if (password.length < 6) {
            setPassErr("Password should be more then 6 character");
            return;
        }
        else if (!/(?=.*[a-z])/.test(password)) {
            setPassErr("Must be need a lower case");

            return;
        }
        else if (!/(?=.*[A-Z])/.test(password)) {
            setPassErr("Must be need a Upper case");
            return;
        }
        else if (!/(?=.*[0-9])/.test(password)) {
            setPassErr("Must be need a number");
            return;
        }
        else if (!/(?=.*[!@#$%^&*()])/.test(password)) {
            setPassErr("Need a special character (!@#$%^&*())");
            return;
        }

        else {
            setPassErr("");
            setSuccessPass("your password is too strong")
            setStrongPass(password)
        }

    }
    const handelEye = () => {
        setEye(!eye)
    }

    return (
        <div className='min-h-screen flex justify-center items-center mt-10'>
            <PageTitle pgTitle={"Registration"} />
            <div className="w-full max-w-sm md:max-w-lg p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 border border-green-500">
                <div className="flex justify-center mx-auto">
                    <img className="size-[180px]" src="https://i.postimg.cc/nzLwNJtK/houselogo.png" alt="" />
                </div>

                <form onSubmit={(event) => handelRegistration(event)} className="mt-2">

                    <div className="relative flex items-center mt-8">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>

                        <input type="text" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Username" name='name' />
                    </div>

                    <div className="relative flex items-center mt-6">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </span>

                        <input required type="email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" name='email' />
                    </div>

                    <div className="relative flex items-center mt-4">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                            </svg>
                        </span>

                        <input type="text" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Photo URL" name='photoURL' />
                    </div>
                    <div className="relative flex items-center mt-4">
                        <span className="absolute top-3 z-10">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </span>
                        <div className='w-full'>
                            <div className='relative'>
                                <input name='password' onChange={managePassword} className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" required type={`${eye ? "password" : "text"}`} placeholder='Password' />
                                <div className="absolute right-2 top-1/2 -translate-y-1/2">
                                    {
                                        eye ? <VscEye onClick={handelEye} className='text-2xl text-[#5a5a5a] cursor-pointer'></VscEye> :
                                            <FaEyeSlash onClick={handelEye} className='text-xl text-[#5a5a5a] cursor-pointer'></FaEyeSlash>
                                    }
                                </div>
                            </div>
                            {
                                passErr ? <small className='-mt-10 text-red-600'>{passErr}</small> :
                                    <small className='-mt-10 text-green-600'>{successPass}</small>
                            }
                        </div>
                    </div>

                    <div className="mt-8">
                        <button type='submit' className='w-full'>
                            <Button btnName={"Registration Now"} customStyle={"w-full"} />
                        </button>
                    </div>
                </form>

                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

                    <a href="#" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
                        or login with Social Media
                    </a>

                    <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
                </div>


                {/* ---------Social login--------------- */}
                <div className="flex items-center mt-8 justify-center">
                    <div className="flex items-center gap-3 sm:gap-x-5">
                        <button
                            onClick={handelGoogleLogin}
                            className="bg-white dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 rounded-lg hover:bg-gray-100 duration-300 transition-colors border px-8 py-2.5">
                            <svg className="w-5 h-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_3033_94454)">
                                    <path d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z" fill="#4285F4" />
                                    <path d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z" fill="#34A853" />
                                    <path d="M5.50253 14.3003C4.99987 12.8099 4.99987 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z" fill="#FBBC04" />
                                    <path d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z" fill="#EA4335" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_3033_94454">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>

                        <button className="bg-[#1877F2] rounded-lg hover:bg-[#1877F2]/80 duration-300 transition-colors border border-transparent px-8 py-2.5">
                            <svg className="w-5 h-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_3033_94669)">
                                    <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_3033_94669">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>

                        <button className="bg-white dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 rounded-lg hover:bg-gray-100 duration-300 transition-colors border px-8 py-2.5">
                            <svg className="w-5 h-5 fill-current text-blue-600" viewBox="0 0 24 24">
                                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>

                <p className="mt-8 text-xs font-light text-center text-gray-400">Have an account? <Link to={"/login"} className="font-medium text-green-600 dark:text-green-500 hover:underline">Login Now</Link></p>
            </div>
        </div>
    );
};

export default Registration;