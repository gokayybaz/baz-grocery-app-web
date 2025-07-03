import React from 'react'
import ProductCard from './ProductCard'

const ProductShowCase = ({ title, showCaseType, products }) => {
    return (
        <div className="md:px-10">
            <span className={`p-4 ${showCaseType == "market" ? "bg-blue-800" : null || showCaseType == "manav" ? "bg-green-800" : null || showCaseType == "sarkuteri" ? "bg-red-800" : null}  w-max flex rounded-tl-3xl rounded-tr-3xl px-6`}>
                <h2 className="text-white font-semibold">{title}</h2>
            </span>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 py-4 justify-between items-center">
                {
                    products.map((product, index) => (<ProductCard key={index} product={product} />))
                }
            </div>
        </div>
    )
}

export default ProductShowCase