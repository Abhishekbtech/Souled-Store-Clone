import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CategoryDropdown({ gender }) {
    const [categories, setCategories] = useState([]);
    const projectId = '0e7aaiqkxs51';

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('https://academics.newtonschool.co/api/v1/ecommerce/clothes/categories', {
                    headers: {
                        projectId: projectId,
                    },
                });
                setCategories(response.data.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div className="flex flex-wrap space-x-4">
            {categories.map((category, index) => (
                <a
                    href={`/${category}`}
                    className="text-gray-700 hover:text-gray-900"
                    key={index}
                >
                    {category}
                </a>
            ))}
        </div>
    );
}

export default CategoryDropdown;
