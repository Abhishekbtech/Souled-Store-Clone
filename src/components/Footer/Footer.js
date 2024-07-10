import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-700">
      <div className="bg-red-600 text-white text-center py-4">
        <p className="text-lg font-bold">HOMEGROWN INDIAN BRAND</p>
      </div>
      <div className="bg-white text-center py-4">
        <p className="text-2xl font-bold">Over <span className="text-3xl">6 Million</span> Happy Customers</p>
      </div>
      <div className="container mx-auto py-8 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-bold text-red-600">NEED HELP</h2>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">Returns & Refunds</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">My Account</a></li>
          </ul>
          <div className="mt-4">
            <p>₹ COD Available</p>
            <p>↩ 30 Days Easy Returns</p>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold text-red-600">COMPANY</h2>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Community Initiatives</a></li>
            <li><a href="#">Souled Army</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold text-red-600">MORE INFO</h2>
          <ul>
            <li><a href="#">T&C</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold text-red-600">STORE NEAR ME</h2>
          <ul>
            <li><a href="#">Bandra</a></li>
            <li><a href="#">Thane</a></li>
            <li><a href="#">Colaba</a></li>
            <li><a href="#">Palladium</a></li>
            <li><a href="#" className="text-blue-600">View More</a></li>
          </ul>
        </div>
      </div>
      <div className="bg-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">📱 EXPERIENCE THE SOULED STORE APP</p>
          <div className="flex justify-center space-x-4">
            <a href="#"><img src="google-play-badge.png" alt="Google Play" className="h-10" /></a>
            <a href="#"><img src="app-store-badge.png" alt="App Store" className="h-10" /></a>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 py-4">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-4">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-snapchat-ghost"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
          <div className="mt-4">
            <p className="text-gray-600">100% Secure Payment:</p>
            <div className="flex justify-center space-x-4">
              <img src="phonepe-logo.png" alt="PhonePe" className="h-6" />
              <img src="gpay-logo.png" alt="GPay" className="h-6" />
              <img src="amazon-pay-logo.png" alt="Amazon Pay" className="h-6" />
              <img src="mastercard-logo.png" alt="MasterCard" className="h-6" />
              <img src="mobikwik-logo.png" alt="MobiKwik" className="h-6" />
              <img src="paytm-logo.png" alt="Paytm" className="h-6" />
              <img src="cod-logo.png" alt="COD" className="h-6" />
            </div>
            <p className="mt-4">Shipping Partners:</p>
            <div className="flex justify-center space-x-4">
              <img src="dtdc-logo.png" alt="DTDC" className="h-6" />
              <img src="delhivery-logo.png" alt="Delhivery" className="h-6" />
              <img src="ecom-express-logo.png" alt="Ecom Express" className="h-6" />
              <img src="xpressbees-logo.png" alt="Xpressbees" className="h-6" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">POPULAR SEARCHES</p>
          <p className="text-sm text-gray-500">
            Oversized T-shirts | Casual Shirts | Polos | All T-Shirts | Solid T-shirts | All Shirts | Classic Fit T-shirts | Oversized Full Sleeve | Dropcut T-shirts | Co-ord Sets | Jackets | Hoodies & Sweatshirts | All Bottoms | Pants | Cargos | Joggers | Shorts | Boxers & Innerwear | Pajamas | Top 20 T-Shirts | Top 20 Polos | Top 20 Shirts | Top 20 Bottoms | Top 20 Sneakers | Sneakers | Backpacks | Perfumes | Caps | New Arrivals | Best Sellers | Restocked | Supima | Superheroes | Pet Merch |
          </p>
        </div>
      </div>
      <div className="bg-gray-200 py-4 text-center">
        <p>© The Souled Store 2024-25</p>
      </div>
    </footer>
  );
};

export default Footer;
