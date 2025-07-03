import ProductCard from '@/components/ProductComponents/ProductCard'
import { allProducts } from '@/data/products'
import React from 'react'

const page = () => {
    return (
        <div className='px-4 md:px-64 md:py-12'>
            <span>
                <h1 className='text-2xl text-center md:text-start font-semibold'>Tüm Ürünler</h1>
            </span>
            <div className='grid md:grid-cols-4 grid-cols-2 gap-4 md:gap-8 py-8'>
                {
                    allProducts.map((product, index) => (
                        <ProductCard product={product} key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default page