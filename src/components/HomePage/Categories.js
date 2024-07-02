import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
            <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {categories.map((category) => (
                    <div key={category.id} className="category-card bg-white p-4 rounded-lg shadow-md">
                        <img src={category.imageUrl} alt={category.name} className="h-32 w-full object-cover rounded-md mb-2" />
                        <h3 className="text-lg font-semibold text-center">{category.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
