import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Mail } from 'lucide-react'
import { PhoneCall } from 'lucide-react'
import React from 'react'

const IletisimPage = () => {
    return (
        <div className='px-4 md:px-[32%] md:py-8 pb-4'>
            <Card className='flex md:px-12 flex-col gap-8 md:py-12'>
                <CardHeader className="flex items-center justify-center">
                    <h2 className='text-xl font-semibold'>İletişim</h2>
                </CardHeader>
                <CardContent className="flex items-center justify-center flex-col gap-5">
                    <div className='flex flex-col w-full gap-6'>
                        <div className="grid w-full items-center gap-3">
                            <Label htmlFor="fullname">Ad Soyad</Label>
                            <Input type="text" id="fullname" placeholder="Adınızı ve Soyadınızı Giriniz..." />
                        </div>
                        <div className="grid w-full items-center gap-3">
                            <Label htmlFor="email">E-Posta</Label>
                            <Input type="email" id="email" placeholder="E-Posta Adresinizi Giriniz..." />
                        </div>
                        <div className="grid w-full gap-3">
                            <Label htmlFor="message">Mesajınız</Label>
                            <Textarea className="resize-none" placeholder="Göndermek İstediğiniz Mesajınızı Yazınız..." id="message" />
                        </div>
                        <Button className="text-white rounded-full flex items-center justify-center w-full h-12 font-semibold hover:bg-green-600 bg-green-700">Gönder</Button>
                    </div>

                    <span className='flex gap-4 justify-center items-center'>
                        <hr className='w-1/4' />
                        <p className='font-semibold text-gray-500'>VEYA</p>
                        <hr className='w-1/4' />
                    </span>

                    <div className='md:w-1/2 flex flex-col gap-8'>
                        <Button className="rounded-full h-10 text-white font-semibold "><PhoneCall /> Telefon ile İletişime Geç</Button>

                        {/* <Button className="text-white rounded-full flex items-center justify-center w-full h-12 font-semibold hover:bg-green-600 bg-green-700"><PhoneCall /> Telefon ile İletişime Geç</Button>
                        <span className='flex gap-4 justify-center items-center'>
                            <hr className='w-1/4' />
                            <p className='font-semibold text-gray-500'>VEYA</p>
                            <hr className='w-1/4' />
                        </span> */}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default IletisimPage