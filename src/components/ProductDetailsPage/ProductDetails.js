import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState('');
    const location = useLocation();
    const { productde } = location.state || {};

    useEffect(() => {
        axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/product/${productId}`, {
            headers: { projectID: '0e7aaiqkxs51' }
        }).then(response => {
            setProduct(response.data.data);
            setSelectedImage(response.data.data.displayImage);
        }).catch(error => {
            console.error('Error fetching product details:', error);
        });
    }, [productId]);

    const handleAddToCart = () => {
        // Add to cart functionality
    };

    const handleAddToWishlist = () => {
        // Add to wishlist functionality
    };

    if (!product) return <div>Loading...</div>;

    return (
        <div className="container mx-auto p-4">
            <nav className="breadcrumb mb-4">
                Home / Men Cargo Jeans / The Souled Store / {product.name}
            </nav>
            <div className="flex">
                <div className="w-1/2">
                    <div className="mb-4">
                        <img src={selectedImage} alt={product.name} className="w-full h-auto object-cover" />
                    </div>
                    <div className="flex space-x-2">
                        {product.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Thumbnail ${index}`}
                                className="w-10 h-10 object-cover cursor-pointer"
                                onClick={() => setSelectedImage(image)}
                            />
                        ))}
                    </div>
                </div>
                <div className="w-1/2 p-4">
                    <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
                    <p className="text-xl text-gray-800">₹{product.price}</p>
                    <p className="line-through text-red-500">₹{product.originalPrice}</p>
                    <p>Inclusive of all taxes</p>
                    <div className="mb-4">
                        <h3 className="font-semibold mb-2">Please select a size: <span className="text-blue-500 cursor-pointer">SIZE CHART</span></h3>
                        <div className="flex space-x-2">
                            {product.size.map((size) => (
                                <button
                                    key={size}
                                    className="border px-4 py-2 rounded-md hover:bg-gray-200"
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="quantity" className="font-semibold mb-2 block">Quantity</label>
                        <select id="quantity" className="border p-2 rounded-md">
                            {[...Array(10).keys()].map(i => <option key={i + 1} value={i + 1}>{i + 1}</option>)}
                        </select>
                    </div>
                    <div className="flex space-x-4 mb-4">
                        <button onClick={handleAddToCart} className="bg-red-500 text-white px-4 py-2 rounded-md">
                            ADD TO CART
                        </button>
                        <button onClick={handleAddToWishlist} className="border px-4 py-2 rounded-md">
                            ADD TO WISHLIST
                        </button>
                    </div>
                    <div className="flex space-x-2 mb-4">
                        <span>Share:</span>
                        <a href="#" className="text-blue-500"><i className="fab fa-facebook"></i></a>
                        <a href="#" className="text-blue-500"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="text-blue-500"><i className="fab fa-whatsapp"></i></a>
                    </div>
                    <div className="mb-4">
                        <h3 className="font-semibold mb-2">Delivery Details</h3>
                        <input type="text" placeholder="Enter Pincode" className="border p-2 rounded-md w-full mb-2" />
                        <button className="bg-gray-500 text-white px-4 py-2 rounded-md">CHECK</button>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Product Details</h3>
                        <div dangerouslySetInnerHTML={{ __html: product.description }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
