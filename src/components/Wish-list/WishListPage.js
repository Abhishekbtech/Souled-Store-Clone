import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function WishListPage() {
    const [wishlist, setWishlist] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

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
        // Implement add to cart functionality
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading wishlist.</div>;

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">My Wishlist ({wishlist.length} items)</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {wishlist.map(item => (
                    <div key={item.products._id} className="border rounded-md overflow-hidden hover:shadow-md hover:scale-105 transition duration-300">
                        <img src={item.products.displayImage} alt={item.products.name} className="w-30 h-40" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2">{item.products.name}</h3>
                            <p className="text-gray-500 mb-1">{item.products.category}</p>
                            <p className="text-red-500 font-bold">{`₹${item.products.price}`} <span className="line-through text-gray-500 ml-2">{`₹${item.products.originalPrice}`}</span></p>
                            <p className="text-green-500">{`₹${item.products.discountedPrice} OFF`}</p>
                            <p className="text-gray-500 text-sm">MRP incl. of all taxes</p>
                            <button
                                className="mt-2 bg-green-500 text-white px-4 py-2 rounded w-full"
                                onClick={() => addToCart(item.products._id)}
                            >
                                Move to Cart
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
