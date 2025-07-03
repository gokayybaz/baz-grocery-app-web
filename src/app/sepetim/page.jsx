"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { useBasket } from "@/contexts/BasketContext"
import { Trash2Icon } from "lucide-react"
import { Minus } from "lucide-react"
import { ChevronRight } from "lucide-react"
import { Plus } from "lucide-react"
import { LucideAmbulance } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

const page = () => {
    const router = useRouter()
    const { cartItems, updateCartItemQuantity, removeCartItem, totalProductsPrice } = useBasket()

    const handleAscProductQuantity = (currentProduct) => {
        updateCartItemQuantity(currentProduct.product.id, currentProduct.quantity + 1)
    }

    const handleDescProductQuantity = (currentProduct) => {
        updateCartItemQuantity(currentProduct.product.id, currentProduct.quantity - 1)
    }

    const handleRemoveCartProductButton = (currentProduct) => {
        removeCartItem(currentProduct.product.id)
    }

    return (
        <div className="px-60 flex w-full flex-row gap-12 py-12">
            <div className="w-4/6">
                <span>
                    <h1 className="text-2xl font-semibold">Sepetim</h1>
                </span>
                {
                    cartItems.length === 0 ? <p className="my-12">Sepetinizde ürün bulunmamaktadır!</p> : cartItems.map((currentProduct, index) => (
                        <Card key={index} className="flex flex-col my-10">
                            <CardHeader className="flex flex-row items-center justify-between">
                                <span className="flex items-center gap-2">
                                    <LucideAmbulance />
                                    <p>Yarın Kargoda</p>
                                </span>
                                <span onClick={() => handleRemoveCartProductButton(currentProduct)} className="p-2 cursor-pointer rounded-lg hover:bg-slate-100">
                                    <Trash2Icon color="red" />
                                </span>
                            </CardHeader>
                            <CardContent className="flex gap-6 items-start">
                                <div className="w-[200px] h-[200px] relative">
                                    <Image src={currentProduct.product.imageURL} fill alt="" />
                                </div>
                                <div className="flex flex-col gap-8">
                                    <h2 className="text-lg font-semibold">{currentProduct.product.title}</h2>
                                    <p className="text-green-600">Stokta: {currentProduct.product.stock > 10 ? "10+" : currentProduct.product.stock}</p>
                                    <div className="flex items-center gap-12">
                                        <span className="flex items-center border w-max p-2 rounded-lg gap-4">
                                            <span className="p-2 hover:bg-slate-100 rounded-lg cursor-pointer" onClick={() => handleDescProductQuantity(currentProduct)} ><Minus size={18} /></span>
                                            <p className="text-base select-none">{currentProduct.quantity} {currentProduct.product.unit}</p>
                                            <span className="p-2 hover:bg-slate-100 rounded-lg cursor-pointer" onClick={() => handleAscProductQuantity(currentProduct)}><Plus size={18} /></span>
                                        </span>
                                        <p className="text-2xl font-bold select-none">{currentProduct.product.unitPrice.toFixed(2)}₺</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))
                }
            </div>
            <div className="w-2/6 flex flex-col gap-10">
                <Card>
                    <CardHeader>
                        <h2 className="text-xl text-center font-semibold">Sepet Özeti</h2>
                    </CardHeader>
                    <CardContent>
                        <span className="flex flex-col gap-2">
                            <h3 className="font-semibold text-green-700">Seçilen Ürünler Toplamı ({cartItems.length})</h3>
                            <h3 className="text-2xl font-semibold">{totalProductsPrice.toFixed(2)}₺</h3>
                            <hr className="my-2" />
                            <p>Ürünler: {totalProductsPrice.toFixed(2)}₺</p>
                            <span className="flex items-center gap-2">
                                <p>Kargo:</p>
                                <p className="line-through text-slate-600">50₺</p>
                                <p className="text-green-600">Bedava</p>
                            </span>
                        </span>
                    </CardContent>
                    <CardFooter>
                        <Button onClick={() => router.push("/adres-bilgileri")} className="bg-green-700 h-12 w-full text-white font-semibold hover:bg-green-600">Alışverişi Tamamla <ChevronRight /></Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default page