import { eventsQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import React from 'react'
import { Event } from '../page';
import EventCard from '@/components/Reusable/EventCard';
import { WavyBackground } from '@/components/ui/wavy-background';


  export default async function page() {
    const events = await sanityFetch<Event[]>({query:eventsQuery});
  return (
    <>
    <WavyBackground className="max-w-4xl mx-auto pb-40">
    <div className='w-full '>
      <div className='flex items-center justify-center '>
        <video className='absolute z-50 w-[700px] h-full rounded-md overflow-hidden md:my-20' autoPlay muted loop>
          <source src={"https://res.cloudinary.com/ddeqh8bh3/video/upload/v1696062328/ogaxbzjyfd0bhhjgm7xg.mp4"} type="video/mp4"/>
        </video>
      </div>
    </div>
    </WavyBackground>        
        <div className="w-full h-full flex flex-col md:p-12 p-6"> 
        <div className=' mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-12'>
        {
          events?.map((events) => (
              <>
              <div data-aos="fade-up">
                <EventCard events={events}/>
              </div>
              </>
            ))
          }
          </div>
        </div>
    </>
  )
}


