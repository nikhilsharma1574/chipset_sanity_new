import React from 'react';
import Image from 'next/image';

type Team = {
  name: string;
  batch: string;
  img: string;
  role: string;
  linkedin?: string; 
};
const Team_Profile: React.FC<Team> = ({ name, batch, img , role ,linkedin }) => {
  return (
    <div className="font-heading p-2 lg:p-8 rounded-lg shadow-md hover:scale-110 transition-all delay-75 bg-gray-200 w-full">
      <div className='w-full rounded-md flex justify-center'>
        <Image src={img} alt={name} height={100} width={100} className="m-2 shadow-input shadow-black h-16 w-16 items-center justify-center lg:h-24 lg:w-24 object-cover rounded-full" />
      </div>
      <h3 className="text-sm lg:text-xl font-semibold font-heading text-center line-clamp-1 text-[#f39e2f] shadow-sm ">{name}</h3>
      <p className="text-[10px] text-gray-600 text-center">{batch}</p>
      <p className="text-[10px] text-gray-600 text-center">{role}</p>
      {linkedin && (
        <div className="flex justify-center mt-2">
          <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            {/* LinkedIn SVG icon */}
            <svg width="24" height="24" fill="currentColor" className="text-blue-700 hover:text-blue-900" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/>
            </svg>
          </a>
        </div>
      )}
    </div>
  );
};

export default Team_Profile;