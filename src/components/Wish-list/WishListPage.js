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
                    <div key={item.products._id} className="border p-4 rounded-lg shadow-lg relative">
                        <img src={item.products.displayImage} alt={item.products.name} className="w-full h-48 object-cover rounded-lg" />
                        <div className="mt-2">
                            <h3 className="text-lg font-semibold">{item.products.name}</h3>
                            <p>Ratings: {item.products.ratings}</p>
                            <p className="text-red-500">{`₹${item.products.price}`}</p>
                            <button
                                className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
                                onClick={() => addToCart(item.products._id)}
                            >
                                Move to Cart
                            </button>
                        </div>
                        <button
                            className="absolute top-2 right-2 text-red-500"
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
