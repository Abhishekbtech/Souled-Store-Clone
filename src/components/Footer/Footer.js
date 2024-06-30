import React from 'react';
import { Facebook, Instagram, YouTube, Twitter } from '@mui/icons-material';
import googlePlay from '../Image/Google_Play-Badge-Logo.wine.svg';
// import appStore from '../assets/app-store.png';

function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-700">
            <div className="container mx-auto py-8">
                <div className="text-center bg-red-600 text-white py-4">
                    <h2 className="text-xl font-bold">HOMEGROWN INDIAN BRAND</h2>
                    <p className="text-2xl">Over <strong>6 Million</strong> Happy Customers</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-8 text-center md:text-left">
                    <div>
                        <h3 className="text-red-600 font-bold">NEED HELP</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">Contact Us</a></li>
                            <li><a href="#" className="hover:underline">Track Order</a></li>
                            <li><a href="#" className="hover:underline">Returns & Refunds</a></li>
                            <li><a href="#" className="hover:underline">FAQs</a></li>
                            <li><a href="#" className="hover:underline">My Account</a></li>
                        </ul>
                        <p className="mt-4">COD Available</p>
                        <p>30 Days Easy Returns</p>
                    </div>
                    <div>
                        <h3 className="text-red-600 font-bold">COMPANY</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">About Us</a></li>
                            <li><a href="#" className="hover:underline">Careers</a></li>
                            <li><a href="#" className="hover:underline">Community Initiatives</a></li>
                            <li><a href="#" className="hover:underline">Souled Army</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-red-600 font-bold">MORE INFO</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">T&C</a></li>
                            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                            <li><a href="#" className="hover:underline">Sitemap</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-red-600 font-bold">STORE NEAR ME</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">Bandra</a></li>
                            <li><a href="#" className="hover:underline">Thane</a></li>
                            <li><a href="#" className="hover:underline">Colaba</a></li>
                            <li><a href="#" className="hover:underline">Palladium</a></li>
                            <li><a href="#" className="text-blue-600 hover:underline">View More</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center mt-8">
                    <div className="flex space-x-4 mb-4 md:mb-0">
                        <img src={googlePlay} alt="Google Play" className="h-12" />
                        <img src={googlePlay} alt="App Store" className="h-12" />
                    </div>
                    <div className="flex space-x-6">
                        <Facebook className="text-blue-600" />
                        <Instagram className="text-pink-500" />
                        <YouTube className="text-red-600" />
                        <Twitter className="text-blue-400" />
                    </div>
                </div>
                <div className="text-center mt-8">
                    <p className="text-gray-600">© The Souled Store 2024-25</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
