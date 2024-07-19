import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const isMenPage = location.pathname === '/' || location.pathname.startsWith('/men') || location.pathname.startsWith('/Men');
    const isWomenPage = location.pathname.startsWith('/women') || location.pathname.startsWith('/Women');
    const isKidsPage = location.pathname.startsWith('/kids');

    return (
        <nav className="bg-red-600 p-4">
            <div className="container mx-auto flex items-center justify-around">
                <div className="flex space-x-4">
                    <Link 
                        to="/women" 
                        className={`text-xl px-2 ${isWomenPage ? 'bg-white text-red-600' : 'text-white'}`}
                    >
                        Women
                    </Link>
                    <Link 
                        to="/" 
                        className={`text-xl px-2 ${isMenPage ? 'bg-white text-red-600' : 'text-white'}`}
                    >
                        Men
                    </Link>
                    <Link 
                        to="/kids" 
                        className={`text-xl px-2 ${isKidsPage ? 'bg-white text-red-600' : 'text-white'}`}
                    >
                        Kids
                    </Link>
                </div>
                {/* Buttons */}
                <div className="flex items-center space-x-4">
                    <button className="text-white" onClick={() => alert('Track Order')}>Track Order</button>
                    <button className="text-white hidden sm:block" onClick={() => alert('Contact Us')}>Contact Us</button>
                    <button className="text-white" onClick={() => alert('Download App')}>Download App</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
