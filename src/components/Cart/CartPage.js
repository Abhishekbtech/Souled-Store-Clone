import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';

function CartPage() {
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        fetchCartItems();
    }, []);

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

    const removeFromCart = async (productId) => {
        const token = sessionStorage.getItem('token');
        try {
            await axios.delete(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${productId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    projectID: '0e7aaiqkxs51'
                }
            });
            fetchCartItems();
            showPopupMessage('Item Remove from Cart');
        } catch (error) {
            console.error('Error removing item from cart:', error);
        }
    };

    const moveToWishlist = async (productId) => {
        const token = sessionStorage.getItem('token');
        try {
            // Remove from cart
            await axios.delete(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${productId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    projectID: '0e7aaiqkxs51'
                }
            });
            fetchCartItems();
            showPopupMessage('Item added to wishlist');
            // Add to wishlist
            await axios.patch('https://academics.newtonschool.co/api/v1/ecommerce/wishlist', {
                productId: productId
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'projectID': '0e7aaiqkxs51'
                }
            });

        } catch (error) {
            console.error('Error moving item to wishlist:', error);
        }
    };

    const showPopupMessage = (message) => {
        setMessage(message)
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 5000);
    };

    return (
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
            {showPopup && (
                <div className="text-white fixed top-30 right-0 mb-4 mr-4 bg-red-600 p-4 shadow-md rounded-md">
                    <p>{message}</p>
                </div>
            )}
            <h1 className="text-2xl sm:text-4xl font-bold mb-8">My Bag</h1>
            {cartItems.length === 0 ? (
                <div className="p-4 text-center space-y-6">
                    <p className="text-lg">
                        Your cart is empty. Continue shopping to add items.
                    </p>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                        onClick={() => navigate('/')}
                    >
                        Continue shopping
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="lg:col-span-2 space-y-6">
                        {cartItems.map((item) => (
                            <div key={item._id} className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded shadow-md">

                                <div className="flex items-center space-x-4">
                                    <img
                                        alt={item.product.name}
                                        src={item.product.displayImage}
                                        className="w-32 h-32 sm:w-48 sm:h-48 rounded"
                                    />
                                    <div className="flex-1">
                                        <h2 className="text-base sm:text-lg">{item.product.name}</h2>
                                        <div className="flex space-x-4 mt-2">
                                            <div className='border p-1'>
                                                <label className="block ml-3 text-gray-700">Size</label>
                                                <p className="mt-1 ml-2 block w-full pl-3 pr-10 py-2 text-base text-gray-700 sm:text-sm">
                                                    {item.size}
                                                </p>
                                            </div>
                                            <div className='border p-1'>
                                                <label className="block ml-3 text-gray-700">Qty</label>
                                                <p className="mt-1 ml-2 block w-full pl-3 pr-10 py-2 text-base text-gray-700 sm:text-sm">
                                                    {item.quantity}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-right mt-4 sm:mt-0">
                                    <p className="font-medium text-lg">₹{item.product.price}</p>
                                    <p className="text-gray-500">Incl. of all taxes</p>
                                    <button onClick={() => removeFromCart(item.product._id)} className="text-red-500 mr-5 mt-5 sm:mt-0 hover:text-red-700">
                                        <DeleteIcon />
                                    </button>
                                    <button onClick={() => moveToWishlist(item.product._id)} className="text-pink-500 hover:text-pink-700">
                                        <FavoriteIcon />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white p-4 rounded shadow-md space-y-6">
                        <h2 className="text-2xl font-bold mb-2">Billing Details</h2>
                        <hr className="mb-2" />
                        <div className="space-y-4">
                            <p className="flex justify-between text-lg">
                                <span>Cart Total (Excl. of all taxes):</span>
                                <span>₹{totalAmount}</span>
                            </p>
                            <p className="flex justify-between text-lg">
                                <span>Discount:</span>
                                <span className="text-red-500">₹ 0</span>
                            </p>
                            <p className="flex justify-between text-lg">
                                <span>Shipping Charges:</span>
                                <span className="text-red-500">₹ 0</span>
                            </p>
                            <p className="flex justify-between text-lg font-semibold">
                                <span>Total Amount:</span>
                                <span>₹{totalAmount}</span>
                            </p>
                            <button
                                className="bg-blue-500 text-white w-full py-2 rounded"
                                onClick={() => navigate('/address')}
                            >
                                Place Order
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartPage;