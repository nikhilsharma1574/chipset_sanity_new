import React, { Suspense } from 'react'
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { aboutVideosQuery } from '@/sanity/lib/queries';
import  aboutusdata  from "../../public/svg/about_us.svg";
import Image from 'next/image';
import Timeline from '@/components/Reusable/TimeLine';
import ChitsetTshirt from '@/components/Reusable/ChitsetTshirt';
import PageLoader from '@/components/Reusable/PageLoader';
import image1 from "../../public/assets/LandingPagePic/macbookScreen.png"
export default async function about() {
  // await new Promise(resolve=>setTimeout(resolve,3000))
  const videos = await sanityFetch<{
    futureVisionVideo: string | undefined;
    howItStartedVideo: string | undefined;
    howItsGoingVideo: string | undefined; aboutUsVideo: string 
}>({ query: aboutVideosQuery });

  
  return (
    <div className="overflow-hidden">
      <Suspense fallback={<PageLoader />}>
        <div className='w-full p-1 md:p-6 flex flex-col'>
        <div className='flex flex-col'>
        <div className='page2 p-4 flex flex-col'>

            <div data-aos="slide-up" className='slide1 flex flex-1 flex-col md:flex-row'>
              <div className='left flex flex-1 md:p-6 '>
                <div className='text-black font-heading uppercase font-extrabold md:text-2xl flex justify-center items-center w-full h-full'>
                <Timeline/>
                </div>
              </div>
              <div data-aos="fade-left" className='right  flex-1 my-6 md:flex justify-center items-center'>
                  <video className='w-[3000px] mix-blend-multiply h-full rounded-md overflow-hidden' autoPlay muted loop>
                    <source src={videos.aboutUsVideo} type="video/mp4"/>
                  </video>
              </div>
            </div>

            <div data-aos="slide-up" className='slide1 flex flex-1 flex-col md:flex-row-reverse'>
              <div className='left flex flex-1 md:p-6 '>
                <div className='text-black font-heading uppercase font-extrabold md:text-2xl flex justify-center items-center w-full h-full'>
                  How its going
                </div>
              </div>
              <div data-aos="fade-left" className='right  flex-1 my-6 md:flex justify-center items-center'>
              <video className='w-[3000px] mix-blend-multiply h-full rounded-md overflow-hidden' autoPlay muted loop>
                    <source src={videos.howItsGoingVideo} type="video/mp4"/>
                  </video>
              </div>
            </div>

            <div data-aos="slide-up" className='slide1 flex flex-1 flex-col md:flex-row'>
              <div className='left flex flex-1 md:p-6 '>
                <div className='text-black scale-75 md:scale-100 font-heading uppercase font-extrabold text-2xl flex justify-center items-center w-full h-full'>
                  How it Started
                </div>
              </div>
              <div data-aos="fade-left" className='right  flex-1 my-6 md:flex justify-center items-center'>
              <video className='w-[3000px] mix-blend-multiply h-full rounded-md overflow-hidden' autoPlay muted loop>
                    <source src={videos.howItStartedVideo} type="video/mp4"/>
                  </video>
              </div>
            </div>

            <div data-aos="slide-up" className='slide1 flex flex-1 flex-col md:flex-row-reverse'>
              <div className='left flex flex-1 md:p-6 '>
                <div className='text-black font-heading uppercase font-extrabold md:text-2xl flex justify-center items-center w-full h-full'>
                  Our Events
                </div>
              </div>
              <div data-aos="fade-left" className='right  flex-1 my-6 md:flex justify-center items-center'>
              <video className='w-[3000px] mix-blend-multiply h-full rounded-md overflow-hidden' autoPlay muted loop>
                <source src={videos.futureVisionVideo} type="video/mp4"/>
              </video>
              </div>
            </div>
        </div>
        </div>
        </div>
      </Suspense>
    </div>
  )
}


