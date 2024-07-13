import React from 'react'
import Categorie from './Categorie'
import ProductsBySellerTag from '../CategoryData/ProductsBySellerTag'
import ScorlPage from './ScorlPage'

function MenPage() {
    return (
        <div className='m-3'>
            <ScorlPage/>
            <Categorie/>
            <ProductsBySellerTag gender="Men" sellerTag="trending"/>
            <ProductsBySellerTag gender="Men" sellerTag="top rated"/>
            <ProductsBySellerTag gender="Men" sellerTag="new arrival"/>
            <ProductsBySellerTag gender="Men" sellerTag="best seller"/>
        </div>
    )
}

export default MenPage