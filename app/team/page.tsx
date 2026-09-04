import { teamQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { Suspense } from 'react';
import PageLoader from '@/components/Reusable/PageLoader';
import Team_Profile from '../../components/Team/Team_Profile';
import { urlForImage } from '@/sanity/lib/image'; // Import the urlForImage function
import { ColourfulText } from '@/components/ui/colourful-text';

export type Members = {
  _id: string;
  title: string;
  desc: string;
  members: {
    _key: string;
    name: string;
    role: string;
    linkedin?: string
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

function sortTeams(teams: Members[]): Members[] {
  if (!teams || !Array.isArray(teams)) return [];

  const getYearAndCategory = (title: string = '') => {
    const cleanTitle = title.trim();
    // Match 4-digit year, e.g., 2025 in "Lead 2025", "lead2025", "Batch 2025"
    const yearMatch = cleanTitle.match(/(19\d\d|20\d\d)/);
    const year = yearMatch ? parseInt(yearMatch[1], 10) : null;

    const lower = cleanTitle.toLowerCase();

    // Category priority within the same year (lower number = earlier display)
    // Lead / Core / Head / President comes before Batch / Members
    let typePriority = 50;
    if (
      lower.includes('lead') ||
      lower.includes('core') ||
      lower.includes('head') ||
      lower.includes('office') ||
      lower.includes('president') ||
      lower.includes('coordinator')
    ) {
      typePriority = 10;
    } else if (lower.includes('batch') || lower.includes('member')) {
      typePriority = 20;
    }

    return { year, typePriority, title: cleanTitle };
  };

  return [...teams].sort((a, b) => {
    const aInfo = getYearAndCategory(a.title);
    const bInfo = getYearAndCategory(b.title);

    // Case 1: Items without a year always come at the top
    if (aInfo.year === null && bInfo.year !== null) {
      return -1;
    }
    if (aInfo.year !== null && bInfo.year === null) {
      return 1;
    }

    // Case 2: Neither has a year -> sort alphabetically
    if (aInfo.year === null && bInfo.year === null) {
      return aInfo.title.localeCompare(bInfo.title);
    }

    // Case 3: Both have years -> sort primarily by year descending (latest first)
    if (aInfo.year !== bInfo.year) {
      return (bInfo.year as number) - (aInfo.year as number);
    }

    // Same year: sort by category priority (e.g. Lead 2025 beside/before Batch 2025)
    if (aInfo.typePriority !== bInfo.typePriority) {
      return aInfo.typePriority - bInfo.typePriority;
    }

    return aInfo.title.localeCompare(bInfo.title);
  });
}

export default async function Team() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const teamMembers = await sanityFetch<Members[]>({ query: teamQuery });
  const sortedTeamMembers = sortTeams(teamMembers);

  return (
    <>
      <Suspense fallback={<PageLoader />}>
        <div className="flex font-heading flex-col uppercase font-extrabold justify-center items-center w-full lg:text-[40px] md:text-[28px] text-[14px]">
          <p className=' font-extrabold mt-12'>
            What makes CH<span className='text-[#f39e2f] lowercase'>i</span>PSET
          </p>
          <p className='lg:text-[50px] md:text-[35px] text-[20px]'>
            <ColourfulText text={"STANDOUT"} />
          </p>
          <p className='lg:text-[18px] md:text-[14px] text-[10px]'>
            from otheres
          </p>
        </div>
        <div className="flex lg:pr-12 lg:pb-12 lg:pl-12 pt-0 w-full mb-12 h-full flex-1 justify-center">
          <div data-aos="fade-left" className="w-full p-2 lg:p-12">
            {sortedTeamMembers?.map((team) => (
              <div key={team._id} data-aos="fade-up" className='my-12 bg-gree'>
                <h2 className="text-lg lg:text-2xl font-bold mb-4 font-heading">{team.title}</h2>
                <div className="mt-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 justify-center items-start gap-2 sm:gap-4 lg:gap-6">
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
                        linkedin={member.linkedin || ''}
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