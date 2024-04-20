"use client";
import React from 'react'

const aboutLanding = () => {
  return (
    <>
        <div data-aos="fade-up" className='page3 w-full p-1 md:p-6 flex flex-col '>
          <div className='flex flex-col'>
        <div className='page2 p-4 flex flex-col'>
          <div className='flex flex-1 flex-col md:flex-row'>
             <div className='flex flex-1 md:p-6 '>
               <div className='flex flex-col'>
                  <p data-aos="fade-right" className='md:text-4xl font-bold text-xl lg:text-[50px] md:font-semibold'><span className='font-heading'>What is</span> CH<span className='text-[#f6a339]'>i</span>PSET</p>
                  <p data-aos="fade-up" className='text-black lg:p-4 md:pt-2 lg:text-[14px] md:text-[9px] text-center italic text-xs mt-2 lg:mt-12'>Keeping together is progress. Coming together is a beginning. Working together is sucess.</p>
                  <div className='2 md:hidden flex-1 my-6 flex justify-center items-center '>
                    <div data-aos="fade-left">
                    <div className="player-wrapper">
                      <video className='w-[3000px] mix-blend-multiply h-full' autoPlay muted loop>
                        <source src={"https://res.cloudinary.com/ddeqh8bh3/video/upload/v1696062328/ogaxbzjyfd0bhhjgm7xg.mp4"} type="video/mp4"/>
                      </video>
                    </div>
                    </div>
                  </div>
                  <p data-aos="fade-up" className='font-typer text-xs md:text-[10px] lg:text-[13px] lg:text-md md:mt-4 lg:font-bold'>CHiPSET stands as a collaborative force, drawing together a diverse array of talents under one united banner. Comprising hackers, innovators, programmers, scriptwriters, entrepreneurs, and technocrats, we are a dynamic non-profit organization propelled by a shared passion for effecting positive change in the world. Our mission transcends traditional boundaries, harnessing the collective expertise and ingenuity of individuals from across all domains.
                  <br/><br/><br/><br/>
                  <p className='hidden md:block'>
                    At the heart of our ethos lies a firm belief in the transformative power of collaboration. We envision a world where innovation knows no limits, where barriers are dismantled, and where the potential of every individual is fully realized.With an unwavering commitment to excellence, we endeavor to nurture a community of inquisitive minds—an ever-growing family bound by a relentless pursuit of knowledge and progress.</p>
                  </p>
               </div>
             </div>
            <div data-aos="fade-left" className='2 hidden flex-1 md:flex justify-center items-center my-6'>
            <div className="player-wrapper ">
              <video className='w-[3000px] mix-blend-multiply h-full ' autoPlay muted loop>
                <source src={"https://res.cloudinary.com/ddeqh8bh3/video/upload/v1696062328/ogaxbzjyfd0bhhjgm7xg.mp4"} type="video/mp4"/>
              </video>
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
