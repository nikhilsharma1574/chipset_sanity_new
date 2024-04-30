import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/layouts/Navbar";
import Footer from "@/components/Reusable/Footer";
const inter = Inter({ subsets: ["latin"] });
import Head from "next/head";
export const metadata: Metadata = {
  title: "CHIPSET",
  description: "CHIPSET | SRM UNIVERSITY RAMAPURAM",
  
};

export default function RootLayout({children,}:
Readonly<{children: React.ReactNode;}>) 
{
  return (
    <>
    <Head>
      <title>CHIPSET</title>
      <meta name="CHIPSET | SRM UNIVERSITY RAMAPURAM" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <html lang="en" className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-yellow-500 h-32 overflow-y-scroll">
      <body className={`${inter.className}`}>
        <Navbar/>
          {children}
        <Footer/>
      </body>
    </html>
    </>
  );
}
