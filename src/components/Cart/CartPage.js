import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

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
            setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
        } catch (error) {
            console.error('Error removing item from cart:', error);
        }
    };

    return (
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
            <h1 className="text-2xl font-bold mb-4">My Bag</h1>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-8">
                    <ul className="divide-y divide-gray-200">
                        {cartItems.map((item) => (
                            <li key={item.id} className="flex py-6">
                                <img className="h-24 w-24 object-cover" src={item.product.displayImage} alt={item.name} />
                                <div className="ml-4 flex flex-col justify-between w-full">
                                    <div>
                                        <h3 className="text-lg font-medium">{item.name}</h3>
                                        <p className="text-sm text-gray-500">{item.product.description}</p>
                                        <div className="flex space-x-4 mt-2">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">Size</label>
                                                <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                                                    <option>{item.size}</option>
                                                    {/* Add more sizes as needed */}
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">Qty</label>
                                                <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                                                    <option>{item.quantity}</option>
                                                    {/* Add more quantities as needed */}
                                                </select>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-500 mt-2">₹{item.product.price}</p>
                                        <p className="text-sm text-gray-500 mt-2">MRP incl. of all taxes</p>
                                        <p className="text-sm text-red-500 mt-2">₹1000 OFF</p>
                                    </div>
                                    <div className="flex space-x-2 mt-4">
                                        <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                                            Remove
                                        </button>
                                        <button className="text-blue-500 hover:text-blue-700">
                                            Move to Wishlist
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="lg:col-span-4 bg-gray-50 p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Place Order</h2>
                    <button className="w-full py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 mb-4">
                        Place Order
                    </button>
                    <div className="bg-yellow-100 p-4 rounded-lg text-yellow-800 mb-4">
                        Save an additional ₹223.21 on this order.
                    </div>
                    <div className="space-y-4">
                        <div className="border-t pt-4">
                            <button className="flex items-center justify-between w-full text-left text-gray-500 hover:text-gray-700">
                                Apply Coupon <span>&#x25BC;</span>
                            </button>
                        </div>
                        <div className="border-t pt-4">
                            <button className="flex items-center justify-between w-full text-left text-gray-500 hover:text-gray-700">
                                Gift Voucher <span>&#x25BC;</span>
                            </button>
                        </div>
                        <div className="border-t pt-4 flex items-center">
                            <label className="text-gray-500 hover:text-gray-700 flex-grow">Gift Wrap (₹25)</label>
                            <input type="checkbox" className="form-checkbox h-4 w-4 text-green-600 transition duration-150 ease-in-out" />
                        </div>
                        <div className="border-t pt-4">
                            <button className="flex items-center justify-between w-full text-left text-gray-500 hover:text-gray-700">
                                TSS Money / TSS Points <span>&#x25BC;</span>
                            </button>
                        </div>
                    </div>
                    <h2 className="text-xl font-semibold mt-6 mb-4">Billing Details</h2>
                    <div className="space-y-4">
                        <p className="flex justify-between">
                            <span>Cart Total (Excl. of all taxes):</span>
                            <span>₹{totalAmount}</span>
                        </p>
                        <p className="flex justify-between">
                            <span>Discount:</span>
                            <span className="text-red-500">- ₹1000.00</span>
                        </p>
                        <p className="flex justify-between">
                            <span>GST:</span>
                            <span>₹481.82</span>
                        </p>
                        <p className="flex justify-between">
                            <span>Shipping Charges:</span>
                            <span>₹0.00</span>
                        </p>
                        <p className="flex justify-between text-lg font-semibold">
                            <span>Total Amount:</span>
                            <span>₹{totalAmount + 481.82 - 1000}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartPage;
