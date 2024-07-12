import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState('');
    const [expandedSections, setExpandedSections] = useState({
        productDetails: false,
        productDescription: false,
        artistDetails: false
    });

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

    const handleToggle = (section) => {
        setExpandedSections(prevState => ({
            ...prevState,
            [section]: !prevState[section]
        }));
    };

    if (!product) return <div>Loading...</div>;

    return (
        <div className="container mx-auto p-4">
            <nav className="breadcrumb mb-4">
                Home / {product.gender}'s {product.subCategory} / The Souled Store / {product.name}
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
                <div className="w-1/2 p-4 ml-5 mr-5">
                    <h1 className="text-2xl font-bold mb-3">{product.name}</h1>
                    <hr />
                    <p className="text-xl text-gray-800 mt-4">₹ {product.price}</p>
                    <p className='text-sm mt-1'>MRP incl. of all taxes</p>
                    <div className="mb-4 mt-5">
                        <h3 className="font-semibold mb-2">Please select a size: <span className="text-blue-500 cursor-pointer">SIZE CHART</span></h3>
                        <div className="flex space-x-2 mt-6">
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
                    <div className="mt-5 mb-4 flex items-center">
                        <label htmlFor="quantity" className="font-semibold mr-4">Quantity</label>
                        <select id="quantity" className="border p-2 rounded-md">
                            {[...Array(10).keys()].map(i => (
                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                            ))}
                        </select>
                    </div>

                    <div className="flex space-x-4 mb-4 mt-6">
                        <button className="bg-red-500 text-white px-10 py-2 rounded-md">
                            ADD TO CART
                        </button>
                        <button className="border px-8 py-2 rounded-md">
                            ADD TO WISHLIST
                        </button>
                    </div>
                    <div className="flex space-x-2 mb-4 mt-5">
                        <span className='pr-5'>Share:</span>
                        <a href="#" className="text-black text-2xl pr-2">
                            <FontAwesomeIcon icon={faFacebook}/>
                        </a>
                        <a href="#" className="text-black text-2xl pr-2">
                            <FontAwesomeIcon icon={faTwitter}/>
                        </a>
                        <a href="#" className="text-black text-2xl pr-2">
                            <FontAwesomeIcon icon={faWhatsapp}/>
                        </a>
                        <a href="#" className="text-black text-2xl pr-2">
                            <FontAwesomeIcon icon={faInstagram}/>
                        </a>
                    </div>
                    <div className="mb-4 mt-5">
                        <h3 className="font-semibold mb-2">Delivery Details</h3>
                        <input type="text" placeholder="Enter Pincode" className="border p-2 rounded-md w-full mb-2" />
                        <button className="bg-gray-500 text-white px-4 py-2 rounded-md">CHECK</button>
                    </div>
                    <div className="mb-4 border-t">
                        <button
                            className="flex justify-between w-full py-2 font-semibold"
                            onClick={() => handleToggle('productDetails')}
                        >
                            Product Details
                            {expandedSections.productDetails ? <FaChevronUp /> : <FaChevronDown />}
                        </button>
                        {expandedSections.productDetails && (
                            <div className="px-4 pb-4">
                                <div dangerouslySetInnerHTML={{ __html: product.description }} />
                            </div>
                        )}
                    </div>
                    <div className="mb-4 border-t">
                        <button
                            className="flex justify-between w-full py-2 font-semibold"
                            onClick={() => handleToggle('productDescription')}
                        >
                            Product Description
                            {expandedSections.productDescription ? <FaChevronUp /> : <FaChevronDown />}
                        </button>
                        {expandedSections.productDescription && (
                            <div className="px-4 pb-4">
                                <p>{product.description}</p>
                            </div>
                        )}
                    </div>
                    <div className="mb-4 border-t">
                        <button
                            className="flex justify-between w-full py-2 font-semibold"
                            onClick={() => handleToggle('artistDetails')}
                        >
                            Artist's Details
                            {expandedSections.artistDetails ? <FaChevronUp /> : <FaChevronDown />}
                        </button>
                        {expandedSections.artistDetails && (
                            <div className="px-4 pb-4">
                                <p>The Souled Store was born out of a simple idea - love what you do and follow your soul! Thus, our goal is to give everyone something they'll love, something they can use to express themselves, and, simply put, something to put a smile on their face. So, whether it's superheroes like Superman, TV shows like F.R.I.E.N.D.S, pop culture, music, sports, or quirky, funny stuff you're looking for, we have something for everyone.</p>
                                <p className='mt-3'>TSS Originals or The Souled Store Originals is our exclusive range of funny, funky, trendy and stylish designs. Designed by our kick-ass team of in-house designers, TSS Originals are some cool and quirky designs that help you speak your vibe.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
