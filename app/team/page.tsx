import { teamQuery } from '@/sanity/lib/queries'
import { sanityFetch } from '@/sanity/lib/sanityFetch'
import Image from 'next/image';
import commingSoon from "../../public/assets/LandingLogos/commingSoon.png"
import { Suspense } from 'react';
import PageLoader from '@/components/Reusable/PageLoader';
import PairSitting from '@/components/Reusable/PairSitting';
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
      <div className='flex justify-center items-center w-full'>
        <h1 className='p-12 font-typer text-xl font-bold'>
          COMMING SOON
        </h1>
      </div>
      <div className='flex p-12 w-full mb-12 h-full flex-1 justify-center'>
          <div data-aos="fade-left" className=''>
            <PairSitting/>
          </div>
        </div>
    </Suspense>
    </>
  )
}


