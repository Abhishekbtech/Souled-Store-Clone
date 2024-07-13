import React from 'react'
import Categorie from './Categorie'
import ProductsBySellerTag from '../CategoryData/ProductsBySellerTag'

function MenPage() {
    return (
        <div className='m-3'>
            
            <ProductsBySellerTag gender="Men" sellerTag="trending"/>
            <Categorie/>
            <ProductsBySellerTag gender="Men" sellerTag="top rated"/>
            <ProductsBySellerTag gender="Men" sellerTag="new arrival"/>
            <ProductsBySellerTag gender="Men" sellerTag="best seller"/>
        </div>
    )
}

export default MenPage