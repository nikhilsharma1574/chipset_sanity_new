import ManSitting from '@/components/Reusable/ManSitting';
import PageLoader from '@/components/Reusable/PageLoader';
import Background from '@/components/Team/Background';
import Test from '@/components/Team/Test';
import { teamQuery } from '@/sanity/lib/queries'
import { sanityFetch } from '@/sanity/lib/sanityFetch'
import Spline from '@splinetool/react-spline';
import { SplineIcon } from 'lucide-react';
import { Suspense } from 'react';
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
    <div className=''>
      <ManSitting/>
    </div>
    </>
  )
}


