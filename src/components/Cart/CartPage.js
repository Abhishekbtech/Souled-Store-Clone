import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CartPage() {
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const fetchCartItems = async () => {
            const token = sessionStorage.getItem('token');
            const response = await axios.get('/api/v1/ecommerce/cart', {
                headers: {
                    Authorization: `Bearer ${token}`,
                    projectID: 'Your_ProjectId'
                }
            });
            setCartItems(response.data.items);
            setTotalAmount(response.data.totalAmount);
        };

        fetchCartItems();
    }, []);

    const removeFromCart = async (productId) => {
        const token = sessionStorage.getItem('token');
        await axios.delete(`/api/v1/ecommerce/cart/${productId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                projectID: 'Your_ProjectId'
            }
        });
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
    };

    return (
        <div>
            <h1>My Bag</h1>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <div>
                            <p>{item.name}</p>
                            <p>Size: {item.size}</p>
                            <p>Quantity: {item.quantity}</p>
                            <p>Price: {item.price}</p>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                            <button>Move to Wishlist</button>
                        </div>
                    </li>
                ))}
            </ul>
            <div>
                <p>Total Amount: {totalAmount}</p>
                <button>Place Order</button>
            </div>
        </div>
    );
}

export default CartPage