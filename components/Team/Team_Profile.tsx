import React from 'react';
import Image from 'next/image';

type Team = {
  name: string;
  batch: string;
  img: string;
};

const Team_Profile: React.FC<Team> = ({ name, batch, img }) => {
  return (
    <div className="border  p-2 lg:p-8 rounded-lg shadow-md hover:scale-110 transition-all delay-75 bg-gray-200 w-full">
      <div className='w-full rounded-md flex justify-center'>
        <Image src={img} alt={name} height={100} width={100} className="m-2 shadow-xl h-16 w-16 items-center justify-center lg:h-24 lg:w-24 object-cover rounded-full" />
      </div>
      <h3 className="text-sm lg:text-xl font-semibold font-heading text-center line-clamp-1">{name}</h3>
      <p className="text-[10px] text-gray-600 text-center">{batch}</p>
    </div>
  );
};

export default Team_Profile;
