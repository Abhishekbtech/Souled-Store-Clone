import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom';

function SellerTag({ gender, sellerTag }) {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter={"gender":"${gender}","sellerTag":"${sellerTag}"}`, {
                headers: { projectId: '0e7aaiqkxs51' }
            });
            setProducts(response.data.data.slice(0, 10));
        };

        fetchProducts();
    }, [gender, sellerTag]);
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };
    const productWithDetailPage = (product) => {
        navigate(`/${product._id}`, { state: { product } });
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold">{sellerTag.toUpperCase()}</h1>
            </div>
            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                infinite={true}
                showDots={true}
                // autoPlay={true}
                // autoPlaySpeed={3000}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {
                    products.map((product) => (
                        <div key={product._id} className="p-2 mb-4 mt-4 relative">
                            <div className="border rounded-md overflow-hidden cursor-pointer hover:shadow-md hover:scale-105 transition duration-300" onClick={() => productWithDetailPage(product)}>
                                <div>
                                    <img src={product.displayImage} alt={product.name} className="w-full h-35 object-cover" />
                                </div>
                                <h3 className='ml-2 overflow-hidden whitespace-nowrap overflow-ellipsis ' >{product.name}</h3>
                                <p className="text-gray-700 ml-2">₹ {product.price}</p>
                                <p className="text-gray-500 mb-2 ml-2">Rating: {parseFloat(product.ratings).toFixed(1)}</p>
                            </div>
                        </div>
                    ))
                }
            </Carousel>
        </div>

    )
}

export default SellerTag