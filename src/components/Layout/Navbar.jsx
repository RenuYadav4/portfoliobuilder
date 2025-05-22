import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [showMobileSidebar, setShowMobileSidebar] = useState(false); // ✅ New state for sidebar toggle
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("user");
        navigate("/");
    };

    const linkClasses = "relative text-gray-300 hover:text-white transition duration-300 group";

    return (
        <>
            <nav className="bg-gray-950 border-b border-gray-800  px-4 py-3">
                <div className="max-w-7xl mx-auto flex items-center justify-between">

                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                        MyApp
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6 items-center">
                        <Link to="/" className={linkClasses}>
                            Signup
                            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        {/* <Link to="/home" className={linkClasses}>
                            Home
                            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link> */}
                        <Link to="/login" className={linkClasses}>
                            Login
                            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-yellow-400 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <p
                            onClick={logout}
                            className={`${linkClasses} cursor-pointer`}
                        >
                            Logout
                            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-red-400 to-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                        </p>
                    </div>

                    {/* Mobile Toggle */}
                    <button onClick={() => setOpen(!open)} className="md:hidden text-gray-300 z-50">
                        {open ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {open && (
                    <div className="fixed top-0 left-0 w-full h-full bg-[#8a8b9b] opacity-90 z-40 pt-20 flex flex-col items-center space-y-6 md:hidden">
                        <Link
                            to="/home"
                            onClick={() => setOpen(false)}
                            className="text-white text-xl hover:text-gray-300 transition"
                        >
                            Home
                        </Link>
                        <Link
                            to="/login"
                            onClick={() => setOpen(false)}
                            className="text-white text-xl hover:text-gray-300 transition"
                        >
                            Login
                        </Link>
                        <p
                            onClick={() => {
                                setOpen(false);
                                logout();
                            }}
                            className="text-white text-xl hover:text-gray-300 transition cursor-pointer"
                        >
                            Logout
                        </p>
                        <p
                            onClick={() => {
                                setOpen(false);
                                setShowMobileSidebar(true);
                            }}
                            className="text-white text-xl hover:text-gray-300 transition cursor-pointer"
                        >
                            Dashboard
                        </p>
                    </div>
                )}
            </nav>

            {/* ✅ Mobile Sidebar Toggle */}
            {showMobileSidebar && (
                <div className="fixed inset-0 z-50 flex">
                    {/* Background overlay */}
                    <div
                        className="absolute inset-0 bg-black bg-opacity-40"
                        onClick={() => setShowMobileSidebar(false)}
                    />
                    
                </div>
            )}
        </>
    );
};

export default Navbar;
