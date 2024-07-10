import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function ProductsByCategory() {
    const [products, setProducts] = useState([]);
    const location = useLocation();
    const { category } = location.state || {};

    useEffect(() => {
        if (category) {
            const fetchProducts = async () => {
                const response = await axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter={"gender":"${category.gender}","subCategory":"${category.title}"}`, {
                    headers: { projectId: '0e7aaiqkxs51' }
                });
                setProducts(response.data.data);
            };

            fetchProducts();
        }
    }, [category]);

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
                <div className="w-1/4 pr-4">
                    <h2 className="text-lg font-bold mb-4">SellerTag</h2>
                    <ul className="mb-8">
                        <li className="mb-2"><input type="checkbox" id="men" name="sellerTag" value="best seller" /> Best Seller</li>
                        <li className="mb-2"><input type="checkbox" id="women" name="sellerTag" value="trending" /> Trending</li>
                        <li className="mb-2"><input type="checkbox" id="kids" name="sellerTag" value="new arrival" /> New Arrival</li>
                        <li className="mb-2"><input type="checkbox" id="kids" name="sellerTag" value="top rated" /> Top Rated</li>
                    </ul>
                    <h2 className="text-lg font-bold mb-4">BRAND</h2>
                    <ul>
                        <li className="mb-2"><input type="checkbox" id="tshirts" name="products" value="tshirts" /> T-Shirts</li>
                        <li className="mb-2"><input type="checkbox" id="tshirts" name="products" value="tshirts" /> T-Shirts</li>
                        <li className="mb-2"><input type="checkbox" id="tshirts" name="products" value="tshirts" /> T-Shirts</li>
                        <li className="mb-2"><input type="checkbox" id="tshirts" name="products" value="tshirts" /> T-Shirts</li>
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
                        {products.map((product) => (
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
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductsByCategory;
