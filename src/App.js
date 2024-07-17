import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/NavBar';
import SecondNavbar from './components/Navbar/SecondNavbar';
import Home from './components/HomePage/HomePage';
import Men from './components/MenPage/MenPage';
import Women from './components/WomenPage/WomenPage';
import SearchPage from './components/Search/SearchPage';
import Footer from './components/Footer/Footer';
import ProductsByCategory from './components/CategoryData/ProductsByCategory';
import ProductDetails from './components/ProductDetailsPage/ProductDetails';
import AuthForm from './components/Sing/AuthForm';
import CartPage from './components/Cart/CartPage';
import WishListPage from './components/Wish-list/WishListPage';
import Address from './components/Cart/Address';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <SecondNavbar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path='/search' element={<SearchPage/>}/>
          <Route path='/:gender/:type' element={<ProductsByCategory/>}/>
          <Route path='/:productId' element={<ProductDetails/>}/>
          <Route path='/signup' element={<AuthForm/>}/>
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='/wishlist' element={<WishListPage/>}/>
          <Route path='/address' element={<Address/>}/>
        </Routes>
        {/* <Footer/> */}
      </div>
    </Router>
  );
}

export default App;