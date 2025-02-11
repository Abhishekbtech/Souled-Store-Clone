import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons';

const ProductDetails = () => {
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState('');
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
    console.log("send ", location.pathname)
    const {productId} = useParams()

    useEffect(() => {
        axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/product/${productId}`, {
            headers: { projectID: '0e7aaiqkxs51' }
        }).then(response => {
            setProduct(response.data.data);
            setSelectedImage(response.data.data.displayImage);
        }).catch(error => {
            console.error('Error fetching product details:', error);
        });

        const token = sessionStorage.getItem('token');
        if (token) {
            axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/wishlist`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'projectID': '0e7aaiqkxs51'
                }
            }).then(response => {
                setWishlist(response.data.data.items.map(item => item.products._id));
            }).catch(error => {
                console.error('Error fetching product details:', error);
            });
        }
    }, [productId]);

    const handleAddToCart = () => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            navigate('/signup', { state: { from: location } });
            return;
        }

        if (!size) {
            showPopupMessage('Please select a size.');
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
            showPopupMessage('Item added to cart');
        }).catch(error => {
            console.error('Error adding item to cart:', error);
        });
    };

    const handleAddToWishlist = () => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            navigate('/signup', { state: { from: location.pathname} });
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
            console.log('Item added to wishlist:', response.data.data.items);
            setWishlist([...wishlist, productId]);
            showPopupMessage('Item added to wishlist');
        }).catch(error => {
            console.error('Error adding item to wishlist:', error);
        });
    };

    const handleRemoveFromWishlist = () => {
        const token = sessionStorage.getItem('token');
        axios.delete(
            `https://academics.newtonschool.co/api/v1/ecommerce/wishlist/${productId}`,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'projectID': '0e7aaiqkxs51'
                }
            }
        ).then(response => {
            console.log('Item removed from wishlist:', response.data);
            setWishlist(wishlist.filter(id => id !== productId));
            showPopupMessage('Item removed from wishlist');
        }).catch(error => {
            console.error('Error removing item from wishlist:', error.response.data.message);
        });
    };

    const showPopupMessage = (message) => {
        setMessage(message);
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 3000);
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
                    <img src={selectedImage} alt={product.name} className="w-full h-auto object-cover mb-4 md:max-w-md md:ml-4" />
                    <div className="flex space-x-2">
                        {product.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Thumbnail ${index}`}
                                className={`w-10 h-10 object-cover cursor-pointer ${index === 0 ? 'md:ml-20' : ''}`}
                                onClick={() => setSelectedImage(image)}
                            />
                        ))}
                    </div>
                </div>

                <div className="w-full md:w-1/2 p-4 md:mr-5">
                    <h1 className="text-2xl font-bold mb-3">{product.name}</h1>
                    <hr />
                    <p className="text-xl text-gray-800 mt-4">₹ {product.price}</p>
                    <p className='text-sm mt-1'>MRP incl. of all taxes</p>
                    <p className="text-sm line-through">MRP ₹ {product.price + Math.floor(product.price * 0.3)}</p>
                    <p className="text-green-600 font-semibold">You got {Math.floor(Math.random() * 50) + 10}% OFF</p>

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
                            <button className="bg-gray-300 text-gray-600 px-8 py-2 rounded-md" onClick={handleRemoveFromWishlist}>
                                REMOVE FROM WISHLIST
                            </button>
                        ) : (
                            <button className="border px-8 py-2 rounded-md" onClick={handleAddToWishlist}>
                                ADD TO WISHLIST
                            </button>
                        )}
                    </div>

                    <div className="flex space-x-2 mb-4 mt-5">
                        <span className='pr-5'>Share:</span>
                        <div className="text-2xl text-blue-600">
                            <FontAwesomeIcon icon={faFacebook} />
                        </div>
                        <div className="text-2xl text-blue-500">
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>
                        <div className="text-2xl text-green-600">
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </div>
                        <div className="text-2xl text-pink-500">
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
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

                    <p className="text-gray-700 mt-5 mb-5 p-2 text-sm border shadow-md">
                        <FontAwesomeIcon icon={faUndoAlt} className="mr-4" />
                        This product is eligible for return or exchange under our 30-day return or exchange policy. No questions asked.
                    </p>

                    <div className="mb-2 border-t">
                        <button
                            className="flex justify-between w-full py-2 font-semibold"
                            onClick={() => setExpandedSections(prevState => ({ ...prevState, productDetails: !prevState.productDetails }))}
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
                    <div className="mb-2 border-t">
                        <button
                            className="flex justify-between w-full py-2 font-semibold"
                            onClick={() => setExpandedSections(prevState => ({ ...prevState, productDescription: !prevState.productDescription }))}
                        >
                            Product Description
                            {expandedSections.productDescription ? <FaChevronUp /> : <FaChevronDown />}
                        </button>
                        {expandedSections.productDescription && (
                            <div className="px-4 pb-4">
                                <p>Comming Soon .....</p>
                            </div>
                        )}
                    </div>
                    <div className="mb-2 border-t">
                        <button
                            className="flex justify-between w-full py-2 font-semibold"
                            onClick={() => setExpandedSections(prevState => ({ ...prevState, artistDetails: !prevState.artistDetails }))}
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