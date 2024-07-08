import React from 'react';
import HeroBanner from './HeroBanner';
import Categories from './Categories';
import BestDeals from './BestDeals';
import BestSeller from './BestSeller';
import Trending from './Trending';
import NewArrival from './NewArrival';
import Footer from '../Footer/Footer';
import Bestsell from './Bestsell';

const Home = () => {
    return (
        <div className='m-5'>
            <HeroBanner />
            <Categories />
            {/* <BestSeller/> */}
            <Bestsell/>
            <Trending/>
            <NewArrival/>
            <BestDeals />
            <Footer />
        </div>
    );
};

export default Home;