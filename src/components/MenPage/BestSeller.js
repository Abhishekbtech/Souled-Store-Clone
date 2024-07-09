import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function BestSeller() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter={"sellerTag":"best seller"}', {
                headers: { projectId: '0e7aaiqkxs51' }
            });
            setProducts(response.data.data.slice(0, 9));
        };

        fetchProducts();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const handleAddToWishlist = (product) => {
        console.log(`Product added to wishlist: ${product.name}`);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold">BEST SELLER</h1>
            </div>
            <Slider {...settings}>
                {
                    products.map((product) => (
                        <div key={product._id} className="p-2 mb-4 mt-4 relative">
                            <div className="border rounded-md overflow-hidden hover:shadow-md hover:scale-105 transition duration-300">
                                <div>
                                    <img src={product.displayImage} alt={product.name} className="w-full h-35 object-cover" />
                                </div>
                                <h3 className='ml-2 overflow-hidden whitespace-nowrap overflow-ellipsis'>{product.name}</h3>
                                <p className="text-gray-700 ml-2">₹ {product.price}</p>
                                <p className="text-gray-500 mb-2 ml-2">Rating: {parseFloat(product.ratings).toFixed(1)}</p>
                                <button
                                    onClick={() => handleAddToWishlist(product)}
                                    className="absolute top-2 right-3 text-white hover:text-red-700 transition duration-300"
                                >
                                    <FontAwesomeIcon icon={faHeart} size="lg" />
                                </button>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default BestSeller