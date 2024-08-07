import React from 'react'
import Categorie from './Categorie'
import ScorlPage from './ScorlPage'
import SellerTag from '../CategoryData/SellerTag'

function MenPage() {
    return (
        <div className='m-3'>
            <ScorlPage/>
            <Categorie/>
            <SellerTag gender="Men" sellerTag="trending"/>
            <SellerTag gender="Men" sellerTag="top rated"/>
            <SellerTag gender="Men" sellerTag="new arrival"/>
            <SellerTag gender="Men" sellerTag="best seller"/>
        </div>
    )
}
export default MenPage