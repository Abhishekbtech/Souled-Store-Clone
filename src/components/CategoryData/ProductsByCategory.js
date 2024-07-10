import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function ProductsByCategory() {
    const [products, setProducts] = useState([]);
    const [sellerTag, setSellerTag] = useState('');
    const [brand, setBrand] = useState('');
    const [error, setError] = useState(null);
    const location = useLocation();
    const { category } = location.state || {};

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                if (category) {
                    let filter = {
                        gender: category.gender,
                        subCategory: category.title
                    };

                    if (sellerTag) {
                        filter.sellerTag = sellerTag;
                    }

                    if (brand) {
                        filter.brand = brand;
                    }

                    const url = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter=${encodeURIComponent(JSON.stringify(filter))}`;
                    
                    const response = await axios.get(url, {
                        headers: { projectId: '0e7aaiqkxs51' }
                    });
                    setProducts(response.data.data);
                    setError(null);
                }
            } catch (err) {
                setError('item not available');
                setProducts([]);
            }
        };

        fetchProducts();
    }, [category, sellerTag, brand]);

    const handleAddToWishlist = (product) => {
        console.log(`Product added to wishlist: ${product.name}`);
    };

    if (!category) {
        return <div className="container mx-auto px-4 py-8">Loading...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex">
                {/* Sidebar */}
                <div className="w-1/4 pr-4 pl-5">
                    <h2 className="text-lg font-bold mb-4">SellerTag</h2>
                    <ul className="mb-8">
                        <li className="mb-2">
                            <input
                                type="radio"
                                id="best-seller"
                                name="sellerTag"
                                value="best seller"
                                onChange={() => setSellerTag('best seller')}
                            /> Best Seller
                        </li>
                        <li className="mb-2">
                            <input
                                type="radio"
                                id="trending"
                                name="sellerTag"
                                value="trending"
                                onChange={() => setSellerTag('trending')}
                            /> Trending
                        </li>
                        <li className="mb-2">
                            <input
                                type="radio"
                                id="new-arrival"
                                name="sellerTag"
                                value="new arrival"
                                onChange={() => setSellerTag('new arrival')}
                            /> New Arrival
                        </li>
                        <li className="mb-2">
                            <input
                                type="radio"
                                id="top-rated"
                                name="sellerTag"
                                value="top rated"
                                onChange={() => setSellerTag('top rated')}
                            /> Top Rated
                        </li>
                    </ul>
                    <h2 className="text-lg font-bold mb-4">Brand</h2>
                    <ul>
                        <li className="mb-2">
                            <input
                                type="radio"
                                name="brand"
                                value="Bewakoof®"
                                onChange={() => setBrand('Bewakoof®')}
                            /> Bewakoof®
                        </li>
                        <li className="mb-2">
                            <input
                                type="radio"
                                name="brand"
                                value="Campus Sutra"
                                onChange={() => setBrand('Campus Sutra')}
                            /> Campus Sutra
                        </li>
                        <li className="mb-2">
                            <input
                                type="radio"
                                name="brand"
                                value="7 Shores"
                                onChange={() => setBrand('7 Shores')}
                            /> 7 Shores
                        </li>
                        <li className="mb-2">
                            <input
                                type="radio"
                                name="brand"
                                value="TISTABENE"
                                onChange={() => setBrand('TISTABENE')}
                            /> TISTABENE
                        </li>
                        <li className="mb-2">
                            <input
                                type="radio"
                                name="brand"
                                value="SAVVAO"
                                onChange={() => setBrand('SAVVAO')}
                            /> SAVVAO
                        </li>
                        <li className="mb-2">
                            <input
                                type="radio"
                                name="brand"
                                value="BEWAKOOF X STREETWEAR"
                                onChange={() => setBrand('BEWAKOOF X STREETWEAR')}
                            /> BEWAKOOF X STREETWEAR
                        </li>
                        <li className="mb-2">
                            <input
                                type="radio"
                                name="brand"
                                value="OFFICIAL MARVEL MERCHANDISE"
                                onChange={() => setBrand('OFFICIAL MARVEL MERCHANDISE')}
                            /> OFFICIAL MARVEL MERCHANDISE
                        </li>
                        <li className="mb-2">
                            <input
                                type="radio"
                                name="brand"
                                value="OFFICIAL DC MERCHANDISE"
                                onChange={() => setBrand('OFFICIAL DC MERCHANDISE')}
                            /> OFFICIAL DC MERCHANDISE
                        </li>
                        <li className="mb-2">
                            <input
                                type="radio"
                                name="brand"
                                value="OFFICIAL TOM & JERRY MERCHANDISE"
                                onChange={() => setBrand('OFFICIAL TOM & JERRY MERCHANDISE')}
                            /> OFFICIAL TOM & JERRY MERCHANDISE
                        </li>
                        <li className="mb-2">
                            <input
                                type="radio"
                                name="brand"
                                value="OFFICIAL NARUTO MERCHANDISE"
                                onChange={() => setBrand('OFFICIAL NARUTO MERCHANDISE')}
                            /> OFFICIAL NARUTO MERCHANDISE
                        </li>
                    </ul>
                </div>

                {/* Main content */}
                <div className="w-3/4">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold">{category.title.toUpperCase()}</h1>
                        <p>Showing results for {category.title}</p>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <p>{products.length} items</p>
                        <select className="border p-2 rounded">
                            <option value="default">Select Sorting Options</option>
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                            {/* Add more sorting options as needed */}
                        </select>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {error ? (
                            <div className="col-span-4 text-center text-3xl font-bold text-red-500">{error}</div>
                        ) : products.length === 0 ? (
                            <div className="col-span-4 text-center">No items found</div>
                        ) : (
                            products.map((product) => (
                                <div key={product._id} className="p-2 mb-4 mt-4 relative">
                                    <div className="border rounded-md overflow-hidden hover:shadow-md hover:scale-105 transition duration-300">
                                        <div>
                                            <img src={product.displayImage} alt={product.name} className="w-full h-35 object-cover" />
                                        </div>
                                        <h3 className='ml-2 overflow-hidden whitespace-nowrap overflow-ellipsis'>{product.name}</h3>
                                        <p className="text-gray-700 ml-2">₹ {product.price}</p>
                                        <p className="text-gray-500 mb-2 ml-2">Rating: {parseFloat(product.ratings).toFixed(1)}</p>
                                        <button
                                            onClick={() => handleAddToWishlist(product)}
                                            className="absolute top-2 right-3 text-white hover:text-red-700 transition duration-300"
                                        >
                                            <FontAwesomeIcon icon={faHeart} size="lg" />
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductsByCategory;
