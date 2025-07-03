"use client"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { Plus } from "lucide-react"
import { useRouter } from "next/navigation"
import { useBasket } from "@/contexts/BasketContext"

const page = () => {
    const router = useRouter()
    const { totalProductsPrice } = useBasket()
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
                    <CardContent className="flex items-center justify-between">
                        <div>
                            <span className="flex items-center gap-2">
                                <Checkbox />
                                <h3>Aras Kargo</h3>
                            </span>
                        </div>
                        <div>
                            <span className="flex items-center gap-2">
                                <Checkbox />
                                <h3>Yurtiçi Kargo</h3>
                            </span>
                        </div>
                        <div>
                            <span className="flex items-center gap-2">
                                <Checkbox />
                                <h3>DHL Kargo</h3>
                            </span>
                        </div>
                        {/* <Card>
                            <CardHeader>
                                <span className="flex items-center gap-2">
                                    <Checkbox />
                                    <h3>Sürat Kargo</h3>
                                </span>
                            </CardHeader>
                        </Card> */}
                        <div>
                            <span className="flex items-center gap-2">
                                <Checkbox />
                                <h3>Kolay Gelsin</h3>
                            </span>
                        </div>
                        <div>
                            <span className="flex items-center gap-2">
                                <Checkbox />
                                <h3>HepsiJET</h3>
                            </span>
                        </div>
                    </CardContent>
                </Card>
                <Card className="h-56" >
                    <CardHeader>
                        <h2 className="font-semibold">Gönderi Adresi Seçimi</h2>
                    </CardHeader>
                    <CardContent className="flex items-center gap-8 h-4/6">
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
                                    <Checkbox className="h-4 w-4" id="address-title" />
                                    <Label className="text-lg" htmlFor="address-title">Ev</Label>
                                </span>
                            </CardHeader>
                            <CardContent>
                                <p className="line-clamp-1 select-none">Prof. Dr. Yusuf Halaçoğlu Cad. 24 Kasım Evleri No:B3 Kat:4 Daire:8</p>
                            </CardContent>
                        </Card>
                        <Card className="w-5/12 h-full">
                            <CardHeader>
                                <span className="flex  items-center gap-2">
                                    <Checkbox className="h-4 w-4" id="address-title" />
                                    <Label className="text-lg" htmlFor="address-title">Binboğa Bal</Label>
                                </span>
                            </CardHeader>
                            <CardContent>
                                <p className="line-clamp-1 select-none">Varsaklar Mah. Adana Cad. No:219/A Kozan/ADANA</p>
                            </CardContent>
                        </Card>
                    </CardContent>
                </Card>
                <div className="flex my-2 items-center gap-2">
                    <Checkbox className="w-5 h-5" id="invoice-address" />
                    <Label className="text-lg" htmlFor="invoice-address">Gönderim Adresim ile Fatura Adresim Aynı</Label>
                </div>
                <Card className="h-56" >
                    <CardHeader>
                        <h2 className="font-semibold">Fatura Adresi Seçimi</h2>
                    </CardHeader>
                    <CardContent className="flex items-center gap-8 h-4/6">
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
                                    <Checkbox className="h-4 w-4" id="address-title" />
                                    <Label className="text-lg" htmlFor="address-title">Ev</Label>
                                </span>
                            </CardHeader>
                            <CardContent>
                                <p className="line-clamp-1 select-none">Prof. Dr. Yusuf Halaçoğlu Cad. 24 Kasım Evleri No:B3 Kat:4 Daire:8</p>
                            </CardContent>
                        </Card>
                        <Card className="w-5/12 h-full">
                            <CardHeader>
                                <span className="flex  items-center gap-2">
                                    <Checkbox className="h-4 w-4" id="address-title" />
                                    <Label className="text-lg" htmlFor="address-title">Binboğa Bal</Label>
                                </span>
                            </CardHeader>
                            <CardContent>
                                <p className="line-clamp-1 select-none">Varsaklar Mah. Adana Cad. No:219/A Kozan/ADANA</p>
                            </CardContent>
                        </Card>
                    </CardContent>
                </Card>

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