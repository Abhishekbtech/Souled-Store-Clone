import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faSnapchatGhost, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Foo() {
    return (
        <footer className='bg-gray-300 text-gray-700'>
            <div className="bg-red-600 text-white text-center py-4">
                <p className="text-3xl font-semibold">HOMEGROWN INDIAN BRAND</p>
            </div>
            <div className="bg-white text-center py-4">
                <p className="text-4xl font-semibold">Over <span className="text-4xl font-bold">6 Million</span> Happy Customers</p>
            </div>
            <div className='mx-20 mt-10 border'>
                <div className="flex flex-wrap justify-around">
                    <div className="mx-4 my-5">
                        <h2 className="text-xl font-bold text-red-600">NEED HELP</h2>
                        <ul className="mt-4 font-bold">
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Track Order</a></li>
                            <li><a href="#">Returns & Refunds</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">My Account</a></li>
                        </ul>
                        <div className="mt-1 ml-1">
                            <p>₹ COD Available</p>
                            <p>↩ 30 Days Easy Returns</p>
                        </div>
                    </div>
                    <div className="mx-4 my-5">
                        <h2 className="text-xl font-bold text-red-600">COMPANY</h2>
                        <ul className="mt-4 font-bold">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Community Initiatives</a></li>
                            <li><a href="#">Souled Army</a></li>
                        </ul>
                    </div>
                    <div className="mx-4 my-5">
                        <h2 className="text-xl font-bold text-red-600">MORE INFO</h2>
                        <ul className="mt-4 font-bold">
                            <li><a href="#">T&C</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Sitemap</a></li>
                        </ul>
                    </div>
                    <div className="mx-4 my-5">
                        <h2 className="text-xl font-bold text-red-600">STORE NEAR ME</h2>
                        <ul className="mt-4 font-bold">
                            <li><a href="#">Bandra</a></li>
                            <li><a href="#">Thane</a></li>
                            <li><a href="#">Colaba</a></li>
                            <li><a href="#">Palladium</a></li>
                            <li><a href="#" className="text-blue-600">View More</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="container mx-auto px-5 text-center">
                        <p className="mb-2">📱 EXPERIENCE THE SOULED STORE APP</p>
                        <div className="flex justify-center space-x-4">
                            <a href="https://play.google.com/store/apps/details?id=com.thesouledstore"><img src="https://tss-static-images.gumlet.io/icons/play-store.png" alt="Google Play" className="h-10" /></a>
                            <a href="https://apps.apple.com/in/app/the-souled-store/id1493897434"><img src="https://tss-static-images.gumlet.io/icons/app-store.png" alt="App Store" className="h-10" /></a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end mt-4">
                    <div className="flex items-center space-x-4">
                        <h3 className='mt-1'>Follow us :</h3>
                        <a href="https://www.facebook.com/SouledStore" className="text-2xl text-blue-600"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="https://www.instagram.com/TheSouledStore/" className="text-2xl text-pink-500"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="https://www.snapchat.com/add/thesouledstore" className="text-2xl text-yellow-600"><FontAwesomeIcon icon={faSnapchatGhost} /></a>
                        <a href="https://twitter.com/TheSouledStore" className="text-2xl text-blue-500"><FontAwesomeIcon icon={faTwitter} /></a>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Foo
