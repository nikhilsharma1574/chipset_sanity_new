"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/assets/logo/64x-black-logo.png";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const LINKS = [
    { label: "Home", link: "/" },
    { label: "About us", link: "/about" },
    { label: "Team", link: "/team" },
    { label: "Notice", link: "/notice" },
    { label: "Gallery", link: "/gallery" },
    { label: "Event", link: "/events" },
    { label: "Contact Us", link: "/contact" },
  ];

  return (
    <section className="sticky top-0 z-40 bg-white bg-opacity-60 backdrop-blur-sm">
      <header className="w-full px-6 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div>
          <Link href="/" className="flex items-center">
            <Image src={logo} height={100} width={100} alt="Logo" className="w-10 md:w-16 md:p-1" />
            <div className="text-gray-950">
              <p className="font-bold text-black text-[19px] md:text-[24px] lg:text-[29px]">
                CH<span className="text-[#f39e2f] mix-blend-color-dodge">i</span>PSET
              </p>
              <p className="font-semibold uppercase text-[6px] md:text-[8px] lg:text-[10px] text-[#f39e2f]">
                A Technical Community
              </p>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation (Properly Aligned) */}
        <div className="hidden lg:flex items-center space-x-3"> {/* ✅ Properly aligned */}
          {LINKS.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className={`transition-all px-3 py-1 rounded-md text-[16px] ${
                pathname === item.link ? "text-[#f39e2f]" : "text-black"
              } hover:text-[#f39e2f] duration-300`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Menu onClick={() => setIsOpen(true)} />
            </SheetTrigger>
            <SheetContent side="right" className="text-slate-200 transition-all">
              <SheetHeader>
                <SheetTitle className="text-[#f39e2f]">MENU</SheetTitle>
                <SheetDescription className="flex flex-col items-center pt-12 space-y-4">
                  {LINKS.map((item, idx) => (
                    <Link key={idx} href={item.link} className="transition-all duration-300 text-lg" onClick={() => setIsOpen(false)}>
                      {item.label}
                    </Link>
                  ))}
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
