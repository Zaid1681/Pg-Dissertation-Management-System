/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import DropdownUser from './DropDownUser';

const Navbar = () => {

    const [isNavOpen, setNavOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)

    const navmenuStyle = "block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-500 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:py-1 lg:px-2 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"

    const activeMenuStyle = "bg-slate-100 rounded-lg pointer-events-none md:text-black"

    const toggleNav = () => {
        setNavOpen(!isNavOpen);
    };

    const isActive = (path) => {
        return location.pathname === path;
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    return (
        <nav className="bg-primary border-gray-200 py-2.5 dark:bg-gray-900">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                <a href="/" className="flex items-center">
                    {/* <img src="https://prod.assets.earlygamecdn.com/images/codes-logo.png" className="h-6 mr-3 sm:h-9" alt="Logo" /> */}
                    <span className="self-center font-semibold text-medium whitespace-nowrap dark:text-white">PG Dissertation System</span>
                </a>
                <div className="flex items-center lg:order-2">
                    <div className="hidden mt-2 mr-4 sm:inline-block">
                        <span></span>
                    </div>

                    {/* Login button for desktop view */}
                    {user ? (
                        <>
                            {!isActive('/login') && (
                                <a
                                    href="#"
                                    className="hidden lg:inline-block bg-light-blue text-dark-blue hover:bg-blue-400 focus:ring-2 focus:ring-light-blue font-semibold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-1 sm:mr-2 lg:mr-0 focus:outline-none"
                                >
                                    <DropdownUser />
                                </a>
                            )}
                        </>
                    ) :
                        (
                            <>
                                {/* jabhi URL mein login nahi tab dikhaao */}
                                {!isActive('/login') && (
                                    <a
                                        href="#"
                                        className="hidden lg:inline-block bg-blue-700 text-white hover:bg-blue-500 focus:ring-2 focus:ring-light-blue font-semibold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-1 sm:mr-2 lg:mr-0 focus:outline-none"
                                        onClick={handleLoginClick}
                                    >
                                        Login
                                    </a>
                                )}
                            </>
                        )
                    }

                    <button
                        onClick={toggleNav}
                        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-expanded={isNavOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className={`w-6 h-6 ${isNavOpen ? 'hidden' : ''}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <svg
                            className={`w-6 h-6 ${isNavOpen ? '' : 'hidden'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>


                </div>
                <div
                    className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${isNavOpen ? 'block' : 'hidden'
                        }`}
                >
                    <ul className="flex flex-col mt-4 text-small lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <Link to="/" className={`${navmenuStyle} ${isActive('/') ? `${activeMenuStyle}` : ''}`}>Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className={`${navmenuStyle} ${isActive('/about') ? `${activeMenuStyle}` : ''}`}>About Us</Link>
                        </li>
                        {/* <li>
                            <Link to="/tutorials" className={`${navmenuStyle} ${isActive('/tutorials') ? `${activeMenuStyle}` : ''}`}>Tutorials</Link>
                        </li>
                        <li>
                            <Link to="/researches" className={`${navmenuStyle} ${isActive('/researches') ? `${activeMenuStyle}` : ''}`}>Researches</Link>
                        </li> */}
                        <li>
                            <Link to="/contact" className={`${navmenuStyle} ${isActive('/contact') ? `${activeMenuStyle}` : ''}`}>Contact Us</Link>
                        </li>
                        <li>
                            {user && (
                                <>
                                    {user.role === 'admin' ? (
                                        <Link to="/admin" className={`${navmenuStyle} ${isActive('/admin') ? `${activeMenuStyle}` : ''}`}>
                                            Admin Dashboard
                                        </Link>
                                    ) : user.role === 'student' ? (
                                        <Link to="/student" className={`${navmenuStyle} ${isActive('/student') ? `${activeMenuStyle}` : ''}`}>
                                            Student Dashboard
                                        </Link>
                                    ) : user.role === 'guide' ? (
                                        <Link to="/guide" className={`${navmenuStyle} ${isActive('/guide') ? `${activeMenuStyle}` : ''}`}>
                                            Guide Dashboard
                                        </Link>
                                    ) : (
                                        console.log("Hello from Main Dashboard")
                                    )}
                                </>
                            )}
                        </li>
                        {!isActive('/login') && (
                            <a
                                href="/"
                                className={` bg-blue-700 text-white hover:bg-blue-500 focus:ring-2 focus:ring-light-blue font-semibold rounded-lg text-sm px-5 py-1 sm:mr-2 lg:mr-0 w-fit mt-2 focus:outline-none ${isNavOpen ? 'inline-block' : 'hidden'} lg:hidden`}
                                onClick={handleLoginClick}
                            >
                                Login
                            </a>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
