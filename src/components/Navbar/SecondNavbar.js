import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, InputBase, IconButton, Button, Menu, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const SecondNavbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch('https://academics.newtonschool.co/api/v1/ecommerce/clothes/categories', {
                headers: {
                    projectId: 'your_project_id_here'
                }
            });
            const data = await response.json();
            setCategories(data);
        };

        fetchCategories();
    }, []);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" color="default">
            <Toolbar>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleMenuOpen}>
                    Categories
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                >
                    {categories.map((category) => (
                        <MenuItem key={category.id} onClick={handleMenuClose}>
                            {category.name}
                        </MenuItem>
                    ))}
                </Menu>
                <div style={{ flexGrow: 1 }} />
                <InputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    style={{ marginRight: '16px' }}
                />
                <IconButton type="submit" aria-label="search">
                    <SearchIcon />
                </IconButton>
                <IconButton aria-label="show cart items">
                    <ShoppingCartIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default SecondNavbar;
