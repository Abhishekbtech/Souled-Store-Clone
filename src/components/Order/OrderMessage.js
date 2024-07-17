import React from 'react';
import { useNavigate } from 'react-router-dom';

function OrderMessage() {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400 p-4">
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <h2 className="text-2xl font-semibold mb-4">Thank you for your order!</h2>
                <p className="text-gray-700 mb-6">Your order has been placed successfully. We appreciate your business and hope you enjoy your purchase!</p>
                <button 
                    onClick={handleGoHome} 
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                >
                    Go to Home Page
                </button>
            </div>
        </div>
    );
}

export default OrderMessage;
