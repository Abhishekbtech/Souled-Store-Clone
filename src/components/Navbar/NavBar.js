import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from '@mui/material';
import { Search, AccountCircle, ShoppingCart } from '@mui/icons-material';
// import logo from '../assets/logo.png'; // Add your logo image path here

function NavBar() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const isMenuOpen = Boolean(anchorEl);

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>My Wishlist</MenuItem>
            <MenuItem onClick={handleMenuClose}>My Orders</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
    );

    return (
        <div>
            <nav className="bg-red-600 p-4">
                <div className="container mx-auto flex items-center justify-between">
                    {/* <img src={logo} alt="The Souled Store" className="h-10" /> */}
                    <div className="flex space-x-4">
                        <Link to="/men" className="text-white text-lg">Men</Link>
                        <Link to="/women" className="text-white text-lg">Women</Link>
                    </div>
                    <div className="flex space-x-4 items-center">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search…"
                                className="px-4 py-2 rounded-full focus:outline-none"
                            />
                            <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600" />
                        </div>
                        <div className="relative">
                            <ShoppingCart className="text-white" />
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">4</span>
                        </div>
                        <div>
                            <AccountCircle className="text-white cursor-pointer" onClick={handleProfileMenuOpen} />
                        </div>
                    </div>
                </div>
            </nav>
            {renderMenu}
        </div>
    );
}

export default NavBar;
