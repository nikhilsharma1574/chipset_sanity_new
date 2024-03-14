"use client";
import React from 'react'
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { Event } from '@/app/page';

const EventCard = ({events}:{events:Event}) => {
    console.log(events)
  return (
    <>
        <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card shadow dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto md:w-[310px] lg:w-[300px] h-fit border-black rounded-xl md:p-6 p-2 border  ">
              <CardItem translateZ="50" className="text-sm md:text-xl font-bold text-black dark:text-white">
                <p className='truncate-line-3'>
                  {events.title}
                </p>
                </CardItem>
                  <CardItem as="p" translateZ="60" className="hidden md:flex text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  <p className="font-normal text-xs text-gray-700 line-clamp-3 h-fit">{events.desc}</p>
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image src={events.mainImage} height="1000" width="1000" className="w-full object-contain rounded-xl group-hover/card:shadow-xl md:h-[150px] h-[120px]" alt="thumbnail"/>
                </CardItem>
              <div className="flex justify-end items-center mt-6">
                <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl bg-black dark:bg-white text-yellow-500 text-[7px] md:text-xs font-bold" >
                  Read More
                </CardItem>
              </div>
            </CardBody>
        </CardContainer>
    </>
  )
}

export default EventCard
