import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/outline';

const SearchPage = () => {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({
        category: '',
        sellerTag: '',
        gender: ''
    });
    const [sort, setSort] = useState('');
    const [page, setPage] = useState(1);
    const [totalProducts, setTotalProducts] = useState(0);

    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query');

    const fetchProducts = async () => {
        try {
            const response = await axios.get(
                `{{base_domain}}/api/v1/ecommerce/clothes/products?search={"field":"${query}"}&filter=${JSON.stringify(filters)}&sort=${sort}&page=${page}`
            );
            setProducts(response.data.products);
            setTotalProducts(response.data.total);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [query, filters, sort, page]);

    return (
        <div className="container mx-auto py-4">
            <h1 className="text-2xl font-bold">Showing results for {query} - {totalProducts} items</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {products.map((product) => (
                    <div key={product._id} className="border rounded-lg p-4">
                        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
                        <div className="mt-2">
                            <h2 className="text-xl font-semibold">{product.name}</h2>
                            <p className="text-gray-600">{product.price}</p>
                            <div className="flex items-center justify-between mt-2">
                                <HeartIcon className="w-6 h-6 text-gray-600" />
                                {/* Add other icons or buttons here */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-4">
                <button
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    disabled={page === 1}
                    className="px-4 py-2 bg-gray-200 rounded-md"
                >
                    Previous
                </button>
                <button
                    onClick={() => setPage((prev) => prev + 1)}
                    disabled={products.length < 10}
                    className="px-4 py-2 bg-gray-200 rounded-md ml-2"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default SearchPage;
