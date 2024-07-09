import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Trending() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter={"sellerTag":"trending"}', {
                headers: { projectId: '0e7aaiqkxs51' }
            });
            setProducts(response.data.data.slice(10, 20));
        };

        fetchProducts();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold">TRENDING</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    products.map((product) => (
                        <div key={product._id} className="border rounded-md overflow-hidden">
                            <div>
                                <img src={product.displayImage} alt={product.name} className="w-full h-35 object-cover hover:scale-105 transition duration-300" />
                            </div>

                            <h3>{product.name}</h3>
                            <p className="text-gray-700">₹ {product.price}</p>
                            <p className="text-gray-500">Rating: {parseFloat(product.ratings).toFixed(1)}</p>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Trending