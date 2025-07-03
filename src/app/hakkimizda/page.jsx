import { Card, CardContent, CardHeader } from '@/components/ui/card'
import React from 'react'

const HakkimizdaPage = () => {
    return (
        <div className='px-3 md:px-[28%] md:py-8 pb-4'>
            <Card className=' p-4 md:p-12 flex flex-col gap-4'>
                <CardHeader className="text-center">
                    <h2 className='text-xl font-semibold'>Hakkımızda</h2>
                </CardHeader>
                <CardContent>
                    <p className='text-base/7 font-semibold text-gray-600'>
                        Baz Marketler Grubu olarak, 2010 yılından bu yana tam 15 yıldır siz değerli müşterilerimize kaliteli ve taze ürünler sunarak hizmet vermenin gururunu yaşıyoruz. <span className='flex px-4 py-2'>Kurulduğumuz ilk günden itibaren temel ilkemiz, müşteri memnuniyetini her zaman ön planda tutmak, kaliteli ürünleri en uygun fiyatlarla sunmak ve güvenilir bir alışveriş deneyimi yaşatmak olmuştur.
                            Geçen 15 yıl boyunca, Tüm Türkiye'deki tüketicilerin ihtiyaç ve beklentilerini yakından takip ederek ürün yelpazemizi sürekli geliştirdik ve hizmet kalitemizi artırdık. Web Sitemizde sunduğumuz taze meyve-sebze, şarküteri ürünleri, temel gıda, temizlik malzemeleri gibi ürünler ile hayatınızı kolaylaştırmayı ve bütçenize dost çözümler sunmayı hedefledik.
                            Deneyimli ve güler yüzlü ekibimizle, her zaman en iyisini sunmak için çalışıyoruz. Tedarik zincirimizden raf düzenimize, müşteri ilişkilerimizden teknolojik altyapımıza kadar her alanda yenilikçi yaklaşımlar benimseyerek, sektördeki öncü konumumuzu korumayı ve daha da ileriye taşımayı amaçlıyoruz.
                            Baz Marketler Grubu olarak, sadece bir alışveriş noktası olmanın ötesinde,  toplumsal sorumluluk bilinciyle hareket eden bir marka olma yolunda emin adımlarla ilerliyoruz.  </span> Bize duyduğunuz güven ve sadakat için teşekkür eder, sizleri mağazalarımızda ve web sitemizde her zaman keyifli bir alışverişe bekleriz.
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}

export default HakkimizdaPage