import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';

const ProductsByCategory = ({ category }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter={"subCategory":"${category}"}`, {
                headers: { projectId: '0e7aaiqkxs51' }
            });
            setProducts(response.data.data);
        };

        fetchProducts();
    }, [category]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 600, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } }
        ]
    };

    return (
        <div className="products-by-category py-8">
            <h2 className="text-2xl font-bold text-center mb-4">{category.toUpperCase()} Products</h2>
            <div className="container mx-auto">
                <Slider {...settings}>
                    {products.map((product) => (
                        <div key={product.id} className="product-card bg-white p-2 rounded-lg shadow-md">
                            <img src={product.displayImage} alt={product.name} className="h-35 w-full object-cover rounded-md mb-2" />
                            <h3 className="text-lg font-semibold">{product.name}</h3>
                            <p className="text-gray-700">${product.price}</p>
                            <p className="text-gray-500">Rating: {product.ratings}</p>
                        </div>
                    ))} 
                </Slider>
            </div>
        </div>
    );
};

export default ProductsByCategory;
