import React from 'react'
import ProductsBySellerTag from '../CategoryData/ProductsBySellerTag'
import Categorie from './Categorie'

function WomenPage() {
    return (
        <div className='m-3'>
            <Categorie/>
            <ProductsBySellerTag gender="Women" sellerTag="trending"/>
            <ProductsBySellerTag gender="Women" sellerTag="top rated"/>
            <ProductsBySellerTag gender="Women" sellerTag="new arrival"/>
            <ProductsBySellerTag gender="Women" sellerTag="best seller"/>
        </div>
    )
}

export default WomenPage