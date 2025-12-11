import React from "react";

import { Button } from "../ui/button";
import { Menu } from "lucide-react";

import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { LinkData } from "@/constant/LinkData";
const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <Menu className="lg:hidden" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <nav className="flex flex-col space-y-4">
            {LinkData.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-base font-medium transition-colors hover:text-primary"
              >
                {link.key}
              </Link>
            ))}
            <hr />
            <div>
              <Button variant={"default"} className="me-4">
                Sign in
              </Button>
              <Button variant={"default"}>Book a demo</Button>
            </div>
          </nav>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
