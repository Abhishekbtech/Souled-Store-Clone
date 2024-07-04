import React from 'react'
import ProductsByCategory from '../HomePage/ProductsByCategory'

function MenPage() {
    return (
        <>
            <ProductsByCategory category="hoodie" />
            <ProductsByCategory category="pyjamas" />
            <ProductsByCategory category="shirt" />
            <ProductsByCategory category="shorts" />
            <ProductsByCategory category="sweater" />
            <ProductsByCategory category="tracksuit" />
            <ProductsByCategory category="trouser" />
            <ProductsByCategory category="tshirt" />
        </>
    )
}

export default MenPage