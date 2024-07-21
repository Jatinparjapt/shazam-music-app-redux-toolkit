import React, { useState, useEffect } from 'react';
import { ImSearch } from "react-icons/im"; // Import search icon
import { GrApple } from "react-icons/gr"; // Import Apple icon
import { GiHamburgerMenu } from "react-icons/gi"; // Import hamburger menu icon
import { GrClose } from "react-icons/gr"; // Import close icon
import { SiShazam } from "react-icons/si"; // Import Shazam icon
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate from react-router-dom for navigation
import { useSelector, useDispatch } from 'react-redux'; // Import hooks from react-redux
import { setSearchTerm, selectSearchTerm } from "../Redux-toolkit/Search"; // Import actions from Redux toolkit
import { FiLogOut } from "react-icons/fi"; // Import logout icon
import Cookies from 'js-cookie'; // Import js-cookie for cookie management

const Header = () => {
    const navigate = useNavigate(); // Hook for navigation
    const dispatch = useDispatch(); // Hook to dispatch actions
    const [inputVisible, setInputVisible] = useState(false); // State to manage input visibility
    const [hamburger, setHamburger] = useState(false); // State to manage hamburger menu visibility
    const [isScrolled, setIsScrolled] = useState(false); // State to manage scroll effect on header
    const searchTerm = useSelector(selectSearchTerm); // Get the search term from Redux store

    // Get user name from cookies
    const getCookies = Cookies.get("token");
    var user;
    if (getCookies) {
        let email = localStorage.getItem("userEmail");
        if (email) {
            let getName = email.split("@");
            user = getName[0];
        }
    }

    // Change icons when hamburger menu is toggled
    const changeIcons = () => {
        setHamburger((value) => !value);
    }

    // Handle scroll event to change header background color
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Handle visibility of search input
    const inputTagVisibility = () => {
        navigate("/songs");
        setInputVisible((value) => !value);
    }

    // Update search term in Redux store
    const handleSearch = (event) => {
        dispatch(setSearchTerm(event.target.value));
    };

    // Logout user and clear cookies and local storage
    const logoutUser = () => {
        Cookies.remove("token");
        localStorage.clear();
        navigate("/login")
    }

    return (
        <>
            <section>
                {/* Header with dynamic background based on scroll */}
                <header className={`z-50 py-6 font-bold fixed w-full ${isScrolled ? "bg-white" : "bg-[#0bf]"}`}>
                    <nav>
                        <div className="main flex place-content-between">
                            <div className={`flex lg:items-center lg:gap-14 ml-12 ${isScrolled ? "text-black" : "text-white"}`}>
                                {/* Shazam logo */}
                                <Link to={"/"} className="logo flex items-center">
                                    <SiShazam className={`text-3xl ${isScrolled ? "text-black" : "text-white"} mr-2`} /> Shazam
                                </Link>
                                {/* Navigation links */}
                                <div className="links">
                                    <ul className='hidden text-sm lg:flex lg:gap-10'>
                                        <Link to={"/download"}>GET THE APP</Link>
                                        <Link to={"/playlist"}>PLAYLIST</Link>
                                        <Link to={"/songs"}>CHARTS</Link>
                                        <Link to={"/songs"}>RADIO SPINS</Link>
                                    </ul>
                                </div>
                            </div>
                            <div className="search flex gap-6 mr-16">
                                <div className='flex items-center'>
                                    {/* Search input and icon */}
                                    <input autoFocus onChange={handleSearch} value={searchTerm || ''} type={`${inputVisible ? "flex" : "hidden"}`} className='rounded-lg mx-2 py-1 text-black font-medium px-5' placeholder='Search for songs' name="Search" />
                                    <ImSearch onClick={inputTagVisibility} className={`${isScrolled ? "text-blue-600" : "text-white"}`} />
                                </div>
                                <div className={`flex`}>
                                    {/* Connect button or login link */}
                                    {getCookies ? <button onClick={logoutUser} className={`hidden lg:flex ${isScrolled ? "bg-blue-600 text-white" : "bg-white text-blue-600"} rounded-md p-1`}>
                                    LOGOUT <FiLogOut className='mt-1 ml-2' />
                                    </button> : <Link to={"/login"} className={`hidden lg:flex ${isScrolled ? "bg-blue-600 text-white" : "bg-white text-blue-600"} rounded-md p-1`}>
                                        CONNECT <GrApple className='mt-[1px] ml-2' /> MUSIC
                                    </Link>}
                                    {/* Hamburger menu icon */}
                                    <div onClick={changeIcons} className='flex lg:hidden'>
                                        <GiHamburgerMenu className={`text-2xl ${isScrolled ? "text-blue-600" : "text-white"}`} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Mobile menu */}
                        <div onClick={changeIcons} className={`fixed pt-5 inset-0 ${hamburger ? "translate-x-0" : "translate-x-full"} z-[10] top-0 bottom-0 right-0 w-full overflow-x-hidden overflow-y-auto text-white bg-black transform transition-transform duration-300 cubic-bezier(0.4, 0.2, 0, 1)`}>
                            <div className="logo flex place-content-between mx-16 text-white">
                                <div>
                                    Logo
                                </div>
                                <div className="close">
                                    <GrClose className='text-2xl text-white' />
                                </div>
                            </div>
                            <div className='w-full'>
                                <ul className='text-white grid grid-cols-1 gap-14 text-xl items-center mx-10 mt-10'>
                                    <Link to={"/download"}>Download Shazam</Link>
                                    <Link to={"/playlist"}>Playlist</Link>
                                    <Link to={"/songs"}>Charts</Link>
                                    <Link to={"/songs"}>Radio Spins</Link>
                                    <Link to={"https://support.apple.com/en-in/guide/shazam/welcome/web"}>Help</Link>
                                </ul>
                            </div>
                            <div className='w-auto flex place-content-between p-8 rounded-lg mt-5 mx-14 bg-gray-600'>
                                <p>Connect to Apple Music to play songs in full within Shazam.</p>
                                <div className='flex'>
                                    {getCookies ? <button onClick={logoutUser} className='flex text-blue-600 bg-white rounded-md p-1'>
                                        LOGOUT <FiLogOut className='mt-1 ml-2' />
                                    </button> : <Link to={"/login"} className='flex text-blue-600 bg-white rounded-md p-1'>
                                        CONNECT <GrApple className='mt-1 ml-2' /> MUSIC
                                    </Link>}
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </section>
        </>
    );
}

export default Header;
