import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    console.log("poath", location.state)
    const from = '/';

    const toggleForm = () => {
        setIsLogin(!isLogin);
        setIsForgotPassword(false);
        setError('');
        setSuccess('');
    };

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        const headers = { projectID: '0e7aaiqkxs51' };

        try {
            await axios.post('https://academics.newtonschool.co/api/v1/user/forgotPassword', {
                name,
                email,
                password,
                appType: 'ecommerce'
            }, { headers });
            setSuccess('Password reset successful! Please log in with your new password.');
            setIsLogin(true);
            setIsForgotPassword(false);
        } catch (error) {
            setError('Password reset failed. Please check your details.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        const headers = { projectID: '0e7aaiqkxs51' };
    
        if (isLogin) {
            try {
                const response = await axios.post('https://academics.newtonschool.co/api/v1/user/login', {
                    email,
                    password,
                    appType: 'ecommerce'
                }, { headers });
                sessionStorage.setItem('token', response.data.token);
                sessionStorage.setItem('name', response.data.data.user.name);
                navigate(from, { replace: true });
                window.location.reload();
            } catch (error) {
                setError('Login failed. Please check your credentials.');
            }
        } else {
            try {
                const response = await axios.post('https://academics.newtonschool.co/api/v1/user/signup', {
                    name,
                    email,
                    password,
                    appType: 'ecommerce'
                }, { headers });
                sessionStorage.setItem('token', response.data.token);
                sessionStorage.setItem('name', response.data.data.user.name);
                setSuccess('Registration successful! Please log in.');
                setIsLogin(true);
                navigate(from, { replace: true });
                window.location.reload();
            } catch (error) {
                setError('Registration failed. Please try again.');
            }
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 shadow-md rounded-md mt-5">
            <div className="flex mb-4">
                <button
                    className={`flex-1 py-2 ${isLogin && !isForgotPassword ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                    onClick={() => { setIsLogin(true); setIsForgotPassword(false); }}
                >
                    Login
                </button>
                <button
                    className={`flex-1 py-2 ${!isLogin && !isForgotPassword ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                    onClick={() => { setIsLogin(false); setIsForgotPassword(false); }}
                >
                    Register
                </button>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-center">{isForgotPassword ? 'Forgot Password' : isLogin ? 'Login' : 'Register'}</h2>

            {error && <p className="text-red-500 mb-4">{error}</p>}
            {success && <p className="text-green-500 mb-4">{success}</p>}
            
            {isForgotPassword ? (
                <form onSubmit={handleForgotPassword}>
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
                        <label htmlFor="password" className="block font-semibold mb-2">New Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border p-2 rounded-md w-full"
                            required
                        />
                    </div>
                    <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md w-full">
                        Reset Password
                    </button>
                </form>
            ) : (
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
                    <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md w-full">
                        {isLogin ? 'Login' : 'Register'}
                    </button>
                </form>
            )}

            {!isForgotPassword && (
                <p className="mt-4 text-center">
                    {isLogin ? (
                        <>
                            Don't have an account?
                            <button onClick={toggleForm} className="text-green-600 ml-2">Register</button>
                            <br />
                            Forgot your password?
                            <button onClick={() => setIsForgotPassword(true)} className="text-green-600 ml-2">Reset Password</button>
                        </>
                    ) : (
                        <>
                            Already have an account?
                            <button onClick={toggleForm} className="text-green-600 ml-2">Login</button>
                        </>
                    )}
                </p>
            )}
        </div>
    );
};

export default AuthForm;
