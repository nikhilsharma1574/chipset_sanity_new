"use client";
import React from 'react'
import ManSitting from '../Reusable/ManSitting';
import PairSitting from '../Reusable/PairSitting';

const aboutLanding = () => {
  return (
    <>
    <div className='w-full'>
      <div className='p-6 md:text-4xl w-full font-bold text-xl lg:text-[50px] md:font-semibold md:px-24 md:py-12'>
        <p data-aos="fade-right" className=''><span className='font-heading'>What is</span> CH<span className='text-[#f6a339]'>i</span>PSET</p>
      </div>
      <div className='flex flex-col md:flex-row h-full px-8 text-justify mt-6'>
        <div className='flex flex-col justify-start w-full h-full flex-1 items-center text-black'>
          <p data-aos="fade-up" className='lg:p-4 md:pt-2 lg:text-[14px] md:text-[12px] text-center italic text-[10px] mt-2 lg:mt-12'>Keeping together is progress. Coming together is a beginning. Working together is sucess.</p>
          <p data-aos="fade-up" className='mt-6 font-typer text-[8px] md:text-[10px] lg:text-[13px] lg:text-md md:mt-4 lg:font-bold md:px-8'>CHiPSET stands as a collaborative force, drawing together a diverse array of talents under one united banner. Comprising hackers, innovators, programmers, scriptwriters, entrepreneurs, and technocrats, we are a dynamic non-profit organization propelled by a shared passion for effecting positive change in the world. Our mission transcends traditional boundaries, harnessing the collective expertise and ingenuity of individuals from across all domains.</p>
          <p data-aos="fade-up" className='hidden lg:flex mt-6 font-typer text-[8px] md:text-[10px] lg:text-[13px] lg:text-md md:mt-4 lg:font-bold md:px-8'>At the heart of our ethos lies a firm belief in the transformative power of collaboration. We envision a world where innovation knows no limits, where barriers are dismantled, and where the potential of every individual is fully realized.With an unwavering commitment to excellence, we endeavor to nurture a community of inquisitive minds—an ever-growing family bound by a relentless pursuit of knowledge and progress.</p>
        </div>
        <div className='hidden md:flex w-full mb-12 h-full flex-1 justify-center'>
          <div className='scale-75'>
            <PairSitting/>
          </div>
        </div>
        <div className='md:hidden flex w-full mb-12 h-full flex-1 justify-center'>
          <video className=' mt-12 md:hidden w-[3000px] mix-blend-multiply h-full rounded-md overflow-hidden' autoPlay muted loop>
          <source src={"https://res.cloudinary.com/dzzvomj39/video/upload/v1714401007/Chipset_Intro_Year_2024_vbbz2d.mp4"} type="video/mp4"/>
        </video>
        </div>
      </div>

    </div>
    </>
  )
}

export default aboutLanding
