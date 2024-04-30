import { eventsQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import React from 'react'
import { Event } from '../page';
import EventCard from '@/components/Reusable/EventCard';


  export default async function page() {
    const events = await sanityFetch<Event[]>({query:eventsQuery});
  return (
    <>
    
        <div className="w-full h-full flex flex-col md:p-12 p-6"> 
        <div className="flex items-center justify-between md:text-4xl pb-4 md:pb-14 text-xl">   
            <h1 className='font-bold font-heading '>Our Events</h1>
        </div>
        <div className='flex items-center justify-center'>
          <video className='w-[700px] mix-blend-multiply h-full' autoPlay muted loop>
            <source src={"https://res.cloudinary.com/ddeqh8bh3/video/upload/v1696062328/ogaxbzjyfd0bhhjgm7xg.mp4"} type="video/mp4"/>
          </video>
        </div>
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


