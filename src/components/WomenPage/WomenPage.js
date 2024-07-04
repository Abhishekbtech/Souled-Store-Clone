import React from 'react'
import ProductsByCategory from '../HomePage/ProductsByCategory'

function WomenPage() {
    return (
        <>
            <ProductsByCategory category="jeans" />
            <ProductsByCategory category="jogger" />
            <ProductsByCategory category="jumpsuit" />
            <ProductsByCategory category="kurti" />
        </>
    )
}

export default WomenPage