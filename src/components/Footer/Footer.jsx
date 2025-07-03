import React from 'react'
import appInfo from "@/consts/appInfo";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-slate-100 flex items-center justify-center gap-8 p-8 rounded-tl-2xl rounded-tr-2xl">
            <Image src={appInfo.appLogoURL} width={250} height={0} alt="Baz Market" />
            <p>© Tüm Hakları Baz Marketler Grubu Tarafından Saklıdır.</p>
        </footer>
    )
}

export default Footer