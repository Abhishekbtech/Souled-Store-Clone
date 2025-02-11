import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Grid, Typography, Paper, Divider } from '@mui/material';

function Address() {
    const [totalAmount, setTotalAmount] = useState(0);
    const [address, setAddress] = useState({
        fullName: '',
        street: '',
        city: '',
        state: '',
        country: '',
        zip: ''
    });
    const [isFormValid, setIsFormValid] = useState(false);
    const [zipError, setZipError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCartItems = async () => {
            const token = sessionStorage.getItem('token');
            try {
                const response = await axios.get('https://academics.newtonschool.co/api/v1/ecommerce/cart', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        projectID: '0e7aaiqkxs51'
                    }
                });
                setTotalAmount(response.data.data.totalPrice);
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };

        fetchCartItems();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === 'zip') {
            const zipRegex = /^\d{0,6}$/;
            if (!zipRegex.test(value)) {
                setZipError('ZIP Code must be exactly 6 digits');
                return;
            } else {
                setZipError('');
            }
        }

        setAddress(prevAddress => {
            const newAddress = { ...prevAddress, [name]: value };
            const formIsValid = Object.values(newAddress).every(field => field.trim() !== '') && !zipError && newAddress.zip.length === 6;
            setIsFormValid(formIsValid);
            return newAddress;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/payment', { state: { address, totalAmount } });
    };

    return (
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
            <Typography variant="h4" className="mb-6">My Address</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} lg={8}>
                    <Paper elevation={3} className="p-4">
                        <form className="space-y-4">
                            <TextField
                                fullWidth
                                id="fullName"
                                name="fullName"
                                label="Full Name"
                                variant="outlined"
                                value={address.fullName}
                                onChange={handleInputChange}
                                className="mb-3"
                            />
                            <TextField
                                fullWidth
                                id="street"
                                name="street"
                                label="Street"
                                variant="outlined"
                                value={address.street}
                                onChange={handleInputChange}
                                className="mb-3"
                            />
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        id="city"
                                        name="city"
                                        label="City"
                                        variant="outlined"
                                        value={address.city}
                                        onChange={handleInputChange}
                                        className="mb-3"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        id="state"
                                        name="state"
                                        label="State"
                                        variant="outlined"
                                        value={address.state}
                                        onChange={handleInputChange}
                                        className="mb-3"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        id="country"
                                        name="country"
                                        label="Country"
                                        variant="outlined"
                                        value={address.country}
                                        onChange={handleInputChange}
                                        className="mb-3"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        id="zip"
                                        name="zip"
                                        label="ZIP Code"
                                        variant="outlined"
                                        value={address.zip}
                                        onChange={handleInputChange}
                                        className="mb-3"
                                        error={!!zipError}
                                        helperText={zipError}
                                        inputProps={{ maxLength: 6 }}
                                    />
                                </Grid>
                            </Grid>
                            
                        </form>
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
                                disabled={!isFormValid}
                                type="submit"
                                onClick={handleSubmit}
                            >
                                Continue Payment
                            </Button>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default Address;
