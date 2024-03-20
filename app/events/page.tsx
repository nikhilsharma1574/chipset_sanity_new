import { eventsQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import React from 'react'
import { Event } from '../page';
import EventCard from '@/components/Reusable/EventCard';

const page = async () => {
    const events = await sanityFetch<Event[]>({query:eventsQuery});
  return (
    <>
        <div className="w-full h-full flex flex-col md:p-12 p-6"> 
        <div className="flex items-center justify-between md:text-4xl py-4 px-6 md:p-14 text-xl">   
            <h1 className='font-bold'>Our Events</h1>
            <div>
              <button title="View all" className="text-[15px] bg-yellow-500 text-black rounded-md px-2 font-bold hover:scale-110 delay-150 transition-all">
                View all
              </button>
            </div>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12'>
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

export default page
