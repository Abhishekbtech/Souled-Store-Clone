import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Grid, Typography, Paper, Divider } from '@mui/material';

function Payment() {
    const [totalAmount, setTotalAmount] = useState(0);
    const [payment, setPayment] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });
    const [errors, setErrors] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });
    const [isFormValid, setIsFormValid] = useState(false);
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
        setPayment(prevPayment => ({
            ...prevPayment,
            [name]: value
        }));

        // Validate field on change
        validateField(name, value);
    };

    const validateField = (name, value) => {
        let error = '';
        if (name === 'cardNumber') {
            if (!/^\d{16}$/.test(value)) {
                error = 'Card Number must be 16 digits long.';
            }
        } else if (name === 'expiryDate') {
            if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(value)) {
                error = 'Expiry Date must be in MM/YY format.';
            }
        } else if (name === 'cvv') {
            if (!/^\d{3}$/.test(value)) {
                error = 'CVV must be 3 digits long.';
            }
        }
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: error
        }));

        // Check if the form is valid
        const formIsValid = Object.values(payment).every(field => field.trim() !== '') && !error;
        setIsFormValid(formIsValid);
        return error;
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        validateField(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = Object.keys(payment).every(field => validateField(field, payment[field]) === '');
        setIsFormValid(isValid);
        if (isValid) {
            // Here you can add logic to handle form submission, e.g., sending data to backend
            console.log('Payment details submitted:', payment);
            // You can also navigate to another page or show a success message
        }
    };

    return (
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
            <Typography variant="h4" className="mb-6">Payment Page</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} lg={8}>
                    <Paper elevation={3} className="p-4">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <TextField
                                fullWidth
                                id="cardNumber"
                                name="cardNumber"
                                label="Card Number"
                                variant="outlined"
                                value={payment.cardNumber}
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                error={Boolean(errors.cardNumber)}
                                helperText={errors.cardNumber}
                                className="mb-3"
                                inputProps={{
                                    maxLength: 16,
                                    minLength: 16,
                                    inputMode: 'numeric',
                                    pattern: '[0-9]*'
                                }}
                            />
                            <TextField
                                fullWidth
                                id="expiryDate"
                                name="expiryDate"
                                label="Expiry Date (MM/YY)"
                                variant="outlined"
                                value={payment.expiryDate}
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                error={Boolean(errors.expiryDate)}
                                helperText={errors.expiryDate}
                                className="mb-3"
                                inputProps={{
                                    inputMode: 'numeric',
                                    pattern: '(0[1-9]|1[0-2])\/[0-9]{2}'
                                }}
                            />
                            <TextField
                                fullWidth
                                type='password'
                                id="cvv"
                                name="cvv"
                                label="CVV"
                                variant="outlined"
                                value={payment.cvv}
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                error={Boolean(errors.cvv)}
                                helperText={errors.cvv}
                                className="mb-3"
                                inputProps={{
                                    maxLength: 3,
                                    inputMode: 'numeric',
                                    pattern: '[0-9]*'
                                }}
                            />
                            
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
                            >
                                Confirm Order
                            </Button>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default Payment;
