import React from 'react'
import Wrapper from '../global/Wrapper'
import {Sparkle } from "lucide-react"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import  Link  from 'next/link'
const Hero = () => {
  return (
    <div className='bg-[#2F524D] h-full pt-15 pb-60 sm:pb-90 relative w-full'>
        <Wrapper >
            <div className='flex items-center justify-center flex-col'>
                <div className='bg-[#476260] flex items-center justify-center gap-2 text-[12px] text-white font-bold px-3 py-1 mb-6 rounded-full'>
                    <Sparkle className='w-5 h-5' />
                    <p>AI POWERED</p>
                </div>

                <div className='flex flex-col justify-center items-center text-center'>
                    <h1 className='max-w-lg text-3xl sm:text-5xl text-white'>The future of healthcare management</h1>
                    <p className='py-5 text-gray-200 font-semibold max-w-md'>Reap is the AI-powered platform built to streamline healthcare operation and billing.</p>
                    <div className='flex items-center justify-center bg-white ps-3 pe-1 py-1 mb-8 rounded'>
                        <input type="email" name="email" placeholder='Your email address' className='outline-none bg-transparent placeholder:font-bold font-semibold pe-3' />
                        <Button className='bg-[#2E625A]'>Book a demo</Button>
                    </div>
                    <h4 className='text-center text-white font-semibold mb-2'>We partner of the best <Link href={"/"} className='font-bold text-lg' >PointClickCare</Link></h4>
                </div>
            </div>
        </Wrapper>
        <Image width={100} height={100} src={"/hero-img.jpeg"} className='h-60 sm:h-90 w-[80%] sm:w-[60%] absolute -bottom-2 sm:-bottom-5 left-[50%] translate-x-[-50%] ' alt='feature-img'/>
    </div>
  )
}

export default Hero