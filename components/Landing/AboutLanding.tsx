"use client";
import React from 'react'
import ManSitting from '../Reusable/ManSitting';
import PairSitting from '../Reusable/PairSitting';

const aboutLanding = () => {
  return (
    <>
    <div className='background p-6 md:p-0 md:flex lg:max-h-[90vh]'>
        <div data-aos="fade-up" className='page3 w-full md:h-screen flex flex-col '>
          <div className='flex flex-col'>
        <div className='page2 flex flex-col'>
          <div className='flex justify-center items-center w-full'>
             <div className='flex flex-1 md:p-6 z-10'>
               <div className='md:flex flex-col'>
                  <p data-aos="fade-right" className='md:text-4xl font-bold text-xl lg:text-[50px] md:font-semibold md:px-24 md:py-12'><span className='font-heading'>What is</span> CH<span className='text-[#f6a339]'>i</span>PSET</p>
                  <p data-aos="fade-up" className='text-black lg:p-4 md:pt-2 lg:text-[14px] md:text-[6px] text-center italic text-xs mt-2 lg:mt-12'>Keeping together is progress. Coming together is a beginning. Working together is sucess.</p>
                  <div className='2 md:hidden flex-1 my-6 flex justify-center items-center '>
                    <div data-aos="fade-left">
                    <div className="player-wrapper">
                      <video className='w-[3000px] mix-blend-multiply h-full' autoPlay muted loop>
                        <source src={"https://res.cloudinary.com/ddeqh8bh3/video/upload/v1696062328/ogaxbzjyfd0bhhjgm7xg.mp4"} type="video/mp4"/>
                      </video>
                    </div>
                    </div>
                  </div>
                  <p data-aos="fade-up" className='font-typer text-xs md:text-[10px] lg:text-[13px] lg:text-md md:mt-4 lg:font-bold md:px-12'>CHiPSET stands as a collaborative force, drawing together a diverse array of talents under one united banner. Comprising hackers, innovators, programmers, scriptwriters, entrepreneurs, and technocrats, we are a dynamic non-profit organization propelled by a shared passion for effecting positive change in the world. Our mission transcends traditional boundaries, harnessing the collective expertise and ingenuity of individuals from across all domains.
                  <br/><br/><br/><br/>
                  <p className='hidden md:block'>
                    At the heart of our ethos lies a firm belief in the transformative power of collaboration. We envision a world where innovation knows no limits, where barriers are dismantled, and where the potential of every individual is fully realized.With an unwavering commitment to excellence, we endeavor to nurture a community of inquisitive minds—an ever-growing family bound by a relentless pursuit of knowledge and progress.</p>
                  </p>
               </div>
             </div>
             <div className='hidden md:flex flex-1 justify-center items-center w-full'>
             </div>
            <div data-aos="fade-left" className='hidden md:flex absolute right-0 z-0'>
            <PairSitting/>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default aboutLanding
