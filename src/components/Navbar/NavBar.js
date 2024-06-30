import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from '@mui/material';
import { Search, AccountCircle, ShoppingCart } from '@mui/icons-material';
import logo from '../Image/Logo.png';
// import CategoryDropdown from './CategoryDropdown';

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
                    <img src={logo} alt="The Souled Store" className="h-10" />
                    <div className="flex space-x-4">
                        {/* <CategoryDropdown gender="Women" />
                        <CategoryDropdown gender="Men" /> */}
                        <Link to="/women" className="text-white text-xl">WOMEN</Link>
                        <Link to="/" className="text-white text-xl">MEN</Link>
                        <Link to="/kids" className="text-white text-xl">KIDS</Link>
                    </div>
                    <div className="flex space-x-6 items-center">
                        <Link to="#" className="text-white">Track Order</Link>
                        <Link to="#" className="text-white">Contact Us</Link>
                        <Link to="#" className="text-white">Download App</Link>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search…"
                                className="px-4 py-2 rounded-full focus:outline-none"
                            />
                            <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600" />
                        </div>
                        <ShoppingCart className="text-white" />
                        <AccountCircle className="text-white cursor-pointer" onClick={handleProfileMenuOpen} />
                    </div>
                </div>
            </nav>
            {renderMenu}
        </div>
    );
}

export default NavBar;
