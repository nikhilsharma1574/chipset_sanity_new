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
        <div className="w-full h-full flex flex-col md:p-12 p-6"> 
        <div className=' mt-12 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12'>
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


