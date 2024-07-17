import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons';

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState('S');
    const [pincode, setPincode] = useState('');
    const [pincodeMessage, setPincodeMessage] = useState('');
    const [expandedSections, setExpandedSections] = useState({
        productDetails: false,
        productDescription: false,
        artistDetails: false,
    });
    const [wishlist, setWishlist] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Fetch product details
        axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/product/${productId}`, {
            headers: { projectID: '0e7aaiqkxs51' }
        }).then(response => {
            setProduct(response.data.data);
            setSelectedImage(response.data.data.displayImage);
        }).catch(error => {
            console.error('Error fetching product details:', error);
        });

        // Fetch wishlist data
        const token = sessionStorage.getItem('token');
        if (token) {
            axios.get('https://academics.newtonschool.co/api/v1/ecommerce/wishlist', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'projectID': '0e7aaiqkxs51'
                }
            }).then(response => {
                setWishlist(response.data.data.map(item => item.productId));
            }).catch(error => {
                console.error('Error fetching wishlist:', error);
            });
        }
    }, [productId]);

    const handleAddToCart = () => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            navigate('/signup', { state: { from: location } });
            return;
        }

        axios.patch(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${productId}`, {
            quantity: quantity,
            size: size
        }, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'projectID': '0e7aaiqkxs51'
            }
        }).then(response => {
            console.log('Item added to cart:', response.data);
            showPopupMessage('Item added to cart');
            setMessage('Item added to cart');
        }).catch(error => {
            console.error('Error adding item to cart:', error);
        });
    };

    const handleAddToWishlist = () => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            navigate('/signup', { state: { from: location } });
            return;
        }

        axios.patch(
            'https://academics.newtonschool.co/api/v1/ecommerce/wishlist',
            { productId: productId },
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'projectID': '0e7aaiqkxs51'
                }
            }
        ).then(response => {
            console.log('Item added to wishlist:', response.data);
            setWishlist([...wishlist, productId]);
            showPopupMessage('Item added to wishlist');
            setMessage('Item added to wishlist');
        }).catch(error => {
            console.error('Error adding item to wishlist:', error.response.data.message);
        });
    };

    const showPopupMessage = (message) => {
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 5000);
    };

    const handlePincodeChange = (e) => {
        const { value } = e.target;
        if (/^\d{0,6}$/.test(value)) {
            setPincode(value);
        }
    };

    const handlePincodeCheck = () => {
        if (pincode.length === 6) {
            setPincodeMessage(`Delivery available at ${pincode}`);
        } else {
            setPincodeMessage('Please enter a valid 6-digit pincode.');
        }
    };

    if (!product) return <div>Loading...</div>;

    return (
        <div className="container mx-auto p-4">
            {showPopup && (
                <div className="text-white fixed top-30 right-0 mb-4 mr-4 bg-red-600 p-4 shadow-md rounded-md">
                    <p>{message}</p>
                </div>
            )}
            <div className="flex flex-col md:flex-row">
                <div className="mb-4 md:w-1/2 md:mr-5">
                    <img src={selectedImage} alt={product.name} className="w-full h-auto object-cover mb-4" />
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
                <div className="w-full md:w-1/2 p-4 md:ml-5 md:mr-5">
                    <h1 className="text-2xl font-bold mb-3">{product.name}</h1>
                    <hr />
                    <p className="text-xl text-gray-800 mt-4">₹ {product.price}</p>
                    <p className='text-sm mt-1'>MRP incl. of all taxes</p>
                    <div className="mb-4 mt-5">
                        <h3 className="font-semibold mb-2">Please select a size: <span className="text-blue-500 cursor-pointer">SIZE CHART</span></h3>
                        <div className="flex space-x-2 mt-6">
                            {product.size.map((sz) => (
                                <button
                                    key={sz}
                                    className={`border px-4 py-2 rounded-md ${sz === size ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
                                    onClick={() => setSize(sz)}
                                >
                                    {sz}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="mt-5 mb-4 flex items-center">
                        <label htmlFor="quantity" className="font-semibold mr-4">Quantity</label>
                        <select
                            id="quantity"
                            className="border p-2 rounded-md"
                            value={quantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                        >
                            {[...Array(10).keys()].map(i => (
                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                            ))}
                        </select>
                    </div>

                    <div className="flex space-x-4 mb-4 mt-6">
                        <button className="bg-red-500 text-white px-10 py-2 rounded-md" onClick={handleAddToCart}>
                            ADD TO CART
                        </button>
                        {wishlist.includes(productId) ? (
                            <button className="bg-gray-300 text-gray-600 px-8 py-2 rounded-md cursor-not-allowed" disabled>
                                Remove TO WISHLIST
                            </button>
                        ) : (
                            <button className="border px-8 py-2 rounded-md" onClick={handleAddToWishlist}>
                                ADD TO WISHLIST
                            </button>
                        )}
                    </div>
                    <div className="flex space-x-2 mb-4 mt-5">
                        <span className='pr-5'>Share:</span>
                        <a href="#" className="text-black text-2xl pr-2">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="#" className="text-black text-2xl pr-2">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="#" className="text-black text-2xl pr-2">
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                        <a href="#" className="text-black text-2xl pr-2">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                    <h1 className='font-semibold mb-2'>Delivery Details</h1>
                    <div className="flex items-center mb-2">
                        <input
                            type="text"
                            placeholder="Enter Pincode"
                            minLength={6}
                            maxLength={6}
                            value={pincode}
                            onChange={handlePincodeChange}
                            className="border p-2 rounded-md w-full"
                        />
                        <button
                            className="bg-gray-500 text-white px-4 py-2 rounded-md ml-2"
                            onClick={handlePincodeCheck}
                        >
                            CHECK
                        </button>
                    </div>
                    {pincodeMessage && <p className="mt-2 text-green-600">{pincodeMessage}</p>}
                    <p className="mt-4 text-sm">Sold by: <span className='font-semibold'>Arunima.com</span></p>
                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-3 cursor-pointer"
                    onClick={() => setExpandedSections({ ...expandedSections, productDetails: !expandedSections.productDetails })}
                >
                    Product Details
                    {expandedSections.productDetails ? (
                        <FaChevronUp className="inline-block ml-2 mb-1" />
                    ) : (
                        <FaChevronDown className="inline-block ml-2 mb-1" />
                    )}
                </h2>
                {expandedSections.productDetails && (
                    <div className="border p-4 rounded-md bg-gray-100">
                        <p>{product.details}</p>
                    </div>
                )}
            </div>

            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-3 cursor-pointer"
                    onClick={() => setExpandedSections({ ...expandedSections, productDescription: !expandedSections.productDescription })}
                >
                    Product Description
                    {expandedSections.productDescription ? (
                        <FaChevronUp className="inline-block ml-2 mb-1" />
                    ) : (
                        <FaChevronDown className="inline-block ml-2 mb-1" />
                    )}
                </h2>
                {expandedSections.productDescription && (
                    <div className="border p-4 rounded-md bg-gray-100">
                        <p>{product.description}</p>
                    </div>
                )}
            </div>

            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-3 cursor-pointer"
                    onClick={() => setExpandedSections({ ...expandedSections, artistDetails: !expandedSections.artistDetails })}
                >
                    Artist Details
                    {expandedSections.artistDetails ? (
                        <FaChevronUp className="inline-block ml-2 mb-1" />
                    ) : (
                        <FaChevronDown className="inline-block ml-2 mb-1" />
                    )}
                </h2>
                {expandedSections.artistDetails && (
                    <div className="border p-4 rounded-md bg-gray-100">
                        <p>Artist: {product.artist}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductDetails;
