"use client"
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
import { usePathname } from 'next/navigation';

const Navbar = () => {

  const pathname = usePathname();
  // console.log(pathname === "/notice")
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
        <section id="" className="sticky top-0 z-40 bg-white-900 bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60">
            <header className="w-full p-4 md:px-10 py-8 lg:max-w-7xl lg:mx-auto flex items-center justify-between">
                <div>
                  <Link href="/" className="flex justify-center items-center ">
                    <div className='flex'>
                      <div className=''>
                        <Image src={logo} height={100} width={100} alt='Logo' className='w-10 md:w-16 md:p-1'/>
                      </div>
                      <div className=' text-gray-950'>
                        <p className='font-bold text-black text-[19px] md:text-[24px] lg:text-[29px]'>CH<span className='text-[#f39e2f] mix-blend-color-dodge text-pretty' >i</span>PSET</p>
                        <p className='font-semibold uppercase text-[6px] md:text-[8px] lg:text-[10px] text-[#f39e2f] '>A Technical Community</p>
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
                            className={`transition-all ${pathname === item.link ? "text-[#f39e2f]" : "text-black"} hover:text-[#f39e2f] duration-300`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </div>
                <div className="lg:hidden transition-all">
                    <Sheet>
                        <SheetTrigger asChild>
                          <Menu></Menu>
                        </SheetTrigger>
                        <SheetContent side={"right"} className="text-slate-200 transition-all" >
                            <SheetHeader>
                              <SheetTitle className="text-[#f39e2f]">MENU</SheetTitle>
                                <SheetDescription className="flex flex-col items-center pt-12 gap-4 hover:text-[#f39e2f]">
                                    {LINKS.map((item, idx) => {
                                        return (
                                            <Link
                                                key={idx}
                                                href={item.link}
                                                className="transition-all duration-300 text-lg"
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