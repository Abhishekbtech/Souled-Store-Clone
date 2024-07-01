import React from 'react';

const HeroBanner = () => {
    return (
        <div className="hero-banner bg-cover bg-center h-64 md:h-96" style={{ backgroundImage: "url('https://example.com/hero-banner.jpg')" }}>
            <div className="container mx-auto h-full flex items-center justify-center">
                <h1 className="text-white text-3xl md:text-5xl font-bold">Welcome to The Souled Store</h1>
            </div>
        </div>
    );
};

export default HeroBanner;