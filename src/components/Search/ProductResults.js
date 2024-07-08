import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductResults = ({ searchTerm, sortOption, filters, page }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        let url = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?search={"name":"${searchTerm}"}`;

        if (sortOption) {
            const sortField = sortOption.includes('price') ? 'price' : 'rating';
            const sortOrder = sortOption.includes('low') ? 1 : -1;
            url += `&sort={"${sortField}":${sortOrder}}`;
        }

        if (filters) {
            url += `&filter=${JSON.stringify(filters)}`;
        }

        url += `&limit=10&page=${page}`;

        fetch(url, {
            headers: {
                projectID: 'f104bi07c490',
            },
        })
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, [searchTerm, sortOption, filters, page]);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {products.map((product) => (
                <div key={product.id} className="hover:shadow-lg transition-shadow">
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="text-lg font-bold">{product.name}</h3>
                        <p className="text-gray-500">{product.price}</p>
                        <Link to={`/product/${product.id}`} className="text-blue-500 hover:underline">View Product</Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductResults;
