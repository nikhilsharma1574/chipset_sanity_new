import React from 'react';
import Image from 'next/image';
import { AiFillLinkedin } from 'react-icons/ai'; // <-- Add this line

type Team = {
  name: string;
  batch: string;
  img: string;
  role: string;
  linkedin: string; 
};
const Team_Profile: React.FC<Team> = ({ name, batch, img , role ,linkedin }) => {
  //console.log(linkedin)
  return (
   
    <div className="font-heading p-4  rounded-lg shadow-md hover:scale-110 transition-all delay-75 bg-gray-200 w-full max-w-sm mx-auto min-h-[220px]">
      <div className='w-full rounded-md flex justify-center'>
      <Image src={img} alt={name} height={80} width={80} className="m-2 shadow-input shadow-black h-20 w-16 object-cover rounded-full object-top" />
      </div>
      <h3 className="text-sm lg:text-sm font-semibold font-heading text-center line-clamp-1 text-[#f39e2f] shadow-sm ">{name}</h3>
      <p className="text-[10px] text-gray-600 text-center">{batch}</p>
      <p className="text-[10px] text-gray-600 text-center">{role}</p>
      
      {linkedin && (
  <>
<p className="text-[8px] italic text-gray-500 text-center mt-2">
  Click the icon to connect
</p>
<div className="flex flex-col items-center mt-2">
  <a
    href={linkedin}
    target="_blank"
    rel="noopener noreferrer"
    className="transition-transform hover:scale-110"
    aria-label="Connect on LinkedIn"
  >
    <AiFillLinkedin size={22} color="#0A66C2" className="animate-bounce" />
  </a>
</div>
  </>
)}
    </div>
  );
};

export default Team_Profile;