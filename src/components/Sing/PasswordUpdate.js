import React, { useState } from 'react';
import axios from 'axios';

const PasswordUpdate = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handlePasswordUpdate = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        const headers = { projectID: '0e7aaiqkxs51' };
        const token = sessionStorage.getItem('token');

        if (!token) {
            setError('You need to be logged in to update your password.');
            return;
        }

        try {
            await axios.post('/api/v1/user/forgotPassword', {
                name,
                email,
                password: newPassword,
                appType: 'ecommerce'
            }, { headers });
            setSuccess('Password updated successfully!');
        } catch (error) {
            setError('Password update failed. Please try again.');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Update Password</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {success && <p className="text-green-500 mb-4">{success}</p>}
            <form onSubmit={handlePasswordUpdate}>
                <div className="mb-4">
                    <label htmlFor="name" className="block font-semibold mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border p-2 rounded-md w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block font-semibold mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border p-2 rounded-md w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="newPassword" className="block font-semibold mb-2">New Password</label>
                    <input
                        type="password"
                        id="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="border p-2 rounded-md w-full"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                    Update Password
                </button>
            </form>
        </div>
    );
};

export default PasswordUpdate;
