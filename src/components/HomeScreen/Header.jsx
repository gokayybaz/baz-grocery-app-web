import React from 'react'

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Header = () => {
    return (
        <header>
            <div className="flex flex-col  md:flex-row gap-4 md:gap-8 md:h-[34.5rem] items-center ">
                <div className="flex md:flex md:w-4/6">
                    <Image className="cursor-pointer rounded-3xl md:rounded-[4rem] transition-all" src={"/images/baz-market-header.svg"} priority={true} width={1200} alt="Baz Market Header" height={0} />
                </div>
                <div className="flex flex-col md:h-full md:items-start md:justify-between md:w-2/6">
                    <Image className="cursor-pointer rounded-xl md:rounded-[4rem] transition-all" src={"/images/baz-market-sarkuteri-header.svg"} priority={true} alt="Baz Market Sarkuteri" width={1200} height={0} />
                    <div>
                        <Button className={"p-8 text-lg cursor-pointer m-8 hover:scale-105 transition-all font-semibold text-white rounded-full"}>Daha Fazlasını Keşfet <ArrowRight /></Button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header