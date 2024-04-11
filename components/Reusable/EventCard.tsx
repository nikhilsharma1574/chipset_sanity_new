"use client";
import React from 'react'
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { Event } from '@/app/page';

const EventCard = ({events}:{events:Event}) => {
    // console.log(events)
  return (
    <>
        <CardContainer className="inter-var">
            <CardBody className="h-fit md:bg-gray-50 relative group/card shadow dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto md:w-[310px] lg:w-[300px]  sm:w-[270px] md:h-fit border-black rounded-xl md:p-4 p-4 border">
              <CardItem translateZ="50" className="text-sm md:text-xl font-bold text-black dark:text-white w-full">
                <CardItem translateZ="100" className="mt-4 w-full">
                  <Image src={events.mainImage} height="1000" width="1000" className="object-contain rounded-xl group-hover/card:shadow-xl md:h-[150px]" alt="thumbnail"/>
                </CardItem>
                <p className='truncate-line-3 md:uppercase md:mt-4 font-heading'>
                  {events.title}
                </p>
                </CardItem>
                  <CardItem as="p" translateZ="60" className="md:flex text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  <p className="font-normal text-xs text-gray-700 line-clamp-3 h-fit font-typer">{events.desc}</p>
                </CardItem>
              <div className="flex justify-end items-center mt-6">
                <CardItem translateZ={20} as="button" className="bg-[#f6a339] hover:bg-[#ab7837] px-6 py-2 text-sm rounded-[7px] mt-4" >
                  {/* 2024 */}
                  {events.title}
                </CardItem>
              </div>
            </CardBody>
        </CardContainer>
    </>
  )
}

export default EventCard
