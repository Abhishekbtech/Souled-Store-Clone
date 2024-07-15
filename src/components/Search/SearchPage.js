import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faFilter, faSort } from '@fortawesome/free-solid-svg-icons';

const SearchPage = () => {
    const [products, setProducts] = useState([]);
    const [sellerTag, setSellerTag] = useState('');
    const [brand, setBrand] = useState('');
    const [gender, setGender] = useState('');
    const [color, setColor] = useState('')
    const [error, setError] = useState(null);
    const [showFilter, setShowFilter] = useState(false);
    const [showSort, setShowSort] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const searchTerm = location.state?.key;

    const fetchProducts = async () => {
        try {
            if (searchTerm) {
                let filter = {
                    subCategory: searchTerm
                };

                if (sellerTag) {
                    filter.sellerTag = sellerTag;
                }

                if (brand) {
                    filter.brand = brand;
                }

                if (gender) {
                    filter.gender = gender;
                }

                if (color){
                    filter.color = color;
                }

                const url = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter=${encodeURIComponent(JSON.stringify(filter))}`;

                const response = await axios.get(url, {
                    headers: { projectId: '0e7aaiqkxs51' }
                });
                setProducts(response.data.data);
                setError(null);
            }
        } catch (error) {
            setError('Item not available');
            setProducts([]);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [searchTerm, sellerTag, brand, gender, color]);

    const handleAddToWishlist = (product) => {
        console.log(`Product added to wishlist: ${product.name}`);
    };

    const productWithDetailPage = (product) => {
        navigate(`/${product._id}`, { state: { product } });
    };

    if (!searchTerm) {
        return <div className="container mx-auto px-4 py-8">Loading...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex">
                {/* Sidebar */}
                <div className="w-1/4 pr-4 pl-5 hidden md:block">
                    <h2 className="text-lg font-bold mb-4">Gender</h2>
                    <ul>
                        <li className="mb-2">
                            <input
                                type="checkbox"
                                name="gender"
                                value="Men"
                                checked={gender === 'Men'}
                                onChange={() => setGender(gender === 'Men' ? '' : 'Men')}
                            /> Men
                        </li>
                        <li className="mb-2">
                            <input
                                type="checkbox"
                                name="gender"
                                value="Women"
                                checked={gender === 'Women'}
                                onChange={() => setGender(gender === 'Women' ? '' : 'Women')}
                            /> Women
                        </li>
                        {/* Add more options as needed */}
                    </ul>
                    <h2 className="text-lg font-bold mb-4">SellerTag</h2>
                    <ul className="mb-8">
                        <li className="mb-2">
                            <input
                                type="checkbox"
                                id="best-seller"
                                name="sellerTag"
                                value="best seller"
                                checked={sellerTag === 'best seller'}
                                onChange={() => setSellerTag(sellerTag === 'best seller' ? '' : 'best seller')}
                            /> Best Seller
                        </li>
                        <li className="mb-2">
                            <input
                                type="checkbox"
                                id="trending"
                                name="sellerTag"
                                value="trending"
                                checked={sellerTag === 'trending'}
                                onChange={() => setSellerTag(sellerTag === 'trending' ? '' : 'trending')}
                            /> Trending
                        </li>
                        <li className="mb-2">
                            <input
                                type="checkbox"
                                id="new-arrival"
                                name="sellerTag"
                                value="new arrival"
                                checked={sellerTag === 'new arrival'}
                                onChange={() => setSellerTag(sellerTag === 'new arrival' ? '' : 'new arrival')}
                            /> New Arrival
                        </li>
                        <li className="mb-2">
                            <input
                                type="checkbox"
                                id="top-rated"
                                name="sellerTag"
                                value="top rated"
                                checked={sellerTag === 'top rated'}
                                onChange={() => setSellerTag(sellerTag === 'top rated' ? '' : 'top rated')}
                            /> Top Rated
                        </li>
                    </ul>
                    <h2 className="text-lg font-bold mb-4">Brand</h2>
                    <ul className='m-8'>
                        <li className="mb-2">
                            <input
                                type="checkbox"
                                name="brand"
                                value="Bewakoof®"
                                checked={brand === 'Bewakoof®'}
                                onChange={() => setBrand(brand === 'Bewakoof®' ? '' : 'Bewakoof®')}
                            /> Bewakoof®
                        </li>
                        <li className="mb-2">
                            <input
                                type="checkbox"
                                name="brand"
                                value="Campus Sutra"
                                checked={brand === 'Campus Sutra'}
                                onChange={() => setBrand(brand === 'Campus Sutra' ? '' : 'Campus Sutra')}
                            /> Campus Sutra
                        </li>
                        <li className="mb-2">
                            <input
                                type="checkbox"
                                name="brand"
                                value="7 Shores"
                                checked={brand === '7 Shores'}
                                onChange={() => setBrand(brand === '7 Shores' ? '' : '7 Shores')}
                            /> 7 Shores
                        </li>
                        <li className="mb-2">
                            <input
                                type="checkbox"
                                name="brand"
                                value="TISTABENE"
                                checked={brand === 'TISTABENE'}
                                onChange={() => setBrand(brand === 'TISTABENE' ? '' : 'TISTABENE')}
                            /> TISTABENE
                        </li>
                        <li className="mb-2">
                            <input
                                type="checkbox"
                                name="brand"
                                value="SAVVAO"
                                checked={brand === 'SAVVAO'}
                                onChange={() => setBrand(brand === 'SAVVAO' ? '' : 'SAVVAO')}
                            /> SAVVAO
                        </li>
                        <li className="mb-2">
                            <input
                                type="checkbox"
                                name="brand"
                                value="BEWAKOOF X STREETWEAR"
                                checked={brand === 'BEWAKOOF X STREETWEAR'}
                                onChange={() => setBrand(brand === 'BEWAKOOF X STREETWEAR' ? '' : 'BEWAKOOF X STREETWEAR')}
                            /> BEWAKOOF X STREETWEAR
                        </li>
                        <li className="mb-2">
                            <input
                                type="checkbox"
                                name="brand"
                                value="OFFICIAL MARVEL MERCHANDISE"
                                checked={brand === 'OFFICIAL MARVEL MERCHANDISE'}
                                onChange={() => setBrand(brand === 'OFFICIAL MARVEL MERCHANDISE' ? '' : 'OFFICIAL MARVEL MERCHANDISE')}
                            /> OFFICIAL MARVEL MERCHANDISE
                        </li>
                        <li className="mb-2">
                            <input
                                type="checkbox"
                                name="brand"
                                value="OFFICIAL DC MERCHANDISE"
                                checked={brand === 'OFFICIAL DC MERCHANDISE'}
                                onChange={() => setBrand(brand === 'OFFICIAL DC MERCHANDISE' ? '' : 'OFFICIAL DC MERCHANDISE')}
                            /> OFFICIAL DC MERCHANDISE
                        </li>
                        <li className="mb-2">
                            <input
                                type="checkbox"
                                name="brand"
                                value="OFFICIAL TOM & JERRY MERCHANDISE"
                                checked={brand === 'OFFICIAL TOM & JERRY MERCHANDISE'}
                                onChange={() => setBrand(brand === 'OFFICIAL TOM & JERRY MERCHANDISE' ? '' : 'OFFICIAL TOM & JERRY MERCHANDISE')}
                            /> OFFICIAL TOM & JERRY MERCHANDISE
                        </li>
                        <li className="mb-2">
                            <input
                                type="checkbox"
                                name="brand"
                                value="OFFICIAL NARUTO MERCHANDISE"
                                checked={brand === 'OFFICIAL NARUTO MERCHANDISE'}
                                onChange={() => setBrand(brand === 'OFFICIAL NARUTO MERCHANDISE' ? '' : 'OFFICIAL NARUTO MERCHANDISE')}
                            /> OFFICIAL NARUTO MERCHANDISE
                        </li>
                    </ul>
                    <h2 className="text-lg font-bold mb-4">Color</h2>
                    <ul className='mb-8'>
                        <li className="mb-2">
                            <input
                                type='checkbox'
                                name='color'
                                value='BLACK'
                                checked={color === 'BLACK'}
                                onChange={() => setColor(color === 'BLACK' ? '' : 'BLACK')}
                            /> BLACK
                            <button className='ml-2 pl-4 pr-4 pt-4 border bg-black'></button>
                        </li>
                        <li className="mb-2">
                            <input
                                type='checkbox'
                                name='color'
                                value='BLUE'
                                checked={color === 'BLUE'}
                                onChange={() => setColor(color === 'BLUE' ? '' : 'BLUE')}
                            /> BLUE
                            <button className='ml-2 pl-4 pr-4 pt-4 border bg-blue-800'></button>
                        </li>
                        <li className="mb-2">
                            <input
                                type='checkbox'
                                name='color'
                                value='WHITE'
                                checked={color === 'WHITE'}
                                onChange={() => setColor(color === 'WHITE' ? '' : 'WHITE')}
                            /> WHITE
                            <button className='ml-2 pl-4 pr-4 pt-4 border bg-white'></button>
                        </li>
                        <li className="mb-2">
                            <input
                                type='checkbox'
                                name='color'
                                value='GREEN'
                                checked={color === 'GREEN'}
                                onChange={() => setColor(color === 'GREEN' ? '' : 'GREEN')}
                            /> GREEN
                            <button className='ml-2 pl-4 pr-4 pt-4 border bg-green-800'></button>
                        </li>
                        <li className="mb-2">
                            <input
                                type='checkbox'
                                name='color'
                                value='RED'
                                checked={color === 'RED'}
                                onChange={() => setColor(color === 'RED' ? '' : 'RED')}
                            /> RED
                            <button className='ml-2 pl-4 pr-4 pt-4 border bg-red-800'></button>
                        </li>
                        <li className="mb-2">
                            <input
                                type='checkbox'
                                name='color'
                                value='ORANGE'
                                checked={color === 'ORANGE'}
                                onChange={() => setColor(color === 'ORANGE' ? '' : 'ORANGE')}
                            /> ORANGE
                            <button className='ml-2 pl-4 pr-4 pt-4 border bg-orange-800'></button>
                        </li>
                        <li className="mb-2">
                            <input
                                type='checkbox'
                                name='color'
                                value='PURPLE'
                                checked={color === 'PURPLE'}
                                onChange={() => setColor(color === 'PURPLE' ? '' : 'PURPLE')}
                            /> PURPLE
                            <button className='ml-2 pl-4 pr-4 pt-4 border bg-purple-800'></button>
                        </li>
                        <li className="mb-2">
                            <input
                                type='checkbox'
                                name='color'
                                value='PINK'
                                checked={color === 'PINK'}
                                onChange={() => setColor(color === 'PINK' ? '' : 'PINK')}
                            /> PINK
                            <button className='ml-2 pl-4 pr-4 pt-4 border bg-pink-800'></button>
                        </li>
                        <li className="mb-2">
                            <input
                                type='checkbox'
                                name='color'
                                value='YELLOW'
                                checked={color === 'YELLOW'}
                                onChange={() => setColor(color === 'YELLOW' ? '' : 'YELLOW')}
                            /> YELLOW
                            <button className='ml-2 pl-4 pr-4 pt-4 border bg-yellow-800'></button>
                        </li>
                    </ul>
                </div>

                {/* Main content */}
                <div className="w-full md:w-3/4">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold">{searchTerm.toUpperCase()}</h1>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <p>{products.length} items</p>
                        {sellerTag && <p>Seller Tag: {sellerTag.toUpperCase()}</p>}
                        {brand && <p>Brand: {brand.toUpperCase()}</p>}
                        {gender && <p>Gender: {gender.toUpperCase()}</p>}
                        <select className="hidden md:block border p-2 rounded w-full md:w-auto">
                            <option value="default">Default</option>
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                            {/* Add more sorting options as needed */}
                        </select>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {error ? (
                            <div className="col-span-4 text-center text-3xl font-bold text-red-500">{error}</div>
                        ) : products.length === 0 ? (
                            <div className="col-span-4 text-center">No items found</div>
                        ) : (
                            products.map((product) => (
                                <div key={product._id} className="p-2 mb-4 mt-4 relative">
                                    <div className="border rounded-md overflow-hidden hover:shadow-md hover:scale-105 transition duration-300">
                                        <div>
                                            <img src={product.displayImage} alt={product.name} className="w-full h-35 object-cover" />
                                        </div>
                                        <h3 className="ml-2 overflow-hidden whitespace-nowrap overflow-ellipsis cursor-pointer" onClick={() => productWithDetailPage(product)}>{product.name}</h3>
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
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile filter and sort buttons */}
            <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md md:hidden flex justify-around p-4 border-t">
                <button
                    onClick={() => setShowFilter(!showFilter)}
                    className="flex items-center space-x-2"
                >
                    <FontAwesomeIcon icon={faFilter} size="lg" />
                    <span>FILTER</span>
                </button>
                <button
                    onClick={() => setShowSort(!showSort)}
                    className="flex items-center space-x-2"
                >
                    <FontAwesomeIcon icon={faSort} size="lg" />
                    <span>SORT</span>
                </button>
            </div>

            {/* Mobile filter options */}
            {showFilter && (
                <div className="fixed inset-0 bg-white p-4 z-10 md:hidden overflow-y-auto">
                    <h2 className="text-lg font-bold mb-4">Gender</h2>
                    <ul>
                        <li className="mb-2">
                            <input
                                type="checkbox"
                                name="gender"
                                value="Men"
                                checked={gender === 'Men'}
                                onChange={() => setGender(gender === 'Men' ? '' : 'Men')}
                            /> Men
                        </li>
                        <li className="mb-2">
                            <input
                                type="checkbox"
                                name="gender"
                                value="Women"
                                checked={gender === 'Women'}
                                onChange={() => setGender(gender === 'Women' ? '' : 'Women')}
                            /> Women
                        </li>
                        {/* Add more options as needed */}
                    </ul>
                    <h2 className="text-lg font-bold mb-4">SellerTag</h2>
                    <ul className="mb-8">
                        <li className="mb-2">
                            <input
                                type="checkbox"
                                id="best-seller"
                                name="sellerTag"
                                value="best seller"
                                checked={sellerTag === 'best seller'}
                                onChange={() => setSellerTag(sellerTag === 'best seller' ? '' : 'best seller')}
                            /> Best Seller
                        </li>
                        <li className="mb-2">
                            <input
                                type="checkbox"
                                id="trending"
                                name="sellerTag"
                                value="trending"
                                checked={sellerTag === 'trending'}
                                onChange={() => setSellerTag(sellerTag === 'trending' ? '' : 'trending')}
                            /> Trending
                        </li>
                        <li className="mb-2">
                            <input
                                type="checkbox"
                                id="new-arrival"
                                name="sellerTag"
                                value="new arrival"
                                checked={sellerTag === 'new arrival'}
                                onChange={() => setSellerTag(sellerTag === 'new arrival' ? '' : 'new arrival')}
                            /> New Arrival
                        </li>
                        <li className="mb-2">
                            <input
                                type="checkbox"
                                id="top-rated"
                                name="sellerTag"
                                value="top rated"
                                checked={sellerTag === 'top rated'}
                                onChange={() => setSellerTag(sellerTag === 'top rated' ? '' : 'top rated')}
                            /> Top Rated
                        </li>
                    </ul>
                    <h2 className="text-lg font-bold mb-4">Brand</h2>
                    <ul>
                        <li className="mb-2">
                            <input
                                type="checkbox"
                                name="brand"
                                value="Bewakoof®"
                                checked={brand === 'Bewakoof®'}
                                onChange={() => setBrand(brand === 'Bewakoof®' ? '' : 'Bewakoof®')}
                            /> Bewakoof®
                        </li>
                        <li className="mb-2">
                            <input
                                type="checkbox"
                                name="brand"
                                value="Campus Sutra"
                                checked={brand === 'Campus Sutra'}
                                onChange={() => setBrand(brand === 'Campus Sutra' ? '' : 'Campus Sutra')}
                            /> Campus Sutra
                        </li>
                        <li className="mb-2">
                            <input
                                type="checkbox"
                                name="brand"
                                value="7 Shores"
                                checked={brand === '7 Shores'}
                                onChange={() => setBrand(brand === '7 Shores' ? '' : '7 Shores')}
                            /> 7 Shores
                        </li>
                        <li className="mb-2">
                            <input
                                type="checkbox"
                                name="brand"
                                value="TISTABENE"
                                checked={brand === 'TISTABENE'}
                                onChange={() => setBrand(brand === 'TISTABENE' ? '' : 'TISTABENE')}
                            /> TISTABENE
                        </li>
                        <li className="mb-2">
                            <input
                                type="checkbox"
                                name="brand"
                                value="SAVVAO"
                                checked={brand === 'SAVVAO'}
                                onChange={() => setBrand(brand === 'SAVVAO' ? '' : 'SAVVAO')}
                            /> SAVVAO
                        </li>
                        <li className="mb-2">
                            <input
                                type="checkbox"
                                name="brand"
                                value="BEWAKOOF X STREETWEAR"
                                checked={brand === 'BEWAKOOF X STREETWEAR'}
                                onChange={() => setBrand(brand === 'BEWAKOOF X STREETWEAR' ? '' : 'BEWAKOOF X STREETWEAR')}
                            /> BEWAKOOF X STREETWEAR
                        </li>
                        <li className="mb-2">
                            <input
                                type="checkbox"
                                name="brand"
                                value="OFFICIAL MARVEL MERCHANDISE"
                                checked={brand === 'OFFICIAL MARVEL MERCHANDISE'}
                                onChange={() => setBrand(brand === 'OFFICIAL MARVEL MERCHANDISE' ? '' : 'OFFICIAL MARVEL MERCHANDISE')}
                            /> OFFICIAL MARVEL MERCHANDISE
                        </li>
                        <li className="mb-2">
                            <input
                                type="checkbox"
                                name="brand"
                                value="OFFICIAL DC MERCHANDISE"
                                checked={brand === 'OFFICIAL DC MERCHANDISE'}
                                onChange={() => setBrand(brand === 'OFFICIAL DC MERCHANDISE' ? '' : 'OFFICIAL DC MERCHANDISE')}
                            /> OFFICIAL DC MERCHANDISE
                        </li>
                        <li className="mb-2">
                            <input
                                type="checkbox"
                                name="brand"
                                value="OFFICIAL TOM & JERRY MERCHANDISE"
                                checked={brand === 'OFFICIAL TOM & JERRY MERCHANDISE'}
                                onChange={() => setBrand(brand === 'OFFICIAL TOM & JERRY MERCHANDISE' ? '' : 'OFFICIAL TOM & JERRY MERCHANDISE')}
                            /> OFFICIAL TOM & JERRY MERCHANDISE
                        </li>
                        <li className="mb-2">
                            <input
                                type="checkbox"
                                name="brand"
                                value="OFFICIAL NARUTO MERCHANDISE"
                                checked={brand === 'OFFICIAL NARUTO MERCHANDISE'}
                                onChange={() => setBrand(brand === 'OFFICIAL NARUTO MERCHANDISE' ? '' : 'OFFICIAL NARUTO MERCHANDISE')}
                            /> OFFICIAL NARUTO MERCHANDISE
                        </li>
                    </ul>
                    <button onClick={() => setShowFilter(false)} className="mt-4 bg-blue-500 text-white p-2 rounded">Close</button>
                </div>
            )}

            {/* Mobile sort options */}
            {showSort && (
                <div className="fixed inset-0 bg-white p-4 z-10 md:hidden overflow-y-auto">
                    <h2 className="text-lg font-bold mb-4">Sort by</h2>
                    <ul>
                        <li className="mb-2">
                            <input type="radio" name="sort" value="default" /> Default
                        </li>
                        <li className="mb-2">
                            <input type="radio" name="sort" value="price-asc" /> Price: Low to High
                        </li>
                        <li className="mb-2">
                            <input type="radio" name="sort" value="price-desc" /> Price: High to Low
                        </li>
                    </ul>
                    <button onClick={() => setShowSort(false)} className="mt-4 bg-blue-500 text-white p-2 rounded">Close</button>
                </div>
            )}
        </div>
    );
};

export default SearchPage;
