"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";

const Analytics = () => {
  return (
    <>
    
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className=' flex flex-col md:text-4xl py-4 px-6 md:p-14 w-full md:h-screen  h-[600px] p-6 justify-between'>
            <div className='flex flex-col w-full gap-4 justify-center items-center  '>
                <h1 className='text-yellow-500 font-bold uppercase text-xl md:text-4xl lg:text-6xl'>Team of enterprise</h1>
            </div>

            <div className='w-full md:mt-12 items-center justify-center grid md:grid-cols-4 grid-cols-2 text-white object-contain'>
                <div className='flex flex-col justify-center items-center'><p className='text-yellow-500 font-light'>10+</p><p className='md:text-2xl lg:text-4xl text-lg font-medium md:font-bold'>EVENTS</p></div>
                <div className='flex flex-col justify-center items-center'><p className='text-yellow-500 font-light'>20+</p><p className='md:text-2xl lg:text-4xl text-lg font-medium md:font-bold'>WEBINARS</p></div>
                <div className='flex flex-col justify-center items-center'><p className='text-yellow-500 font-light'>30+</p><p className='md:text-2xl lg:text-4xl text-lg font-medium md:font-bold'>STUDENTS</p></div>
                <div className='flex flex-col justify-center items-center'><p className='text-yellow-500 font-light'>40+</p><p className='md:text-2xl lg:text-4xl text-lg font-medium md:font-bold'>MENTORS</p></div>
            </div>

            <div className='flex text-center justify-center items-center text-white text-xs md:text-lg lg:text-xl'>
                <p className="">
                    <span className="text-yellow-500">Unlocking</span> the potential of technology together, our technical club drives innovation and learning.
                </p>
            </div>
          </div>
      </div>
    </>
  )
}

export default Analytics
