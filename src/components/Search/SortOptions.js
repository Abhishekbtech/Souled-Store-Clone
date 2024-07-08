import React from 'react';

const SortOptions = ({ onSortChange }) => {
    return (
        <div className="flex justify-end p-4">
            <select
                onChange={(e) => onSortChange(e.target.value)}
                className="border p-2 rounded-lg"
            >
                <option value="">Sort By</option>
                <option value="top-rated">Top Rated</option>
                <option value="price-low-high">Price (Lowest-High)</option>
                <option value="price-high-low">Price (High-Low)</option>
            </select>
        </div>
    );
};

export default SortOptions;
