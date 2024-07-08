import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/outline';

function Trending() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter={"sellerTag":"trending"}', {
                headers: { projectId: '0e7aaiqkxs51' }
            });
            setProducts(response.data.data);
        };

        fetchProducts();
    }, []);

    const NextArrow = ({ onClick }) => {
        return (
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer" onClick={onClick}>
                <ArrowRightIcon className="w-8 h-8 text-gray-700 hover:text-gray-900" />
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer" onClick={onClick}>
                <ArrowLeftIcon className="w-8 h-8 text-gray-700 hover:text-gray-900" />
            </div>
        );
    };

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } }
        ]
    };

    return (
        <div className="products-by-category py-8">
            <h2 className="text-2xl font-bold text-center mb-4 capitalize">Trending</h2>
            <div className="relative container mx-auto">
                <Slider {...settings}>
                    {products.map((product) => (
                        <div key={product.id} className="product-card bg-white p-4 rounded-lg shadow-md mx-2 max-w-xs ml-7 transition-transform transform hover:scale-105 hover:shadow-lg">
                            <img src={product.displayImage} alt={product.name} className="h-35 w-full object-cover rounded-md mb-2" />
                            <h3 className="text-lg font-semibold">{product.name}</h3>
                            <p className="text-gray-700">₹ {product.price}</p>
                            <p className="text-gray-500">Rating: {parseFloat(product.ratings).toFixed(1)}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Trending