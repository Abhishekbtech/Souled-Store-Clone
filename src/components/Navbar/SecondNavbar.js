import React, { useEffect, useState, useCallback } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link, useNavigate } from 'react-router-dom';
import im from './image/logo-unscreen.gif';

const SecondNavbar = () => {
    const [categories, setCategories] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const [showSearch, setShowSearch] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);
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

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
            const storedUsername = sessionStorage.getItem('name');
            setUsername(storedUsername || '');
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
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

    const handleMenuOpen = (event) => {
        if (isLoggedIn) {
            setAnchorEl(event.currentTarget);
        } else {
            navigate('/signup');
        }
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };

    const debounce = (func, delay) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), delay);
        };
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const debouncedSearch = useCallback(
        debounce((searchTerm) => {
            console.log("nav", searchTerm);
            navigate("/search", { state: { key: searchTerm } });
        }, 300), // 300ms delay
        []
    );

    useEffect(() => {
        if (searchTerm) {
            debouncedSearch(searchTerm);
        }
    }, [searchTerm, debouncedSearch]);

    const handlingCart = () => {
        navigate('/cart');
    };

    const handlingWishList = () => {
        navigate('/wishlist');
    };

    const handlingOrder = () => {
        navigate('/order');
    };

    const handleLogout = () => {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('username');
        setIsLoggedIn(false);
        setUsername('');
        handleMenuClose();
    };

    return (
        <nav className={`bg-gray-100 p-2 ${isScrolled ? 'fixed w-full top-0 z-50' : ''}`}>
            <div className="container mx-auto flex items-center justify-between flex-wrap">
                <div className="flex space-x-4 overflow-x-auto flex-1">
                    <Link to="/" className="text-white text-xl font-bold flex items-center space-x-2">
                        <div className="relative h-12 ml-5">
                            <img 
                                src={im} 
                                alt="The Souled Store" 
                                className="h-full object-contain" 
                            />
                        </div>
                    </Link>
                </div>
                <div className="flex items-center space-x-4">
                    {showSearch && (
                        <div className="flex items-center border rounded-md overflow-hidden">
                            <input
                                type="search"
                                className="px-4 py-2 w-full"
                                placeholder="Search by Category"
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                        </div>
                    )}
                    <IconButton type="button" aria-label="search" onClick={toggleSearch}>
                        <SearchIcon />
                    </IconButton>
                    <IconButton aria-label="show wishlist" onClick={handlingWishList}>
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="show cart items" onClick={handlingCart}>
                        <ShoppingCartIcon />
                    </IconButton>
                    <div className="flex items-center space-x-2">
                        <AccountCircleIcon className="text-gray-700 cursor-pointer" onClick={handleMenuOpen} />
                        {isLoggedIn ? (
                            <span>Hi {username}</span>
                        ) : (
                            <span className="text-gray-700" onClick={() => navigate('/signup')}>
                                Sign up
                            </span>
                        )}
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem onClick={handlingWishList}>My Wishlist</MenuItem>
                            <MenuItem onClick={handlingCart}>My Cart</MenuItem>
                            <MenuItem onClick={handlingOrder}>My Orders</MenuItem>
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </Menu>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default SecondNavbar;
