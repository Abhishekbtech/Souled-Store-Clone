import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const history = useHistory();

    const toggleForm = () => {
        setIsLogin(!isLogin);
        setError('');
        setSuccess('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        const headers = { projectID: 'YOUR_PROJECT_ID' };

        if (isLogin) {
            // Handle login
            try {
                const response = await axios.post('/api/v1/user/login', {
                    email,
                    password,
                    appType: 'ecommerce'
                }, { headers });
                sessionStorage.setItem('token', response.data.token);
                history.push('/'); // Redirect to home page or any protected route
            } catch (error) {
                setError('Login failed. Please check your credentials.');
            }
        } else {
            // Handle registration
            try {
                await axios.post('/api/v1/user/signup', {
                    name,
                    email,
                    password,
                    appType: 'ecommerce'
                }, { headers });
                setSuccess('Registration successful! Please log in.');
                setIsLogin(true);
            } catch (error) {
                setError('Registration failed. Please try again.');
            }
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">{isLogin ? 'Login' : 'Register'}</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {success && <p className="text-green-500 mb-4">{success}</p>}
            <form onSubmit={handleSubmit}>
                {!isLogin && (
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
                )}
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
                    <label htmlFor="password" className="block font-semibold mb-2">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border p-2 rounded-md w-full"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                    {isLogin ? 'Login' : 'Register'}
                </button>
            </form>
            <p className="mt-4">
                {isLogin ? "Don't have an account?" : 'Already have an account?'}
                <button onClick={toggleForm} className="text-blue-500 ml-2">
                    {isLogin ? 'Register' : 'Login'}
                </button>
            </p>
        </div>
    );
};

export default AuthForm;
