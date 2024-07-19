import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/NavBar';
import SecondNavbar from './components/Navbar/SecondNavbar';
import Men from './components/MenPage/MenPage';
import Women from './components/WomenPage/WomenPage';
import SearchPage from './components/Search/SearchPage';
import Foo from './components/Footer/Foo';
import ProductsByCategory from './components/CategoryData/ProductsByCategory';
import ProductDetails from './components/ProductDetailsPage/ProductDetails';
import AuthForm from './components/Sing/AuthForm';
import CartPage from './components/Cart/CartPage';
import WishListPage from './components/Wish-list/WishListPage';
import Address from './components/Cart/Address';
import Payment from './components/Cart/Payment';
import OrderMessage from './components/Order/OrderMessage';
import OrderDetails from './components/Order/OrderDetails';
import ScrolManData from './components/MenPage/ScrolManData';
import ScrolWomenData from './components/WomenPage/ScrolWomenData';
import Kids from './components/Kids/Kids';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <SecondNavbar />
        <Routes>
          <Route path="/" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path='/kids' element={<Kids/>}/>
          <Route path='/search' element={<SearchPage/>}/>
          <Route path='/:gender/:type' element={<ProductsByCategory/>}/>
          <Route path='/:productId' element={<ProductDetails/>}/>
          <Route path='/signup' element={<AuthForm/>}/>
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='/wishlist' element={<WishListPage/>}/>
          <Route path='/address' element={<Address/>}/>
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/ordermessage' element={<OrderMessage/>}/>
          <Route path='/order' element={<OrderDetails/>}/>
          <Route path='/men/:subCategory' element={<ScrolManData/>}/>
          <Route path='/women/:subCategory' element={<ScrolWomenData/>}/>
        </Routes>
        <Foo/>
      </div>
    </Router>
  );
}

export default App;