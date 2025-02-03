import React from 'react';
import Image from 'next/image';

type Team = {
  name: string;
  batch: string;
  img: string;
};

const Team_Profile: React.FC<Team> = ({ name, batch, img }) => {
  return (
    <div className="border p-8 rounded-lg shadow-md hover:scale-110 transition-all delay-75 bg-gray-200 max-w-fit">
      <Image src={img} alt={name} height={100} width={100} className="shadow-xl h-24 w-24 object-cover rounded-full mb-4" />
      <h3 className="text-xl font-semibold font-heading text-center">{name}</h3>
      <p className="text-gray-600">{batch}</p>
    </div>
  );
};

export default Team_Profile;
