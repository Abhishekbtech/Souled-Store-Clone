import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const isMenPage = location.pathname === '/' || location.pathname.toLowerCase().startsWith('/men');
    const isWomenPage = location.pathname.toLowerCase().startsWith('/women');
    const isKidsPage = location.pathname.toLowerCase().startsWith('/kids');

    return (
        <nav className="bg-red-600 p-4">
            <div className="container mx-auto flex flex-col sm:flex-row items-center sm:justify-around">
                <div className="flex space-x-4">
                    <Link 
                        to="/women" 
                        className={`text-xl px-2 ${isWomenPage ? 'bg-white rounded-md text-red-600' : 'text-white'}`}
                    >
                        Women
                    </Link>
                    <Link 
                        to="/" 
                        className={`text-xl px-2 ${isMenPage ? 'bg-white rounded-md text-red-600' : 'text-white'}`}
                    >
                        Men
                    </Link>
                    <Link 
                        to="/kids" 
                        className={`text-xl px-2 ${isKidsPage ? 'bg-white rounded-md text-red-600' : 'text-white'}`}
                    >
                        Kids
                    </Link>
                </div>
                {/* <div className="items-center space-x-4 hidden sm:flex">
                    <button className="text-white" onClick={() => alert('Track Order')}>Track Order</button>
                    <button className="text-white" onClick={() => alert('Contact Us')}>Contact Us</button>
                    <button className="text-white" onClick={() => alert('Download App')}>Download App</button>
                </div> */}
            </div>
        </nav>
    );
};

export default Navbar;