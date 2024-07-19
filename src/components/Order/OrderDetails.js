import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function OrderDetails() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchOrders = async () => {
            const token = sessionStorage.getItem('token');
            try {
                const response = await axios.get('https://academics.newtonschool.co/api/v1/ecommerce/order/', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        projectID: '0e7aaiqkxs51',
                    },
                });
                setOrders(response.data.data);
            } catch (error) {
                console.error('Error fetching orders:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    const goToHomePage = () => {
        navigate('/');
    };

    return (
        <div className="container mx-auto p-4">
            <div className="max-w-screen-lg mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold">Your orders</h1>
                    <span className="text-2xl font-semibold">Total orders: {orders.length}</span>
                </div>
                
                {loading ? (
                    <p>Loading orders...</p>
                ) : orders.length === 0 ? (
                    <div className="text-center text-gray-500">
                        <p>You have no orders at the moment.</p>
                        <button
                            onClick={goToHomePage}
                            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
                        >
                            Go to Home
                        </button>
                    </div>
                ) : (
                    <ul>
                        {orders.map(({ order, createdAt }) => (
                            <li key={order._id} className="mb-6 border rounded-lg shadow-lg p-4">
                                <div className="flex items-center">
                                    <img
                                        src={order.items[0].product.displayImage}
                                        alt={order.items[0].product.name}
                                        className="w-48 h-64 object-cover rounded-md mr-4"
                                    />

                                    <div>
                                        <h2 className="text-xl font-semibold">{order.items[0].product.name}</h2>
                                        <p className="text-gray-500">Order placed on {new Date(createdAt).toLocaleDateString()}</p>
                                        <p className="text-lg font-bold">Price: ₹ {order.items[0].product.price}</p>
                                        <p className="text-sm">(Incl. all Taxes)</p>
                                        <p className="text-sm line-through">MRP ₹ {order.items[0].product.price + Math.floor(order.items[0].product.price * 0.3)}</p>
                                        <p className="text-green-600 font-semibold">You got {Math.floor(Math.random() * 50) + 10}% OFF</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default OrderDetails;
