import React from 'react'
import ProductsBySellerTag from '../CategoryData/ProductsBySellerTag'
import Categorie from './Categorie'
import ScrolPage from './ScrolPage'

function WomenPage() {
    return (
        <div className='m-3'>
            <ScrolPage/>
            <Categorie/>
            <ProductsBySellerTag gender="Women" sellerTag="trending"/>
            <ProductsBySellerTag gender="Women" sellerTag="top rated"/>
            <ProductsBySellerTag gender="Women" sellerTag="new arrival"/>
            <ProductsBySellerTag gender="Women" sellerTag="best seller"/>
        </div>
    )
}

export default WomenPage