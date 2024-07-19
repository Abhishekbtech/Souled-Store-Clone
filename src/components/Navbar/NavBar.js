import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const isMenPage = location.pathname === '/';
    const isWomenPage = location.pathname === '/women';
    const isKidsPage = location.pathname === '/kids';

    return (
        <nav className="bg-red-600 p-4">
            <div className="container mx-auto flex items-center justify-between">
                <Link to="/" className="text-white text-xl font-bold flex items-center space-x-2">
                    <img src="/path/to/logo.png" alt="The Souled Store" className="h-8" />
                </Link>
                <div className="hidden md:flex space-x-4">
                    <Link 
                        to="/women" 
                        className={`text-xl ${isWomenPage ? 'bg-white text-red-600' : 'text-white'}`}
                    >
                        Women
                    </Link>
                    <Link 
                        to="/" 
                        className={`text-xl ${isMenPage ? 'bg-white text-red-600' : 'text-white'}`}
                    >
                        Men
                    </Link>
                    <Link 
                        to="/kids" 
                        className={`text-xl ${isKidsPage ? 'bg-white text-red-600' : 'text-white'}`}
                    >
                        Kids
                    </Link>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="text-white hidden md:block" onClick={() => alert('Track Order')}>Track Order</button>
                    <button className="text-white hidden md:block" onClick={() => alert('Contact Us')}>Contact Us</button>
                    <button className="text-white hidden md:block" onClick={() => alert('Download App')}>Download App</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
