import React, { useEffect, useState } from 'react';
import { InputBase, IconButton, Menu, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';

const SecondNavbar = () => {
    const [categories, setCategories] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const [showSearch, setShowSearch] = useState(false);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch('https://academics.newtonschool.co/api/v1/ecommerce/clothes/categories', {
                headers: {
                    projectId: 'your_project_id_here'
                }
            });
            const data = await response.json();
            setCategories(data.data);
        };

        fetchCategories();
    }, []);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const toggleSearch = () => {
        setShowSearch(!showSearch);
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
                        <InputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            className="border border-gray-300 rounded-md p-1"
                        />
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
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem onClick={handleMenuClose}>My Wishlist</MenuItem>
                            <MenuItem onClick={handleMenuClose}>My Orders</MenuItem>
                            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
                        </Menu>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default SecondNavbar;
