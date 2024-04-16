import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from "../public/assets/logo/64x-black-logo.png"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from 'lucide-react';

const Navbar = () => {
  const LINKS = [
         {
           label: "Home",
           link: "/"
         },
         {
           label:"About us",
           link: "/about"
         },
         {
           label:"Team",
           link: "/team"
         },
         {
           label:"Notice",
           link: "/notice"
         },
         {
           label:"Gallery",
           link: "/gallery"
         },
         {
           label:"Event",
           link: "/events"
         },
         {
           label:"Contact Us",
           link: "/contact"
         },
       ]

    return (
        <section id="" className="sticky top-0 z-40 backdrop-blur mix-blend-exclusion">
            <header className="w-full p-4 md:px-10 py-8 lg:max-w-7xl lg:mx-auto flex items-center justify-between">
                <div>
                  <Link href="/" className="flex justify-center items-center ">
                  <div className='flex'>
                  <div className=''>
                    <Image src={logo} height={100} width={100} alt='Logo' className='w-10 md:w-16 md:p-1'/>
                  </div>
                  <div className=''>
                    <p className='font-bold text-card text-[19px] md:text-[24px] lg:text-[29px]'>CH<span className='text-orange-600 mix-blend-color-dodge text-pretty' >i</span>PSET</p>
                    <p className='font-semibold text-accent uppercase text-[6px] md:text-[8px] lg:text-[10px] text-[#ff5234] mix-blend-none z-40'>A Technical Community</p>
                  </div>
                </div>
          </Link>
                </div>
                <div className="gap-4 hidden lg:flex">
                    {LINKS.map((item, idx) => {
                        return (
                            <Link
                                key={idx}
                                href={item.link}
                                className="text-secondary transition-all duration-300  hover:text-primary"
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </div>
                <div className="lg:hidden">
                    <Sheet>
                        <SheetTrigger>
                        <Menu></Menu>
                            BUTTON
                        </SheetTrigger>
                        <SheetContent side={"top"} className="bg-primary text-slate-200" >
                            <SheetHeader>
                                <SheetTitle className="text-slate-200">Surendar PD</SheetTitle>
                                <SheetDescription className="flex flex-col gap-4">
                                    {LINKS.map((item, idx) => {
                                        return (
                                            <Link
                                                key={idx}
                                                href={item.link}
                                                className="hover:text-secondary transition-all duration-300 text-lg"
                                            >
                                                {item.label}
                                            </Link>
                                        );
                                    })}
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </header>
        </section>
    );
};

export default Navbar;