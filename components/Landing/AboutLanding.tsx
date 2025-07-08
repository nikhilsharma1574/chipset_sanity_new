"use client";
import React from 'react'
import ManSitting from '../Reusable/ManSitting';
import PairSitting from '../Reusable/PairSitting';

const AboutLanding = () => {
  const videoUrl = "https://res.cloudinary.com/ddeqh8bh3/video/upload/v1745241766/Chipset_hero_video_nfeuzq.mp4";

  return (
    <>
      <div className='w-full py-8'>
        <div className='p-6 md:text-4xl w-full font-bold text-xl lg:text-[50px] md:font-semibold md:px-24 md:py-12'>
          <p data-aos="fade-right" className=''>
            <span className='font-heading'>What is</span> CH
            <span className='text-[#f6a339]'>i</span>PSET
          </p>
        </div>
        <div className='flex flex-col md:flex-row h-full px-8 text-justify mt-6'>
          <div className='flex flex-col justify-start w-full h-full flex-1 items-center text-black'>
            <p data-aos="fade-up" className='lg:p-4 md:pt-2 lg:text-[14px] md:text-[12px] text-center italic text-[10px] mt-2 lg:mt-12'>
              Progress begins with unity, but true success thrives through collaboration. Together, we embark on a journey of innovation, where every step forward is a testament to our collective strength and determination.
            </p>
            <p data-aos="fade-up" className='mt-6 font-typer text-[8px] md:text-[10px] lg:text-[13px] lg:text-md md:mt-4 lg:font-bold md:px-8'>
              CHiPSET is a dynamic force, uniting a diverse range of talents under a single banner. Comprised of hackers, innovators, programmers, scriptwriters, entrepreneurs, and technocrats, we are a non-profit organization driven by a collective passion for catalyzing positive change globally. Our mission extends beyond conventional confines, leveraging the combined expertise and creativity of individuals from varied fields.
            </p>
            <p data-aos="fade-up" className='hidden lg:flex mt-6 font-typer text-[8px] md:text-[10px] lg:text-[13px] lg:text-md md:mt-4 lg:font-bold md:px-8'>
              Central to our philosophy is a strong belief in the power of collaboration to drive transformation. We envision a world without boundaries, where innovation flourishes, barriers dissolve, and every individual potential is fully unleashed. With an unwavering dedication to excellence, we strive to cultivate a community of curious minds—a growing family united by an insatiable thirst for knowledge and advancement.
            </p>
          </div>
          <div className='w-full mb-12 h-full flex-1 justify-center flex'>
            {videoUrl ? (
              <video className='mt-12 w-full max-w-3xl mix-blend-multiply h-full rounded-md overflow-hidden' autoPlay muted loop>
                <source src={videoUrl} type="video/mp4" />
              </video>
            ) : (
              <div className='scale-75'>
                <PairSitting />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutLanding;