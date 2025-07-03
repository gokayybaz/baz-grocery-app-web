"use client"

import React from 'react'
import appInfo from "@/consts/appInfo";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button"
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { CircleUser } from 'lucide-react';
import { ShoppingBasket } from 'lucide-react';
import { Menu } from 'lucide-react';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useBasket } from '@/contexts/BasketContext';

const Navbar = () => {
    // 06.06.2025 - 19:44 : Navbar Responsive Design [OK]
    const router = useRouter()
    const pathname = usePathname()

    const [isSheetOpen, setIsSheetOpen] = useState(false)

    const handleNavButtonClick = (target) => {
        router.push(target)
    }

    const { cartItems } = useBasket()

    return (
        <>
            <nav className="md:p-8 sticky top-0 z-50  py-2 md:py-0 px-4 bg-white shadow-lg shadow-slate-100 md:px-60 flex items-center justify-between">
                <div className="md:w-1/6 flex items-center">
                    <Image className='cursor-pointer' onClick={() => router.push("/")} src={appInfo.appLogoURL} width={150} height={0} alt="App Logo" />
                </div>

                <div className='md:w-5/6 flex justify-between items-center flex-row'>
                    <ul className="hidden md:flex items-center gap-2">
                        {
                            appInfo.navbarButtons.map((navButton, index) => (
                                <li key={index}>
                                    <Link onClick={() => handleNavButtonClick(navButton.target)} className={buttonVariants({ variant: "link", className: `text-xl underline-offset-8 ${navButton.target == pathname ? "underline font-semibold text-[1.3rem] transition-all " : ""}` })} href={navButton.target}>{navButton.title}</Link>
                                </li>
                            ))
                        }
                    </ul>
                    <div className='flex gap-6 md:gap-8'>
                        <Button onClick={() => router.push("/sepetim")} className="h-12 px-6 hidden md:flex rounded-full bg-green-700 hover:bg-green-600 text-white font-semibold"><ShoppingBasket /> Sepetim {cartItems.length > 0 && <span className='p-2 py-0.5 transition-all bg-green-200 text-black rounded-full'> {cartItems.length}</span>}</Button>
                        <Button onClick={() => router.push("/giris")} variant={"outline"} className="hidden h-12 font-semibold md:flex"><CircleUser /> <h3>Giriş Yap</h3></Button>
                        {/* <Button>Kayıt Ol</Button> */}
                        {/* Mobile Buttons */}
                        <Button onClick={() => router.push("/sepetim")} className="h-12 px-4 flex md:hidden rounded-full bg-green-700 hover:bg-green-600 text-white font-semibold"><ShoppingBasket /></Button>
                        {/* <Button variant={"outline"} className="h-12 font-semibold flex"><CircleUser /></Button> */}
                        <Sheet className="flex md:hidden" open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                            <SheetTrigger>
                                <Menu className='text-xl flex md:hidden' />
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>Menü</SheetTitle>
                                    {/* <SheetDescription>
                                        Mobil cihazlar için navigasyon
                                    </SheetDescription> */}
                                </SheetHeader>
                                <ul>
                                    {
                                        appInfo.navbarButtons.map((navButton, index) => (
                                            <li key={index}>
                                                <Link onClick={() => { handleNavButtonClick(navButton.target), setIsSheetOpen(!isSheetOpen) }} className={buttonVariants({ variant: "link", className: `text-xl underline-offset-8 ${navButton.target == pathname ? "underline font-semibold text-[1.3rem] transition-all " : ""}` })} href={navButton.target}>{navButton.title}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </SheetContent>
                        </Sheet>

                    </div>
                </div>
            </nav>
            {/* <hr className="border-none h-[1px] bg-my-primary-border-color" /> */}
        </>
    )
}

export default Navbar