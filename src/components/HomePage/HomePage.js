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
            {/* <Categories /> */}
            <ProductsByCategory category="hoodie" />
            <ProductsByCategory category="jeans" />
            <ProductsByCategory category="jogger" />
            <ProductsByCategory category="jumpsuit" />
            <ProductsByCategory category="kurta" />
            <ProductsByCategory category="kurti" />
            <ProductsByCategory category="pyjamas" />
            <ProductsByCategory category="shirt" />
            <ProductsByCategory category="shorts" />
            <ProductsByCategory category="sweater" />
            <ProductsByCategory category="tracksuit" />
            <ProductsByCategory category="trouser" />
            <ProductsByCategory category="tshirt" />

            <BestDeals />
            {/* <Footer /> */}
        </div>
    );
};

export default Home;