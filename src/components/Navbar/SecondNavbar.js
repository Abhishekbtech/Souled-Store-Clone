import React, { useEffect, useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useNavigate} from 'react-router-dom';

const SecondNavbar = () => {
    const [categories, setCategories] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const [showSearch, setShowSearch] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch('https://academics.newtonschool.co/api/v1/ecommerce/clothes/categories', {
                headers: {
                    projectId: '0e7aaiqkxs51'
                }
            });
            const data = await response.json();
            setCategories(data.data);
        };

        fetchCategories();
    }, []);

    const handleMenuOpen = () => {
        navigate('/sing')
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
        console.log(searchTerm)
        navigate("/search", {state :{key :searchTerm}});
    };

    return (
        <nav className="bg-gray-100 p-2">
            <div className="container mx-auto flex items-center justify-between flex-wrap">
                <div className="flex space-x-4 overflow-x-auto flex-1">
                    {categories.map((category, index) => (
                        <button key={index} className="text-gray-700 hover:text-gray-900 whitespace-nowrap">
                            {category.toUpperCase()}
                        </button>
                    ))}
                </div>
                <div className="flex items-center space-x-4">
                    {showSearch && (
                        <div className="flex items-center border rounded-md overflow-hidden">
                            <input
                                type="search"
                                className="px-4 py-2 w-full"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                        </div>
                    )}
                    <IconButton type="button" aria-label="search" onClick={toggleSearch}>
                        <SearchIcon />
                    </IconButton>
                    <IconButton aria-label="show wishlist">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="show cart items">
                        <ShoppingCartIcon />
                    </IconButton>
                    <div>
                        <AccountCircleIcon className="text-gray-700 cursor-pointer" onClick={handleMenuOpen} />
                        {/* <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem onClick={handleMenuClose}>My Wishlist</MenuItem>
                            <MenuItem onClick={handleMenuClose}>My Orders</MenuItem>
                            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
                        </Menu> */}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default SecondNavbar;