"use client";
import React from "react";
import EventCard from "../Reusable/EventCard"
import { Event } from "@/app/page";
import Link from "next/link";

const Events = ({events}:{ events:Event[] }) => {
  // console.log(events);
  return (
    <>
        <div className="w-full h-full flex flex-col md:p-12 p-6"> 
        <div className="flex items-center justify-between md:text-4xl py-4 px-6 md:p-14 text-xl">   
            <h1 className='font-bold font-heading'>Our Events</h1>
            <div>
              <Link href={"/events"}>
                <button title="View all" className="text-[12px] bg-[#f39e2f] uppercase text-white rounded-md px-2 font-typer hover:scale-110 delay-150 transition-all">
                  View all
                </button>
              </Link>
            </div>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-12'>
        {
          events?.slice(0,4).map((events) => (
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

export default Events







