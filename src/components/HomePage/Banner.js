import React from 'react';
import { Sales } from '../data/data';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

const Banner = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            infinite={true}
            showDots={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {Sales.map((item) => (
                <div key={item.id}>
                    <Link to={`/${item.href}`} className="swiper-slide" data-swiper-slide-index={`${item.index}`}>
                        <img src={`${item.url}`} className='swiper-slide-img' alt='title' />
                    </Link>
                </div>
            ))}
        </Carousel>
    );
};

export default Banner;
