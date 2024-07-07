import React from 'react';

const HeroBanner = () => {
    return (
        <div className="hero-banner bg-cover bg-center h-64 md:h-96" style={{ backgroundImage: "url('https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
            <div className="h-full w-full bg-black bg-opacity-50 flex items-center justify-center">
                <h1 className="text-white text-3xl md:text-5xl font-bold">Welcome to The Soul Store</h1>
            </div>
        </div>
    );
};

export default HeroBanner;