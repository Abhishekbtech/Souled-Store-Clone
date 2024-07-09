import React from 'react'
import Categorie from './Categorie'
import Trending from './Trending'
import TopRated from './TopRated'
import NewArrival from './NewArrival'
import BestSeller from './BestSeller'
import ProductsBySellerTag from '../CategoryData/ProductsBySellerTag'

function MenPage() {
    return (
        <div className='m-3'>
            <Categorie/>
            <ProductsBySellerTag gender="Men" sellerTag="trending"/>
            <ProductsBySellerTag gender="Men" sellerTag="top rated"/>
            <ProductsBySellerTag gender="Men" sellerTag="new arrival"/>
            <ProductsBySellerTag gender="Men" sellerTag="best seller"/>
        </div>
    )
}

export default MenPage