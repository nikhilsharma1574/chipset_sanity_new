"use client";
import { teamQuery } from "@/sanity/lib/queries";
import Team_Profile from "./Team_Profile";
import { TeamMembers } from '@/app/page';
import { sanityFetch } from '@/sanity/lib/sanityFetch';

export default async function Batch({TeamMembers}:{TeamMembers:TeamMembers}) {
    // const Batch = ({TeamMembers}:{TeamMembers:TeamMembers}) => {
    const teamMembers = await sanityFetch<TeamMembers[]>({query:teamQuery});
    console.log(teamQuery)
    return (
        <>
            <div className="w-full h-full flex flex-col md:p-12 p-6"> 
            <div className=' mt-12 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12'>
            {
                teamMembers?.map((teamMembers) => (
                    <>
                    <div data-aos="fade-up">
                      <Team_Profile name="" batch="" img=""/>
                    </div>
                  </>
                ))
            }
              </div>
            </div>
        </>
      )
    }
