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

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <SecondNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path='/search' element={<SearchPage/>}/>
          <Route path='/:gender/:type' element={<ProductsByCategory/>}/>
          <Route path='/:productId' element={<ProductDetails/>}/>
          <Route path='/sing' element={<AuthForm/>}/>
        </Routes>
        {/* <Footer/> */}
      </div>
    </Router>
  );
}

export default App;