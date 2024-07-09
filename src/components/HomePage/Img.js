import React from 'react';
import { Link } from 'react-router-dom';

function Img() {
    return (
        <div className="flex justify-center">
            <Link to="/men">
                <img src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Men-1696916713.jpg" alt="Men"/>
            </Link>
            <Link to="/women">
                <img src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Women-1696916708.jpg" alt="Women"/>
            </Link>
        </div>
    );
}

export default Img;
