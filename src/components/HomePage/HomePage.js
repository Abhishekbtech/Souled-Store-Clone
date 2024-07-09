import React from 'react';
import HeroBanner from './HeroBanner';
import Categories from './Categories';
import BestDeals from './BestDeals';
import BestSeller from './BestSeller';
import Trending from './Trending';
import NewArrival from './NewArrival';
import Footer from '../Footer/Footer';
import Bestsell from './Bestsell';
import Banner from './Banner';
import Img from './Img';

const Home = () => {
    return (
        <div className='m-5'>
            <Banner />
            {/* <HeroBanner /> */}
            <Categories />
            <Img/>
            <BestSeller />
            {/* <Bestsell/> */}
            <Trending />
            <NewArrival />
            <BestDeals />
            <Footer />
        </div>
    );
};

export default Home;