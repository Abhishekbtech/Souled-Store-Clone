import React, { useState, useEffect } from 'react';

const FilterOptions = ({ onFilterChange }) => {
    const [categories, setCategories] = useState([]);
    const [sellerTags, setSellerTags] = useState([]);
    const [genders, setGenders] = useState([]);

    useEffect(() => {
        // Fetch categories, seller tags, and genders from API
        fetch('https://academics.newtonschool.co/api/v1/ecommerce/clothes/products', {
            headers: {
                projectID: 'f104bi07c490',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                const uniqueCategories = [...new Set(data.map((item) => item.category))];
                const uniqueSellerTags = [...new Set(data.map((item) => item.sellerTag))];
                const uniqueGenders = [...new Set(data.map((item) => item.gender))];

                setCategories(uniqueCategories);
                setSellerTags(uniqueSellerTags);
                setGenders(uniqueGenders.filter((gender) => gender !== 'Kids'));
            });
    }, []);

    const handleFilterChange = (filterType, value) => {
        onFilterChange(filterType, value);
    };

    return (
        <div className="p-4">
            <h3 className="font-bold mb-2">Filter By</h3>
            <div className="mb-4">
                <h4 className="font-semibold">Categories</h4>
                {categories.map((category) => (
                    <div key={category} className="flex items-center">
                        <input
                            type="checkbox"
                            id={`category-${category}`}
                            className="mr-2"
                            onChange={() => handleFilterChange('category', category)}
                        />
                        <label htmlFor={`category-${category}`}>{category}</label>
                    </div>
                ))}
            </div>
            <div className="mb-4">
                <h4 className="font-semibold">Seller Tag</h4>
                {sellerTags.map((tag) => (
                    <div key={tag} className="flex items-center">
                        <input
                            type="checkbox"
                            id={`sellerTag-${tag}`}
                            className="mr-2"
                            onChange={() => handleFilterChange('sellerTag', tag)}
                        />
                        <label htmlFor={`sellerTag-${tag}`}>{tag}</label>
                    </div>
                ))}
            </div>
            <div className="mb-4">
                <h4 className="font-semibold">Gender</h4>
                {genders.map((gender) => (
                    <div key={gender} className="flex items-center">
                        <input
                            type="checkbox"
                            id={`gender-${gender}`}
                            className="mr-2"
                            onChange={() => handleFilterChange('gender', gender)}
                        />
                        <label htmlFor={`gender-${gender}`}>{gender}</label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FilterOptions;
