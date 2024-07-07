import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await axios.get('https://academics.newtonschool.co/api/v1/ecommerce/clothes/categories', {
                headers: { projectId: '0e7aaiqkxs51' }
            });
            setCategories(response.data.data);
        };

        fetchCategories();
    }, []);

    return (
        <div className="categories py-8">
            <h2 className="text-2xl font-bold text-center mb-4">Available Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {categories.map((category, index) => (
                    <Link key={index} to={`/category/${index}`} className="hover:shadow-lg transition-shadow">
                        <img src={category.image} className="w-full h-48 object-cover" />
                        <p className="text-center mt-2">{category}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Categories;
