import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Address() {
    const [totalAmount, setTotalAmount] = useState(0);
    const [address, setAddress] = useState({
        fullName: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        zip: ''
    });
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
        setAddress({ ...address, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add logic to handle form submission, e.g., sending data to backend
        console.log('Address submitted:', address);
    };

    return (
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
            <h1 className="text-2xl font-bold mb-4">My Address</h1>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-8">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input type="text" id="fullName" name="fullName" value={address.fullName} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm" />
                        </div>
                        <div>
                            <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700">Address Line 1</label>
                            <input type="text" id="addressLine1" name="addressLine1" value={address.addressLine1} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm" />
                        </div>
                        <div>
                            <label htmlFor="addressLine2" className="block text-sm font-medium text-gray-700">Address Line 2</label>
                            <input type="text" id="addressLine2" name="addressLine2" value={address.addressLine2} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                                <input type="text" id="city" name="city" value={address.city} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                                <input type="text" id="state" name="state" value={address.state} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="zip" className="block text-sm font-medium text-gray-700">ZIP Code</label>
                            <input type="text" id="zip" name="zip" value={address.zip} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm" />
                        </div>
                        <button type="submit" className="w-full py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 mb-4">
                            Save Address
                        </button>
                    </form>
                </div>
                <div className="lg:col-span-4 bg-gray-50 p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-2">Billing Details</h2>
                    <hr />
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

