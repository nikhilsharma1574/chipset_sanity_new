"use client";
import Spline from '@splinetool/react-spline'
import React, { Suspense } from 'react'
import PageLoader from './PageLoader';
import Image from 'next/image';
import footer_img1 from "../../public/assets/LandingLogos/LandingLogo.png"

const ChitsetTshirt = () => {
  
  return (
    <div className=''>
        <video className='w-[3000px] mix-blend-multiply h-full' autoPlay muted loop>
          <source src={"https://res.cloudinary.com/dzzvomj39/video/upload/v1714401007/Chipset_Intro_Year_2024_vbbz2d.mp4"} type="video/mp4"/>
        </video>
    </div>
  )
}

export default ChitsetTshirt
