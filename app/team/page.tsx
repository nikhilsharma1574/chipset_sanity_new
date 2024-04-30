import { teamQuery } from '@/sanity/lib/queries'
import { sanityFetch } from '@/sanity/lib/sanityFetch'
import Image from 'next/image';
import commingSoon from "../../public/assets/LandingLogos/commingSoon.png"
import { Suspense } from 'react';
import PageLoader from '@/components/Reusable/PageLoader';
export type Members={
  _id :string;
  title: string,
  desc: string,
  members: object,
  github_link: string,
  live_link: string
}
export default async function team() {
  await new Promise(resolve=>setTimeout(resolve,3000))
  const events = await sanityFetch<Members[]>({query:teamQuery});
  return (
    <>
    <Suspense fallback={<PageLoader/>}>
      <div className='absolute flex justify-center items-center md:justify-start w-full'>
        <h1 className='p-12 font-typer text-xl font-bold'>
          COMMING SOON
        </h1>
      </div>
      <div className='relative flex justify-center items-center w-full h-screen md:h-full'>
        <Image src={commingSoon} height={2000} width={2000} className=' transition-all h-[340px] object-cover md:h-[500px] md:w-full' alt='logo'/>
      </div>
    </Suspense>
    </>
  )
}


