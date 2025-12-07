import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'
import { LinkData } from '@/constant/LinkData'
import Link from 'next/link'
const MobileMenu = () => {
  return (
    <Sheet>
        <SheetTrigger className='lg:hidden'>
            <Menu className='lg:hidden'/>
        </SheetTrigger>
        <SheetContent>
            <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <nav className="flex flex-col space-y-4">
                    {LinkData.map((link, index) => (
                        <Link
                            key={index}
                            href={link.id}
                            className="text-base font-medium transition-colors hover:text-primary"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <hr />
                    <div>
                        <Button variant={"default"} className='me-4'>Sign in</Button>
                        <Button variant={"default"}>Book a demo</Button>
                    </div>
                </nav>
            </SheetHeader>
        </SheetContent>
    </Sheet>
  )
}

export default MobileMenu
