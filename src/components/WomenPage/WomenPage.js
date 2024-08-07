import React from 'react'
import SellerTag from '../CategoryData/SellerTag'
import Categorie from './Categorie'
import ScrolPage from './ScrolPage'

function WomenPage() {
    return (
        <div className='m-3'>
            <ScrolPage/>
            <Categorie/>
            <SellerTag gender="Women" sellerTag="trending"/>
            <SellerTag gender="Women" sellerTag="top rated"/>
            <SellerTag gender="Women" sellerTag="new arrival"/>
            <SellerTag gender="Women" sellerTag="best seller"/>
        </div>
    )
}

export default WomenPage