import React from 'react';
import HeroBanner from './HeroBanner';
import Categories from './Categories';
import ProductsByCategory from './ProductsByCategory';
import BestDeals from './BestDeals';
// import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <Categories />
      <ProductsByCategory category="hoodie" />
      <ProductsByCategory category="jeans" />
      <ProductsByCategory category="jogger" />
      <ProductsByCategory category="tshirt" />
      
      {/* <BestDeals /> */}
      {/* <Footer /> */}
      ji
    </div>
  );
};

export default Home;