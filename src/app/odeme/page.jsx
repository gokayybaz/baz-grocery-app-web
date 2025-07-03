"use client"
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import React, { useState } from 'react'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { DoorOpen } from 'lucide-react'
import { PlusCircle } from 'lucide-react'
import { LucideCreditCard } from 'lucide-react'
import { useBasket } from '@/contexts/BasketContext'

const page = () => {
    const router = useRouter()

    const [paymentType, setPaymentType] = useState(null)

    const { totalProductsPrice } = useBasket();


    return (
        <div className='px-60 flex flex-row py-12 gap-12'>
            <div className='flex w-4/6 flex-col gap-8'>
                <span>
                    <h1 className="text-2xl font-semibold">Ödeme</h1>
                </span>
                <div>
                    <div className="flex items-center flex-row gap-4">
                        <p>Ödeme Yöntemi Seçimi:</p>
                        <Select onValueChange={(value) => {

                            setPaymentType(value)
                        }}>
                            <SelectTrigger className="w-96">
                                <SelectValue placeholder="Ödeme Yönteminizi Seçiniz..." />
                            </SelectTrigger>
                            <SelectContent className="w-96">
                                <SelectItem value="kapida">Kapıda Ödeme</SelectItem>
                                <SelectItem value="kredi/banka-karti">Kredi / Banka Kartı</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                {
                    paymentType == "kapida" && (
                        <Card className="bg-slate-100">
                            <CardHeader className="flex flex-row gap-4 items-center font-semibold"><DoorOpen color='green' size={32} /> Kapıda Ödeme Bilgilendirmesi</CardHeader>
                            <CardContent className="flex flex-col gap-2">
                                <p className='italic flex items-center gap-2'><ChevronRight /> Kargo görevlisine Nakit veya Kredi/Banka Kartı ile ödeme yapabilirsiniz.</p>
                                <p className='italic flex items-center gap-2'><ChevronRight /> Bu ödeme yöntemi için <b>+35₺</b> hizmet bedeli sipariş tutarınıza eklenecektir.</p>
                                <p className='italic flex items-center gap-2'><ChevronRight /> Lütfen teslimat sırasında toplam tutarı hazır bulundurunuz.</p>
                            </CardContent>
                            <CardFooter className="flex gap-2">
                                <Checkbox id="kapida-odeme-kabul" />
                                <Label htmlFor="kapida-odeme-kabul">Kapıda Ödeme Koşullarını okudum, anladım ve kabul ediyorum.</Label>
                            </CardFooter>
                        </Card>
                    )
                }
                {
                    paymentType == "kredi/banka-karti" && (
                        <Card >
                            <CardHeader className="font-semibold">
                                Kredi / Banka Kartı ile Online Ödeme
                            </CardHeader>
                            <CardContent className="flex flex-col gap-6">
                                <Button className="w-max" variant="outline"><LucideCreditCard /> Yeni Kart Ekle</Button>
                                <Card className="w-full">
                                    <CardHeader>
                                        Ödeme Yapılacak Kart - Gökay Baz (Kaydedilmemiş Kart)
                                    </CardHeader>
                                    <CardContent className="font-semibold">
                                        1234 **** 3456 **** 5678 ****
                                    </CardContent>
                                    <CardFooter className="italic">
                                        Mastercard
                                    </CardFooter>
                                </Card>
                                <p>Kayıtlı Kartların ile Ödeme Yap</p>
                                <ul className='grid items-center grid-cols-2 justify-center gap-8'>
                                    <li className=''>
                                        <Card className="w-full">
                                            <CardHeader>
                                                Ana Kartım - GÖKAY BAZ
                                            </CardHeader>
                                            <CardContent className="font-semibold">
                                                1234 **** 3456 **** 5678 ****
                                            </CardContent>
                                            <CardFooter className="italic">
                                                Mastercard
                                            </CardFooter>
                                        </Card>
                                    </li>
                                    <li>
                                        <Card className="w-full">
                                            <CardHeader>
                                                Ana Kartım - GÖKAY BAZ
                                            </CardHeader>
                                            <CardContent className="font-semibold">
                                                1234 **** 3456 **** 5678 ****
                                            </CardContent>
                                            <CardFooter className="italic">
                                                Mastercard
                                            </CardFooter>
                                        </Card>
                                    </li>
                                    <li>
                                        <Card className="w-full">
                                            <CardHeader>
                                                Ana Kartım - GÖKAY BAZ
                                            </CardHeader>
                                            <CardContent className="font-semibold">
                                                1234 **** 3456 **** 5678 ****
                                            </CardContent>
                                            <CardFooter className="italic">
                                                Mastercard
                                            </CardFooter>
                                        </Card>
                                    </li>
                                    <li>
                                        <Card className="w-full">
                                            <CardHeader>
                                                Ana Kartım - GÖKAY BAZ
                                            </CardHeader>
                                            <CardContent className="font-semibold">
                                                1234 **** 3456 **** 5678 ****
                                            </CardContent>
                                            <CardFooter className="italic">
                                                Mastercard
                                            </CardFooter>
                                        </Card>
                                    </li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <p className='italic'> Kartlarınız <b>Masterpass Altyapısı</b> ile Güvenli bir şekilde saklanmaktadır.</p>
                            </CardFooter>
                        </Card>
                    )
                }
            </div>
            <div className="w-2/6 flex flex-col gap-10">
                <Card>
                    <CardHeader>
                        <h2 className="text-xl text-center font-semibold">Sipariş Özeti</h2>
                    </CardHeader>
                    <CardContent>
                        <span className="flex flex-col gap-4">
                            <h3 className="font-semibold text-green-700">Ödenecek Toplam Tutar</h3>
                            <h3 className="text-2xl font-semibold">{totalProductsPrice.toFixed(2)}₺</h3>
                            <hr className="my-2" />
                            <p>Ürünler: {totalProductsPrice.toFixed(2)}₺</p>
                            <span className="flex items-center gap-2">
                                <p>Kargo:</p>
                                <p className="line-through text-slate-600">50₺</p>
                                <p className="text-green-600">Bedava</p>
                            </span>
                            <span className='flex my-2 items-center gap-2'>
                                <Checkbox id="on-bilgilendirme" />
                                <Label htmlFor="on-bilgilendirme"><b className='hover:underline cursor-pointer'>Ön Bilgilendirmeli Satış Formu'</b>nu ve <b className='hover:underline cursor-pointer'>Mesafeli Satış Sözleşmesi'</b>ni Onayla</Label>
                            </span>
                        </span>
                    </CardContent>
                    <CardFooter>
                        <Button onClick={() => router.push("/odeme")} className="bg-green-700 h-12 w-full text-white font-semibold hover:bg-green-600">Siparişi Tamamla <ChevronRight /></Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default page