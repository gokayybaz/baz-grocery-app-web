"use client"
import InputWithLabel from '@/components/FormComponents/InputWithLabel'
import { Button } from '@/components/ui/button'
import appInfo from '@/consts/appInfo'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const LoginPage = () => {

    const router = useRouter()

    const handleLoginButtonClick = (e) => {
        e.preventDefault()
        setTimeout(() => {
            router.push("/")
        }, 1000)
    }

    const [emailValue, setEmailValue] = useState("")
    const [passwordValue, setPasswordValue] = useState("")

    return (
        <div className='flex py-12  justify-center px-4 md:px-0 '>
            {/* Login Form Component */}
            <div className='border gap-2 w-full md:w-3/12 flex flex-col items-center rounded-xl p-8 border-primary--border--color'>
                {/* Login Form Component Left Area */}
                <div className="flex flex-col gap-8">
                    {/* Login Form Component Image */}
                    <div className='flex items-center justify-center w-[200px] h-[200px] relative'>
                        <Image className='rounded-lg' fill src={appInfo.appLogoURL} alt='App Logo' />
                    </div>
                    {/* Login Form Component Text Area */}
                    {/* <div className='flex flex-col gap-2'>
                        <h1 className='text-xl text-center font-semibold'>{appInfo.appTitle}</h1>
                        <p className='text-lg text-center  text-gray-500'>Giriş Yap</p>
                    </div> */}
                </div>
                {/* Login Form Component Right Area */}
                <div className='w-full'>
                    {/* Login Form */}
                    <form className='flex flex-col gap-5 mt-4'>
                        {/* labelText, inputId, inputType, inputPlaceHolder */}
                        <InputWithLabel value={emailValue} setValue={setEmailValue} labelText={"E-Posta"} inputId={"email"} inputType={"email"} inputPlaceHolder={"E-posta adresinizi giriniz..."} />
                        <InputWithLabel value={passwordValue} setValue={setPasswordValue} labelText={"Şifre"} inputId={"password"} inputType={"password"} inputPlaceHolder={"Şifrenizi giriniz..."} />
                        {/* Login Button */}
                        <Button onClick={handleLoginButtonClick} className={" text-white font-semibold h-12 rounded-full"}>Giriş Yap</Button>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default LoginPage