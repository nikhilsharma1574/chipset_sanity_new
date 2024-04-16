import Background from '@/components/Team/Background';
import { teamQuery } from '@/sanity/lib/queries'
import { sanityFetch } from '@/sanity/lib/sanityFetch'
export type Members={
  _id :string;
  title: string,
  desc: string,
  members: object,
  github_link: string,
  live_link: string
}
const team = async () => {
  const events = await sanityFetch<Members[]>({query:teamQuery});
  console.log(events);
  return (
    <div className='h-screen bg-yellow-100'>
        <div className='absolute'>
          <Background/>
        </div>
        <div className='flex items-center justify-center h-1/2'>
          <p className='flex items-center justify-center uppercase md:text-[40px] lg:text-[50px] font-typer w-full font-bold'>
            Comming Soon
          </p>
          <p className='flex items-center justify-center w-full '>
            
          </p>
        </div>
    </div>
  )
}

export default team
