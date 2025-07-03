"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const ProductCard = ({ product }) => {
    const router = useRouter()
    return (

        <div onClick={() => router.push(`/urunler/${product.slugText}`)} className="cursor-pointer hover:scale-105 transition-all p-4 w-full  h-[300px] md:h-[450px] border-grey-300 border rounded-3xl">
            <div className="rounded-2xl flex items-center justify-center">
                <Image src={product.imageURL} width={250} height={0} alt={product.title} />
            </div>
            <div className="p-2 flex flex-col gap-2 mt-4 pt-4">
                <h3 className=" text-sm md:text-xl   font-semibold">{product.title}</h3>
                <p className="text-base text-slate-500">{product.unitPrice.toFixed(2)}₺ / {product.unit}</p>
                <h4 className='text-2xl font-semibold'>{product.unitPrice}₺</h4>
            </div>
            {/* <Button className="rounded-full text-white bg-green-800 hover:bg-green-700 w-full">
                Sepete Ekle
              </Button> */}
        </div>
    )
}

export default ProductCard