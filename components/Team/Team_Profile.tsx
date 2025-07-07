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
   
    <div className="font-heading p-2 lg:p-8 rounded-lg shadow-md hover:scale-110 transition-all delay-75 bg-gray-200 w-full">
      <div className='w-full rounded-md flex justify-center'>
        <Image src={img} alt={name} height={100} width={100} className="m-2 shadow-input shadow-black h-16 w-16 items-center justify-center lg:h-24 lg:w-24 object-cover rounded-full" />
      </div>
      <h3 className="text-sm lg:text-xl font-semibold font-heading text-center line-clamp-1 text-[#f39e2f] shadow-sm ">{name}</h3>
      <p className="text-[10px] text-gray-600 text-center">{batch}</p>
      <p className="text-[10px] text-gray-600 text-center">{role}</p>
      {linkedin && (
        <div className="flex justify-center mt-2">
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin size={24} color="#0A66C2" />
          </a>
        </div>
      )}
    </div>
  );
};

export default Team_Profile;