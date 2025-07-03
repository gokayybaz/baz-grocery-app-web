import React from 'react'

import { Button } from "@/components/ui/button";


const SubscribeMailNewsletter = () => {
    return (
        <div className="p-6 rounded-3xl flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 justify-between bg-blue-500 px-8">
            <h3 className="md:w-3/4 font-semibold text-base md:text-xl text-white">Bu Tarz İndirimlerden Her Gün Haberdar Olmak İçin E-Posta Bültenimize Abone Ol!</h3>
            <div className="md:w-1/4 w-full flex items-center justify-between bg-white p-4 rounded-xl">
                <input className="md:w-3/4 md:p-2 md:px-3 rounded-xl focus:outline-none" type="text" placeholder="E-Posta Adresinizi Giriniz..." />
                <Button className="w-1/4 text-wrap h-12 md:text-nowrap bg-green-600 hover:bg-green-500 text-white">Abone Ol</Button>
            </div>
        </div>
    )
}

export default SubscribeMailNewsletter