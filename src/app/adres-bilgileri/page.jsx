"use client"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { Plus } from "lucide-react"
import { useRouter } from "next/navigation"
import { useBasket } from "@/contexts/BasketContext"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useState } from "react"

const page = () => {
    const router = useRouter()
    const { totalProductsPrice } = useBasket()
    const [isOrderAddressEqualsInvoiceAddress, setIsOrderAddressEqualsInvoiceAddress] = useState(false)
    const [selectedCargoCompany, setSelectedCargoCompany] = useState('none')
    return (
        <div className="px-60 flex py-12 gap-12">
            <div className="flex flex-col gap-8">
                <span>
                    <h1 className="text-2xl font-semibold">Kargo ve Adres Bilgileri</h1>
                </span>

                <Card>
                    <CardHeader>
                        <h2 className="font-semibold">Kargo Firması Seçimi</h2>
                    </CardHeader>
                    <CardContent className="flex w-full">

                        <RadioGroup className="flex w-full items-center justify-between" defaultValue={"aras-kargo"}>
                            <span className="flex cursor-pointer items-center gap-2">
                                <RadioGroupItem value="Aras Kargo" id="aras-kargo" />
                                <Label className="cursor-pointer" htmlFor="aras-kargo">Aras Kargo</Label>
                            </span>


                            <span className="flex cursor-pointer items-center gap-2">
                                <RadioGroupItem value="Yurtiçi Kargo" id="yurtici-kargo" />
                                <Label className="cursor-pointer" htmlFor="yurtici-kargo">Yurtiçi Kargo</Label>
                            </span>


                            <span className="flex cursor-pointer  items-center gap-2">
                                <RadioGroupItem value="DHL Kargo" id="dhl-kargo" />
                                <Label className="cursor-pointer" htmlFor="dhl-kargo">DHL Kargo</Label>
                            </span>

                            <span className="flex cursor-pointer items-center gap-2">
                                <RadioGroupItem value="Kolay Gelsin" id="kolay-gelsin" />
                                <Label className="cursor-pointer" htmlFor="kolay-gelsin">Kolay Gelsin</Label>
                            </span>

                            <span className="flex cursor-pointer items-center gap-2">
                                <RadioGroupItem value="HepsiJET" id="hepsi-jet" />
                                <Label className="cursor-pointer" htmlFor="hepsi-jet">HepsiJET</Label>
                            </span>
                        </RadioGroup>

                        {/* <Card>
                            <CardHeader>
                                <span className="flex items-center gap-2">
                                    <Checkbox />
                                    <h3>Sürat Kargo</h3>
                                </span>
                            </CardHeader>
                        </Card> */}

                    </CardContent>
                </Card>
                <Card className="h-56" >
                    <CardHeader>
                        <h2 className="font-semibold">Gönderi Adresi Seçimi</h2>
                    </CardHeader>
                    <CardContent >
                        <RadioGroup className="flex items-center gap-8 h-4/6">
                            <Card className="flex w-2/12  items-center justify-center h-full">
                                <CardHeader>
                                    <span className="flex flex-col gap-2 items-center justify-between">
                                        <Plus size={30} />
                                        <p className="text-center">Yeni Adres Ekle</p>
                                    </span>
                                </CardHeader>
                            </Card>
                            <Card className="w-5/12 h-full">
                                <CardHeader>
                                    <span className="flex  items-center gap-2">
                                        <RadioGroupItem className="h-4 w-4" value="Ev Adresim" id="address-title" />
                                        <Label className="cursor-pointer text-lg" htmlFor="address-title">Ev</Label>
                                    </span>
                                </CardHeader>
                                <CardContent>
                                    <p className="line-clamp-1 select-none">Prof. Dr. Yusuf Halaçoğlu Cad. 24 Kasım Evleri No:B3 Kat:4 Daire:8</p>
                                </CardContent>
                            </Card>
                            <Card className="w-5/12 h-full">
                                <CardHeader>
                                    <span className="flex  items-center gap-2">
                                        <RadioGroupItem className="h-4 w-4" value="İş Adresim" id="address2-title" />
                                        <Label className="cursor-pointer text-lg" htmlFor="address2-title">Binboğa Bal</Label>
                                    </span>
                                </CardHeader>
                                <CardContent>
                                    <p className="line-clamp-1 select-none">Varsaklar Mah. Adana Cad. No:219/A Kozan/ADANA</p>
                                </CardContent>
                            </Card>
                        </RadioGroup>
                    </CardContent>
                </Card>
                <div className="flex my-2 items-center gap-2">
                    <Checkbox onCheckedChange={(checked) => setIsOrderAddressEqualsInvoiceAddress(!isOrderAddressEqualsInvoiceAddress)} value={isOrderAddressEqualsInvoiceAddress} className="w-5 h-5" id="invoice-address" />
                    <Label className="cursor-pointer text-lg" htmlFor="invoice-address">Gönderim Adresim ile Fatura Adresim Aynı</Label>
                </div>
                {
                    isOrderAddressEqualsInvoiceAddress != true ? (<Card className="h-56" >
                        <CardHeader>
                            <h2 className="font-semibold">Fatura Adresi Seçimi</h2>
                        </CardHeader>
                        <CardContent >
                            <RadioGroup className="flex items-center gap-8 h-4/6">
                                <Card className="flex w-2/12  items-center justify-center h-full">
                                    <CardHeader>
                                        <span className="flex flex-col gap-2 items-center justify-between">
                                            <Plus size={30} />
                                            <p className="text-center">Yeni Adres Ekle</p>
                                        </span>
                                    </CardHeader>
                                </Card>
                                <Card className="w-5/12 h-full">
                                    <CardHeader>
                                        <span className="flex  items-center gap-2">
                                            <RadioGroupItem value="Ev Adresim" className="h-4 w-4" id="invoice-address-title" />
                                            <Label className="cursor-pointer text-lg" htmlFor="invoice-address-title">Ev</Label>
                                        </span>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="line-clamp-1 select-none">Prof. Dr. Yusuf Halaçoğlu Cad. 24 Kasım Evleri No:B3 Kat:4 Daire:8</p>
                                    </CardContent>
                                </Card>
                                <Card className="w-5/12 h-full">
                                    <CardHeader>
                                        <span className="flex  items-center gap-2">
                                            <RadioGroupItem value="İş Adresim" className="h-4 w-4" id="invoice-address2-title" />
                                            <Label className="text-lg cursor-pointer" htmlFor="invoice-address2-title">Binboğa Bal</Label>
                                        </span>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="line-clamp-1 select-none">Varsaklar Mah. Adana Cad. No:219/A Kozan/ADANA</p>
                                    </CardContent>
                                </Card>
                            </RadioGroup>
                        </CardContent>
                    </Card>) : null
                }

            </div>
            <div className="w-2/6 flex flex-col gap-10">
                <Card>
                    <CardHeader>
                        <h2 className="text-xl text-center font-semibold">Sipariş Özeti</h2>
                    </CardHeader>
                    <CardContent>
                        <span className="flex flex-col gap-2">
                            <h3 className="font-semibold text-green-700">Seçilen Ürünler Toplamı</h3>
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
                        <Button onClick={() => router.push("/odeme")} className="bg-green-700 h-12 w-full text-white font-semibold hover:bg-green-600">Ödeme Adımına Geç <ChevronRight /></Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default page