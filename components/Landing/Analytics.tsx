import React from "react";
import CountUp from 'react-countup';

const Analytics = () => {
  return (
    <>
      <div className="w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className='flex flex-col md:text-4xl w-full px-4 py-12 md:py-20 lg:py-24 justify-center gap-12 md:gap-24'>
          <div className='flex flex-col w-full gap-4 justify-center items-center  '>
            <h1 className='font-heading text-[#f39e2f] font-bold uppercase text-xl md:text-4xl lg:text-6xl'>Team of enterprise</h1>
          </div>
          <div className='font-typer w-full items-center justify-center grid gap-10 md:grid-cols-4 sm:grid-cols-1 text-white object-contain'>
            <div className='flex flex-col justify-center items-center'><p className='text-[#f39e2f] font-light'><CountUp  enableScrollSpy end={18} duration={4}/>+</p><p className='md:text-2xl lg:text-4xl text-lg font-medium md:font-bold'>EVENTS</p></div>
            <div className='flex flex-col justify-center items-center'><p className='text-[#f39e2f] font-light'><CountUp  enableScrollSpy end={24} duration={4}/>+</p><p className='md:text-2xl lg:text-4xl text-lg font-medium md:font-bold'>WEBINARS</p></div>
            <div className='flex flex-col justify-center items-center'><p className='text-[#f39e2f] font-light'><CountUp  enableScrollSpy end={900} duration={4}/>+</p><p className='md:text-2xl lg:text-4xl text-lg font-medium md:font-bold'>STUDENTS</p></div>
            <div className='flex flex-col justify-center items-center'><p className='text-[#f39e2f] font-light'><CountUp  enableScrollSpy end={12} duration={4}/>+</p><p className='md:text-2xl lg:text-4xl text-lg font-medium md:font-bold'>MENTORS</p></div>
          </div>
          <div className='flex text-center justify-center items-center text-white text-xs md:text-lg lg:text-xl'>
            <p className="font-typer">
              <span className="text-[#f39e2f]">Longest</span> standing club of SRM Ramapuram
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Analytics;
