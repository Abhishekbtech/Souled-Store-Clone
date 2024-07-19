import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faSnapchatGhost, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Foo() {
    return (
        <footer className='bg-gray-300 text-gray-700 my-10'>
            <div className="bg-red-600 text-white text-center py-4">
                <p className="text-3xl font-semibold">HOMEGROWN INDIAN BRAND</p>
            </div>
            <div className="bg-white text-center py-4">
                <p className="text-4xl font-semibold">Over <span className="text-4xl font-bold">6 Million</span> Happy Customers</p>
            </div>
            <div className='mx-2 sm:mx-4 md:mx-10 lg:mx-20'>
                <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 p-4">
                    <div className="mx-4 my-5">
                        <h2 className="text-xl font-bold text-red-600">NEED HELP</h2>
                        <ul className="mt-4 font-bold">
                            <li>Contact Us</li>
                            <li>Track Order</li>
                            <li>Returns & Refunds</li>
                            <li>FAQs</li>
                            <li>My Account</li>
                        </ul>
                    </div>
                    <div className="mx-4 my-5">
                        <h2 className="text-xl font-bold text-red-600">COMPANY</h2>
                        <ul className="mt-4 font-bold">
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Community Initiatives</li>
                            <li>Souled Army</li>
                        </ul>
                    </div>
                    <div className="mx-4 my-5">
                        <h2 className="text-xl font-bold text-red-600">MORE INFO</h2>
                        <ul className="mt-4 font-bold">
                            <li>T&C</li>
                            <li>Privacy Policy</li>
                            <li>Sitemap</li>
                        </ul>
                    </div>
                    <div className="mx-4 my-5">
                        <h2 className="text-xl font-bold text-red-600">STORE NEAR ME</h2>
                        <ul className="mt-4 font-bold">
                            <li>Bandra</li>
                            <li>Thane</li>
                            <li>Colaba</li>
                            <li>Palladium</li>
                            <li className="text-blue-600">View More</li>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-start'>
                    <div className=" ml-10">
                        <p>₹ COD Available</p>
                        <p>↩ 30 Days Easy Returns</p>
                    </div>
                </div>
                <div className="flex justify-end mt-5">
                    <div className="container mx-auto px-5 text-center">
                        <p className="mb-2">📱 EXPERIENCE THE SOULED STORE APP</p>
                        <div className="flex justify-center space-x-4">
                            <a href="https://play.google.com/store/apps/details?id=com.thesouledstore"><img src="https://tss-static-images.gumlet.io/icons/play-store.png" alt="Google Play" className="h-10" /></a>
                            <a href="https://apps.apple.com/in/app/the-souled-store/id1493897434"><img src="https://tss-static-images.gumlet.io/icons/app-store.png" alt="App Store" className="h-10" /></a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end my-5 mr-10">
                    <div className="flex items-center space-x-4">
                        <h3 className='mt-1'>Follow us :</h3>
                        <a href="https://www.facebook.com/SouledStore" className="text-2xl text-blue-600"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="https://www.instagram.com/TheSouledStore/" className="text-2xl text-pink-500"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="https://www.snapchat.com/add/thesouledstore" className="text-2xl text-yellow-600"><FontAwesomeIcon icon={faSnapchatGhost} /></a>
                        <a href="https://twitter.com/TheSouledStore" className="text-2xl text-blue-500"><FontAwesomeIcon icon={faTwitter} /></a>
                    </div>
                </div>
                <div className='text-center'>
                    <h1 className='font-semibold text-xl'>© The Souled Store 2024-25</h1>
                </div>
            </div>
        </footer>
    )
}

export default Foo
