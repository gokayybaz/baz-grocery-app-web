"use client"
import { Rating } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { Plus } from 'lucide-react'
import { HeartPlus } from 'lucide-react'
import { Share2 } from 'lucide-react'
import { LocateFixedIcon } from 'lucide-react'
import { Card, CardContent, CardHeader } from '../ui/card'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useBasket } from '@/contexts/BasketContext'


const ProductDetail = ({ product }) => {
    const { addCartItem } = useBasket()
    const handleAddCartButton = () => {
        addCartItem(1, new Date().getFullYear(), product)
    }
    return (
        <div className='flex px-4 flex-col gap-6 md:gap-12 md:px-64 md:py-12 min-h-screen'>
            <div className='flex flex-col md:flex-row gap-2 md:gap-16 '>
                <div className='md:w-5/12 relative border border-slate-200 md:h-[500px] rounded-xl items-center justify-center flex'>
                    <Image src={product.imageURL} alt='' width={450} height={450} />
                </div>
                <div className='py-8 flex flex-col gap-6 md:w-7/12'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-2xl font-semibold'>{product.title}</h1>
                        <p className='text-slate-500 px-4 py-2 italic text-lg'>{product.description}</p>
                        <span className='flex items-center gap-2'>
                            <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />
                            <p className='text-slate-500 italic'>({product.reviewCount})</p>
                        </span>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <span className='flex flex-col px-4 md:px-0 gap-1'>
                            <p className='text-lg font-semibold italic text-slate-500'>{product.unitPrice}₺ /{product.unit}</p>
                            <h2 className='text-4xl font-bold'>{product.unitPrice}₺</h2>
                        </span>
                        <span className='flex justify-center md:justify-start items-center gap-4'>
                            <Button onClick={handleAddCartButton} className="bg-green-700 h-12 w-2/3 md:w-1/3 rounded-full font-semibold  text-white hover:bg-green-600"><Plus /> Sepete Ekle</Button>
                            <Button className="h-12 rounded-full" variant="outline"><HeartPlus /></Button>
                            <Button className="h-12 rounded-full" variant="outline"><Share2 /></Button>
                        </span>
                        <span className='flex items-center gap-2'>
                            <p className='font-semibold text-slate-500'>Online Stok Durumu:</p>
                            <p className={`font-semibold underline ${product.stock > 0 ? "text-green-500" : "text-red-500"}`} >{product.stock > 0 ? `Stokta Var` : "Stokta Yok"}</p>
                        </span>
                        <span className='flex flex-row'>
                            <Button className="h-12 rounded-full font-semibold px-8 text-black" variant="outline"><LocateFixedIcon /> Mağazada Bul</Button>
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <span className='flex w-max p-4 px-8 border border-slate-200 border-b-transparent bg-green-50 rounded-tl-2xl rounded-tr-2xl'>
                    <h3 className='font-semibold'>Ürün Açıklaması ve Özellikleri</h3>
                </span>
                <div className='p-4 border flex flex-col gap-8 border-slate-200'>
                    <p>{product.description}</p>
                    <div className='flex flex-col gap-8'>
                        {
                            product.origin && (
                                <Card className="w-max">
                                    <CardHeader className="font-semibold">
                                        Ürün Menşei
                                    </CardHeader>
                                    <CardContent>
                                        {product.origin}'de Üretilmiştir.
                                    </CardContent>
                                </Card>
                            )
                        }
                        {
                            product.details && (<div className='border p-4 rounded-xl'>
                                <Table>
                                    <TableCaption>Ürüne Özel Detaylar</TableCaption>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Detay Adı</TableHead>
                                            <TableHead>Detay İçeriği</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {
                                            product.details.ingredients && (
                                                <TableRow>
                                                    <TableCell className="font-semibold">Ürün İçeriği</TableCell>
                                                    <TableCell className="flex flex-col gap-2">
                                                        {product.details.ingredients.map((productIngredient, index) => <p key={index}>{productIngredient}</p>)}
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        }
                                        {
                                            product.details.allergenWarning && (
                                                <TableRow>
                                                    <TableCell className="font-semibold">Ürün Alerjen İçeriği</TableCell>
                                                    <TableCell className="flex items-center gap-4">
                                                        {product.details.allergenWarning}
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        }
                                        {
                                            product.details.nutritionalInfo && (
                                                <TableRow>
                                                    <TableCell className="font-semibold">Ürün Besin Değerleri (100g/ml)</TableCell>
                                                    <TableCell className="flex flex-col gap-2">
                                                        <p>Porsiyon: {product.details.nutritionalInfo.per}</p>
                                                        <p>Enerji: {product.details.nutritionalInfo.energy}</p>
                                                        <p>Yağ: {product.details.nutritionalInfo.fat}</p>
                                                        <p>Karbonhidrat: {product.details.nutritionalInfo.carbohydrates}</p>
                                                        <p>Protein: {product.details.nutritionalInfo.protein}</p>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        }
                                        {
                                            product.details.storageConditions && (
                                                <TableRow>
                                                    <TableCell className="font-semibold">Ürün Saklama Koşulları</TableCell>
                                                    <TableCell className="flex items-center gap-4">
                                                        {product.details.storageConditions}
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        }
                                        {
                                            product.details.usageSuggestion && (
                                                <TableRow>
                                                    <TableCell className="font-semibold">Ürün Kullanımı</TableCell>
                                                    <TableCell className="flex items-center gap-4">
                                                        {product.details.usageSuggestion}
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        }
                                        {
                                            product.details.safetyWarnings && (
                                                <TableRow>
                                                    <TableCell className="font-semibold">Ürün Güvenlik Uyarısı</TableCell>
                                                    <TableCell className="flex items-center gap-4">
                                                        {product.details.safetyWarnings}
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        }
                                    </TableBody>
                                </Table>
                            </div>)
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail