"use client"

import InputWithLabel from '@/components/FormComponents/InputWithLabel'
import { Button } from '@/components/ui/button'
import appInfo from '@/consts/appInfo'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const RegisterPage = () => {

    const router = useRouter()

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [cellPhoneNumber, setCellPhoneNumber] = useState("")
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")

    const handleRegisterButtonClick = (e) => {
        e.preventDefault()
        setTimeout(() => {
            router.push("/giris")
        }, 1000)
    }

    return (
        <div className='flex items-center justify-center min-h-screen max-h-screen'>
            {/* Register Form Component */}
            <div className='border gap-12 flex items-center rounded-xl p-12 border-primary--border--color'>
                {/* Register Form Component Left Area */}
                <div className='w-7/12 flex flex-col gap-3'>
                    {/* Register Form Component Title Area */}
                    <h1 className='text-2xl font-semibold'>{appInfo.appTitle}</h1>
                    <p className='text-xl text-gray-500'>Kayıt Ol</p>
                    {/* Register Form Component Image */}
                    <Image className='rounded-lg' width={800} height={0} src={appInfo.appLogoURL} alt='App Logo' />
                </div>
                {/* Register Form Component Right Area */}
                <div className='w-5/12'>
                    {/* Register Form */}
                    <form className='flex flex-col gap-5 mt-4'>
                        {/* labelText, inputId, inputType, inputPlaceHolder */}
                        <InputWithLabel value={fullName} setValue={setFullName} labelText={"Ad Soyad"} inputId={"fullName"} inputType={"text"} inputPlaceHolder={"Adınızı ve Soyadınızı giriniz..."} />
                        <InputWithLabel value={email} setValue={setEmail} labelText={"E-Posta"} inputId={"email"} inputType={"email"} inputPlaceHolder={"E-posta adresinizi giriniz..."} />
                        <InputWithLabel value={cellPhoneNumber} setValue={setCellPhoneNumber} labelText={"Cep Telefon"} inputId={"cellPhoneNumber"} inputType={"phone"} inputPlaceHolder={"Cep telefon numaranızı giriniz..."} />
                        <InputWithLabel value={password} setValue={setPassword} labelText={"Şifre"} inputId={"password"} inputType={"password"} inputPlaceHolder={"Şifrenizi giriniz..."} />
                        <InputWithLabel value={rePassword} setValue={setRePassword} labelText={"Şifre Tekrar"} inputId={"re-password"} inputType={"password"} inputPlaceHolder={"Şifrenizi tekrar giriniz..."} />
                        {/* Register Button */}
                        <Button onClick={handleRegisterButtonClick} className={"w-full h-10"}>Kayıt Ol</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage