import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function WishListPage() {
    const [wishlist, setWishlist] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState('');
    const [addedToCart, setAddedToCart] = useState(new Set());

    useEffect(() => {
        const fetchWishlist = async () => {
            try {
                const token = sessionStorage.getItem('token');
                if (!token) {
                    navigate('/signup');
                    return;
                }
                const response = await axios.get('https://academics.newtonschool.co/api/v1/ecommerce/wishlist', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'projectID': '0e7aaiqkxs51'
                    }
                });
                setWishlist(response.data.data.items);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchWishlist();
    }, [navigate]);

    const removeFromWishlist = async (productId) => {
        try {
            const token = sessionStorage.getItem('token');
            await axios.delete(`https://academics.newtonschool.co/api/v1/ecommerce/wishlist/${productId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'projectID': '0e7aaiqkxs51'
                }
            });
            setWishlist(wishlist.filter(item => item.products._id !== productId));
        } catch (error) {
            console.error(error);
        }
    };

    const addToCart = async (productId) => {
        const token = sessionStorage.getItem('token');
        try {
            const response = await axios.patch(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${productId}`, {
                quantity: '1',
                size: 's'
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'projectID': '0e7aaiqkxs51'
                }
            });
            console.log('Item added to cart:', response.data);
            showPopupMessage('Item added to cart');
            setMessage('Item added to cart');
            setAddedToCart(prevState => new Set(prevState).add(productId));
            setWishlist(wishlist.filter(item => item.products._id !== productId));
        } catch (error) {
            console.error('Error adding item to cart:', error);
        }
    };

    const showPopupMessage = (message) => {
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 5000);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading wishlist.</div>;

    return (
        <div className="p-4 m-2 sm:m-5">
            {showPopup && (
                <div className="text-white fixed top-30 right-0 mb-4 mr-4 bg-red-600 p-4 shadow-md rounded-md">
                    <p>{message}</p>
                </div>
            )}
            <h2 className="text-xl sm:text-2xl font-bold mb-4">My Wishlist ({wishlist.length} items)</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {wishlist.map(item => (
                    <div key={item.products._id} className="border rounded-lg shadow-lg relative">
                        <img src={item.products.displayImage} alt={item.products.name} className="w-full h-50 object-cover rounded-t-lg" />
                        <div className="p-4">
                            <h3 className="overflow-hidden whitespace-nowrap overflow-ellipsis cursor-pointer">{item.products.name}</h3>
                            <p className="text-red-500 font-bold">{`₹${item.products.price}`}</p>
                            <p className="text-gray-500 text-sm">MRP incl. of all taxes</p>
                            <button
                                className="mt-2 bg-green-500 text-white px-4 py-2 rounded w-full"
                                onClick={() => addToCart(item.products._id)}
                                disabled={addedToCart.has(item.products._id)}
                            >
                                {addedToCart.has(item.products._id) ? 'Added to Cart' : 'Move to Cart'}
                            </button>
                        </div>
                        <button
                            className="absolute top-2 right-2 text-red-500 bg-white rounded-full w-6 h-6 flex items-center justify-center"
                            onClick={() => removeFromWishlist(item.products._id)}
                        >
                            &times;
                        </button>
                    </div>
                ))}
            </div>
            {wishlist.length === 0 && (
                <div className="text-center mt-4">
                    <p>Your wishlist is empty.</p>
                    <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                        Add Products
                    </button>
                </div>
            )}
        </div>
    );
}

export default WishListPage;
