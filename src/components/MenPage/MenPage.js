import React from 'react'
import Categorie from './Categorie'
import Trending from './Trending'
import TopRated from './TopRated'
import NewArrival from './NewArrival'
import BestSeller from './BestSeller'

function MenPage() {
    return (
        <div className='m-3'>
            <Categorie/>
            <Trending/>
            <TopRated/>
            <NewArrival/>
            <BestSeller/>
        </div>
    )
}

export default MenPage