import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = ({ onToggleSidebar, onOpenSidebar }) => {
    const [open, setOpen] = useState(false);
    // const [showMobileSidebar, setShowMobileSidebar] = useState(false); // ✅ New state for sidebar toggle
    const navigate = useNavigate();
    const location = useLocation();


    const logout = () => {
        navigate("/login");
    };
    const goToDashboard = () => {
        navigate("/dashboard");
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
                        <p
                            onClick={logout}
                            className={`${linkClasses} cursor-pointer`}
                        >
                            Logout
                            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-red-400 to-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                        </p>
                        {location.pathname !== "/dashboard" && (
                            <p
                                onClick={goToDashboard}
                                className={`${linkClasses} cursor-pointer`}
                            >
                                Home
                                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-red-400 to-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                            </p>
                        )}


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
                            to="/dashboard"
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
                                if (onOpenSidebar) onOpenSidebar(); // Call the sidebar open function
                            }}
                            className="text-white text-xl hover:text-gray-300 transition cursor-pointer"
                        >
                            Open Sidebar
                        </p>

                    </div>
                )}
            </nav>


        </>
    );
};

export default Navbar;
