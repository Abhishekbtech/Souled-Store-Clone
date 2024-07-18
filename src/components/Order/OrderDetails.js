import React, { useEffect, useState } from 'react';
import axios from 'axios';

function OrderDetails() {
    const [orders, setOrders] = useState([]);

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
            }
        };

        fetchOrders();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <div className="max-w-screen-lg mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold">Your orders</h1>
                    <span className="text-2xl font-semibold">Total orders: {orders.length}</span>
                </div>
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
            </div>
        </div>
    );
}

export default OrderDetails;
