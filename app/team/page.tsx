import { teamQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { Suspense } from 'react';
import PageLoader from '@/components/Reusable/PageLoader';
import Team_Profile from '../../components/Team/Team_Profile';
import { urlForImage } from '@/sanity/lib/image'; // Import the urlForImage function

export type Members = {
  _id: string;
  title: string;
  desc: string;
  members: {
    _key: string;
    name: string;
    role: string;
    image?: {
      _type: 'image';
      asset: {
        _ref: string;
        _type: 'reference';
      };
    };
  }[];
  github_link: string;
  live_link: string;
};

export default async function Team() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const teamMembers = await sanityFetch<Members[]>({ query: teamQuery });

  return (
    <>
      <Suspense fallback={<PageLoader />}>
        <div className="flex justify-center items-center w-full">
          {/* <h1 className="font-typer text-2xl md:text-4xl font-bold">
            CHIPSET TEAM
          </h1> */}
        </div>
        <div className="flex lg:pr-12 lg:pb-12 lg:pl-12 pt-0 w-full mb-12 h-full flex-1 justify-center">
          <div data-aos="fade-left" className="w-full p-2 lg:p-12">
            {teamMembers?.map((team) => (
              <div key={team._id} data-aos="fade-up" className='my-12 bg-gree'>
                <h2 className="text-lg lg:text-2xl font-bold mb-4 ">{team.title}</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 justify-center items-center gap-y-6 gap-x-3">
                  {team.members?.map((member) => {
                    const imageUrl = member.image ? urlForImage(member.image) : null;
                    // console.log(member.role)
                    return (
                      <Team_Profile
                        key={member._key}
                        name={member.name}
                        img={imageUrl || ''}
                        batch={team.title} 
                        role={member.role || ''}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Suspense>
    </>
  );
}
