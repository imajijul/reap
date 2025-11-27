'use client'
import { cn } from "@/lib/utils"
import Wrapper from "../global/Wrapper"
import Link from "next/link"
import { LinkData } from "@/src/constant/LinkData"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
const Navbar = () => {
  
  let [mobileMenu, setMobileMenu ] = useState(false)

  return (
    <div className="sticky top-0 left-0 w-full z-1000 backdrop-blur bg-gray-200/30">
      <Wrapper className="w-full relative sm:block">
        <div className="flex justify-between items-center">
            
            {/* Desktop View */}

            <Link href={"/"} className="text-xl font-bold">REAP</Link>
          
            {/* nav links */}
            <ul className="hidden sm:flex items-center justify-center gap-4 ">
              {
                LinkData && LinkData.map((link, i)=>{
                  return(
                    <li key={i}><Link href={link.id}>{link.label}</Link></li>
                  )
                })
              }
            </ul>

            <div className="hidden sm:block">
              <Button className="bg-transparent text-primary hover:bg-transparent">Sign in</Button>
              <Button variant={"ghost"}>Book a demo</Button>
            </div>

            {/* Mobile View */}
            <Button onClick={()=>{setMobileMenu(!mobileMenu)}} className="block sm:hidden"> {mobileMenu? <X />: <Menu/>} </Button>
        
              <div className={`absolute sm:hidden top-10 z-900 px-10 py-5 min-h-screen bg-[#111]/80 backdrop-blur text-white transition-all duration-300 ease-out ${mobileMenu? "right-0 opacity-100": "-right-45 opacity-0 pointer-events-none"}`}>

                <ul className="sm:hidden flex flex-col items-start justify-start gap-2 ">
                  {
                    LinkData && LinkData.map((link, i)=>{
                      return(
                        <li key={i}><Link href={link.id}>{link.label}</Link></li>
                      )
                    })
                  }
                </ul>

                  <hr className="w-full my-4" />
        
                  <div className=" flex flex-col items-start gap-3 font-bold">
                      <Button className="bg-white text-[#111]">Sign in</Button>
                      <Button className="bg-white text-[#111]">Book a demo</Button>
                  </div>

              </div>

        
        </div>
      </Wrapper>
    </div>
  )
}

export default Navbar
