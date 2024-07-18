import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import {
    Grid,
    Typography,
    Paper,
    Select,
    MenuItem,
    Button,
    Divider,
    FormControl,
    InputLabel,
    IconButton,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    Avatar,
    List,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';

function CartPage() {
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const fetchCartItems = async () => {
            const token = sessionStorage.getItem('token');
            if (!token) {
                navigate('/signup', { state: { from: location } });
                return;
            }
            try {
                const response = await axios.get('https://academics.newtonschool.co/api/v1/ecommerce/cart', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        projectID: '0e7aaiqkxs51'
                    }
                });
                setCartItems(response.data.data.items);
                setTotalAmount(response.data.data.totalPrice);
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };

        fetchCartItems();
    }, [navigate, location]);

    const removeFromCart = async (productId) => {
        const token = sessionStorage.getItem('token');
        try {
            await axios.delete(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${productId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    projectID: '0e7aaiqkxs51'
                }
            });
            setCartItems((prevItems) => prevItems.filter((item) => item.product._id !== productId));
        } catch (error) {
            console.error('Error removing item from cart:', error);
        }
    };

    const moveToWishlist = async (productId) => {
        console.log(`Moving product ${productId} to wishlist`);
    };

    return (
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
            <Typography variant="h4" className="mb-4">My Bag</Typography>
            {cartItems.length === 0 ? (
                <div className="p-4 text-center space-y-4">
                    <Typography variant="body1">
                        Your cart is empty. Continue shopping to add items.
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        className="mt-4"
                        onClick={() => navigate('/')}
                    >
                        Continue shopping
                    </Button>
                </div>
            ) : (
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={8}>
                        <Paper elevation={3} className="p-1">
                            <List>
                                {cartItems.map((item) => (
                                    <ListItem
                                        key={item._id}
                                        alignItems="center"
                                        className="flex items-center space-x-4"
                                        style={{ display: 'flex', justifyContent: 'space-between' }}
                                    >
                                        <div className="flex items-center space-x-4">
                                            <Avatar
                                                variant="rounded"
                                                alt={item.product.name}
                                                src={item.product.displayImage}
                                                sx={{ width: 90, height: 150 }} // Adjust size here
                                            />
                                            <ListItemText
                                                primary={
                                                    <Typography variant="subtitle1" className="font-medium">{item.product.name}</Typography>
                                                }
                                                secondary={
                                                    <>
                                                        <Typography variant="body2" className="text-gray-500 mb-10">{item.product.description}</Typography>
                                                        <FormControl variant="outlined" size="small" className="mt-40">
                                                            <InputLabel id={`size-label-${item._id}`}>Size</InputLabel>
                                                            <Select
                                                                labelId={`size-label-${item._id}`}
                                                                id={`size-${item._id}`}
                                                                value={item.size}
                                                                label="Size"
                                                                disabled
                                                            >
                                                                <MenuItem value={item.size}>{item.size}</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                        <FormControl variant="outlined" size="small" className="mt-2">
                                                            <InputLabel id={`qty-label-${item._id}`}>Qty</InputLabel>
                                                            <Select
                                                                labelId={`qty-label-${item._id}`}
                                                                id={`qty-${item._id}`}
                                                                value={item.quantity}
                                                                label="Qty"
                                                                disabled
                                                            >
                                                                <MenuItem value={item.quantity}>{item.quantity}</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </>
                                                }
                                            />
                                        </div>
                                        <div className="text-right">
                                            <Typography variant="body1" className="font-medium mb-2">₹{item.product.price}</Typography>
                                            <Typography variant="body2" className="text-gray-500 mb-4">MRP incl. of all taxes</Typography>
                                            <IconButton edge="end" aria-label="delete" onClick={() => removeFromCart(item.product._id)}>
                                                <DeleteIcon />
                                            </IconButton>
                                            <IconButton edge="end" aria-label="move-to-wishlist" onClick={() => moveToWishlist(item.product._id)}>
                                                <FavoriteIcon />
                                            </IconButton>
                                        </div>
                                    </ListItem>
                                ))}
                            </List>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Paper elevation={3} className="p-4">
                            <Typography variant="h5" className="mb-2">Billing Details</Typography>
                            <Divider className="mb-2" />
                            <div className="space-y-4 mt-4">
                                <Typography variant="body1" className="flex justify-between">
                                    <span>Cart Total (Excl. of all taxes):</span>
                                    <span>₹{totalAmount}</span>
                                </Typography>
                                <Typography variant="body1" className="flex justify-between">
                                    <span>Discount:</span>
                                    <span className="text-red-500">₹ 0</span>
                                </Typography>
                                <Typography variant="body1" className="flex justify-between">
                                    <span>Shipping Charges:</span>
                                    <span className="text-red-500">₹ 0</span>
                                </Typography>
                                <Typography variant="body1" className="flex justify-between font-semibold">
                                    <span>Total Amount:</span>
                                    <span>₹{totalAmount}</span>
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    className="py-2"
                                    onClick={() => navigate('/address')}
                                >
                                    Place Order
                                </Button>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            )}
        </div>
    );
}

export default CartPage;
