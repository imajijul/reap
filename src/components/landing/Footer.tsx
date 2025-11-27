import React from 'react'
import Wrapper from '../global/Wrapper'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='w-full bg-[#101C1C] text-white py-10 sm:py-15'>
        <Wrapper>
            <div className='flex justify-between sm:items-center'>
                {/* left side => company*/}
                <div className=''>
                    <h1 className='text-4xl font-bold'>Reap</h1>
                    <address className='font-semibold py-4'>800 Se 4th Ave Suite 107, <br /> Bangladesh Dhaka-1207</address>
                </div>
                
                {/* right side links */}
                <div className='flex max-sm:flex-col justify-between gap-3 sm:gap-20'>
                    <ul className='flex flex-col gap-2'>
                        <li className='text-muted-foreground'>Menu</li>
                        <li><Link href={"/"}>Benifits</Link></li>
                        <li><Link href={"/"}>Features</Link></li>
                        <li><Link href={"/"}>How it works</Link></li>
                    </ul>
                    
                    {/* contacts */}
                    <div className='flex flex-col'>
                        <div>
                            <h3 className='text-muted-foreground'>Phone</h3>
                            <p>+012479510</p>
                        </div>
                        <div className='mt-2'>
                            <h3 className='text-muted-foreground'>Email</h3>
                            <p>example@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* temrs & conditions */}
            <div className='flex max-sm:flex-col gap-4 justify-between mt-5 sm:mt-10'>
                <p>@reap, all right reserved</p>
                <ul className='flex max-sm:flex-col sm:gap-4'>
                    <li><Link href={"/"}>Privacy Policy</Link></li>
                    <li><Link href={"/"}>Terms & Service</Link></li>
                    <li><Link href={"/"}>Cookies Settings</Link></li>
                </ul>
            </div>


        </Wrapper>
    </div>
  )
}

export default Footer
