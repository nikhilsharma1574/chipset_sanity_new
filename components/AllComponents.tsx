"use client"
import React, { useEffect } from 'react'
import Macbook from './Landing/Macbook'
import Events from './Landing/Events'
import AboutLanding from './Landing/AboutLanding'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Event, Hero } from '@/app/page'
import { Herolanding } from './Landing/Hero'
import Analytics from './Landing/Analytics'
import PageLoader from './Reusable/PageLoader'

const AllComponents = ({slideshow,events}:{slideshow:Hero[] , events:Event[]}) => {
    useEffect(() => {
        AOS.init({
             duration: 800,
             once: false,
           })
      }, [])
    return (
    <main>
      <PageLoader />
      <div className="flex min-h-screen h-full w-full flex-col items-center overflow-hidden justify-between ">
        <Herolanding images={slideshow}/>
        <div className='hidden md:flex w-full'>
          <Macbook/>
        </div>
        <AboutLanding/>
        <div className='md:hidden'>
          <Macbook/>
        </div>
        <Analytics/>
        <Events events={events}/>
        
      </div>
    </main>
  )
}

export default AllComponents
