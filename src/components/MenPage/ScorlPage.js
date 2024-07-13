import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import ScorlData from './data/ScorlData';

function ScorlPage() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
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
            autoPlaySpeed={3000}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {ScorlData.map((item) => (
                <div key={item.id}>
                    <Link to={`/men/${item.title}`} className="swiper-slide" data-swiper-slide-index={`${item.index}`}>
                        <img src={`${item.url}`} className='swiper-slide-img' alt='title' />
                    </Link>
                </div>
            ))}
        </Carousel>
    );
}

export default ScorlPage