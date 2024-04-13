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
    <div>
        <Background/>
    </div>
  )
}

export default team
