import React from 'react';
import { SparklesCore } from '../../components/ui/sparkles';
import { ContainerScroll } from '../../components/ui/container-scroll-animation';
import { noticeQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';


export type Notice = {
  _id: string;
  title: string;
  desc: string;
  attachmentURL: string;
};

export default async function Notice() {
  const notice = await sanityFetch<Notice[]>({ query: noticeQuery });

  return (
    <>
      <div className="h-fit relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="w-full absolute inset-0 h-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <div className="flex flex-col overflow-hidden">
          <ContainerScroll
            notice={notice}
            titleComponent={
              <>
                <h1 className="font-heading text-4xl md:text-6xl lg:text-8xl font-semibold text-[#f39e2f] m-12">
                  NOTICE BOARD
                </h1>
              </>
            }
          />
        </div>
      </div>
    </>
  );
};

