import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Address() {
    const [totalAmount, setTotalAmount] = useState(0);
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

    return (
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
            <h1 className="text-2xl font-bold mb-4">My Address</h1>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-8">
                    
                </div>
                <div className="lg:col-span-4 bg-gray-50 p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-2">Billing Details</h2>
                    <hr/>
                    <div className="space-y-4 mt-4">
                        <p className="flex justify-between">
                            <span>Cart Total (Excl. of all taxes):</span>
                            <span>₹{totalAmount}</span>
                        </p>
                        <p className="flex justify-between">
                            <span>Discount:</span>
                            <span className="text-red-500">₹ 0</span>
                        </p>
                        <p className="flex justify-between">
                            <span>Shipping Charges:</span>
                            <span className="text-red-500">₹ 0</span>
                        </p>
                        <p className="flex justify-between text-lg font-semibold">
                            <span>Total Amount:</span>
                            <span>₹{totalAmount}</span>
                        </p>
                        <button className="w-full py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 mb-4" onClick={() => navigate('/payment')}>
                            Continue Payment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Address

