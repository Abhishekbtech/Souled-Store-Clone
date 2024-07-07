import React from 'react';
import HeroBanner from './HeroBanner';
import Categories from './Categories';
import BestDeals from './BestDeals';
import BestSeller from './BestSeller';
import Trending from './Trending';
import NewArrival from './NewArrival';
// import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <HeroBanner />
            <Categories />
            <BestSeller/>
            <Trending/>
            <NewArrival/>
            <BestDeals />
            {/* <Footer /> */}
        </div>
    );
};

export default Home;