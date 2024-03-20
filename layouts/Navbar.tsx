import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from "../public/assets/logo/64x-black-logo.png"

import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


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
    <section id="" className="sticky top-0 z-40 backdrop-blur">
      <nav className ="md:w-full transition-all delay-10 h-[4rem]  sm:h-[7rem] md:h-[7rem] px-4">
        <div className ="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto h-full ">
            <Link href="/" className="flex items-center  ">
              <div className='flex items-center '>
                <div className=''>
                <Image src={logo} height={100} width={100} alt='Logo' className=' w-10 sm:w-20 md:w-16 p-1'/>
                </div>
              <div>
                <p className='font-bold text-2xl sm:text-4xl'>CHiPSET</p>
                <p className='font-semibold uppercase sm:text-xs text-[2px] text-[#ff5234]'>A Technical Community</p>
              </div>
              </div>
          </Link>
            <Sheet>
              <SheetTrigger className='md:hidden'><Menu></Menu></SheetTrigger>
              <SheetContent className=''>
                <SheetHeader className=''>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription className='w-full h-full'>
                    {
                      LINKS.map((item, idx) => (
                        <Link href={item.link} key={idx}>
                          <ul className='font-semibold uppercase sm:text-xs text-[12px] text-[#ff5234] my-4'>
                            <li>
                              {item.label}
                            </li>
                          </ul>
                        </Link>
                      ))
                    }
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>

          <div className ="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {
                LINKS.map((item, idx) => (
                  <div className='' key={idx}>
                  <Link href={item.link} key={idx} className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#ff5234] md:p-0 dark:text-white md:dark:hover:text-[#ff5234] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>
                      {item.label}
                  </Link>
                  </div>
                ))
              }              
            </ul>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Navbar