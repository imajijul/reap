'use client'
import Wrapper from "@/components/global/Wrapper"
import Link from "next/link"
import { LinkData } from "@/constant/LinkData"
import { useState } from "react"
import { Button } from "../ui/button"
import MobileMenu from "./MobileMenu"

const Navbar = () => {
  let [mobileMenu, setMobileMenu ] = useState(false)
  return (
    <div className="sticky top-0 w-full h-16 bg-background/80 backdrop-blur-sm z-50">
      <Wrapper className="h-full">
        <div className="flex items-center justify-between h-full">
            {/* Desktop View */}
            <Link href={"/"} className="text-xl font-bold">REAP</Link>

            {/* nav links */}
            <ul className="hidden lg:flex items-center justify-center gap-4 ">
              {
                LinkData && LinkData.map((link, i)=>{
                  return(
                    <li key={i}><Link href={"#"}>{link.label}</Link></li>
                  )
                })
              }
            </ul>

            <div className="hidden lg:block">
              <Button className="bg-transparent text-primary hover:bg-transparent">Sign in</Button>
              <Button variant={"ghost"}>Book a demo</Button>
            </div>

            <MobileMenu/>
        </div>
      </Wrapper>
    </div>
  )
}

export default Navbar
