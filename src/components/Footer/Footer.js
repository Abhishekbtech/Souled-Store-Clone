import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 mt-16 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4 text-red-500">NEED HELP</h3>
            <ul className="text-gray-600">
              <li className="mb-2"><a href="#">Contact Us</a></li>
              <li className="mb-2"><a href="#">Track Order</a></li>
              <li className="mb-2"><a href="#">Returns & Refunds</a></li>
              <li className="mb-2"><a href="#">FAQs</a></li>
              <li className="mb-2"><a href="#">My Account</a></li>
              <li className="mb-2">
                <span className="inline-flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0 1 18 0z" />
                  </svg>
                  COD Available
                </span>
              </li>
              <li className="mb-2">
                <span className="inline-flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0 1 18 0z" />
                  </svg>
                  30 Days Easy Returns
                </span>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4 text-red-500">COMPANY</h3>
            <ul className="text-gray-600">
              <li className="mb-2"><a href="#">About Us</a></li>
              <li className="mb-2"><a href="#">Careers</a></li>
              <li className="mb-2"><a href="#">Community Initiatives</a></li>
              <li className="mb-2"><a href="#">Souled Army</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4 text-red-500">MORE INFO</h3>
            <ul className="text-gray-600">
              <li className="mb-2"><a href="#">T&C</a></li>
              <li className="mb-2"><a href="#">Privacy Policy</a></li>
              <li className="mb-2"><a href="#">Sitemap</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4 text-red-500">STORE NEAR ME</h3>
            <ul className="text-gray-600">
              <li className="mb-2"><a href="#">Bandra</a></li>
              <li className="mb-2"><a href="#">Thane</a></li>
              <li className="mb-2"><a href="#">Colaba</a></li>
              <li className="mb-2"><a href="#">Palladium</a></li>
              <li className="mb-2"><a className="underline text-blue-500" href="#">View More</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">EXPERIENCE THE SOULED STORE APP</h3>
            <div className="flex">
              <a href="#" className="mr-2">
                <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Google Play" className="w-32 h-10" />
              </a>
              <a href="#">
                <img src="https://tools.applemediaservices.com/is/image/AppleInc/M0011?wid=350&hei=110" alt="App Store" className="w-32 h-10" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center items-center">
          <span className="text-gray-600 mr-4">Follow Us:</span>
          <a href="#" className="mr-2"><i className="fab fa-facebook-f text-blue-600 text-lg"></i></a>
          <a href="#" className="mr-2"><i className="fab fa-instagram text-red-500 text-lg"></i></a>
          <a href="#" className="mr-2"><i className="fab fa-twitter text-blue-400 text-lg"></i></a>
          <a href="#" className="mr-2"><i className="fab fa-youtube text-red-600 text-lg"></i></a>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">NAVIGATION LINKS</h3>
            <div className="border-t border-gray-300 pt-4">
              {/* Your navigation links content here */}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">WHO WE ARE</h3>
            <div className="border-t border-gray-300 pt-4">
              {/* Your "Who We Are" content here */}
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-between items-center">
          <p className="text-gray-600">100% Secure Payment:</p>
          <div className="flex">
            <img src="https://www.phonepe.com/static/images/brand-logo.svg" alt="PhonePe" className="w-16 h-6 mr-2" />
            <img src="https://www.google.com/favicon.ico" alt="Google Pay" className="w-16 h-6 mr-2" />
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMZNPay/storefront/storefront-logo-dark._CB456953047_.png" alt="Amazon Pay" className="w-16 h-6 mr-2" />
            <img src="https://www.mastercard.us/content/dam/mccom/global/images/logos/mastercard-logo-default.svg" alt="MasterCard" className="w-16 h-6 mr-2" />
            <img src="https://www.mobikwik.com/assets/img/logos/mobikwik-logo.svg" alt="Mobikwik" className="w-16 h-6 mr-2" />
            <img src="https://static.paytm.com/images/paytm/paytm-logo-2021.svg" alt="Paytm" className="w-16 h-6 mr-2" />
            <img src="https://www.payu.in/assets/img/payu-logo.svg" alt="PayU" className="w-16 h-6 mr-2" />
            <img src="https://www.cashondelivery.in/images/cod-logo.png" alt="Cash on Delivery" className="w-16 h-6 mr-2" />
          </div>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <p className="text-gray-600">Shipping Partners:</p>
          <div className="flex">
            <img src="https://dtdc.in/images/dtdc-logo.png" alt="DTDC" className="w-16 h-6 mr-2" />
            <img src="https://www.delhivery.com/images/delhivery-logo.svg" alt="Delhivery" className="w-16 h-6 mr-2" />
            <img src="https://www.ecomexpress.in/images/ecomexpress.png" alt="Ecom Express" className="w-16 h-6 mr-2" />
            <img src="https://www.xpressbees.com/images/xpressbees-logo.png" alt="Xpressbees" className="w-16 h-6 mr-2" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;