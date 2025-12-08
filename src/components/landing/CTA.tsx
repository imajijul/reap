import React from 'react'
import Wrapper from '../global/Wrapper'
import { Check } from 'lucide-react'
import { Button } from '../ui/button'

const CTA = () => {
  return (
    <div className='py-10 bg-[#2F524D] text-white max-sm:px-5'>
        <Wrapper>
            <div className='max-w-sm'>
               <h1 className='text-4xl font-bold'>See Reap in Action</h1>
               <p className='font-semibold py-4'>Get a demo of our Medicaid case overflow and a preview of whats comming next.</p>
            
                <div className='flex items-center justify-center p-2 py-1 bg-white rounded min-w-[90%]'>
                    <input type="email" name="email" placeholder='Your email address' className='outline-none text-[#111] bg-transparent placeholder:font-bold font-semibold ps-2 pe-3 w-full' />
                    <Button className='bg-[#2E625A]'>Book a demo</Button>
                </div>

                <div className='sm:flex gap-8 mt-4 items-center'>
                    <p className='flex gap-2'> <Check/> No credit card needed</p>
                    <p className='flex gap-2'> <Check/> Cancel anytime</p>
                </div>
            
            
            </div>

            
        </Wrapper>
    </div>
  )
}

export default CTA
