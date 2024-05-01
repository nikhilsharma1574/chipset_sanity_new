import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
interface round{
    image:string;
    link:string;
    title:string;
    footer_img:string;
  }
const Round_icons:React.FC<round> = ({ image, link,title,footer_img}) => {
  return (
    <div className=''>
      <Link href={link}>
        <Image src={footer_img} height={100} width={100} className='rounded-full hover:bg-[#f39e2f] hover:scale-110 object-cover transition-all flex md:p-3 p-1 justify-center items-center m-1 h-[40px] w-[40px] md:h-[60px] md:w-[60px]' alt='logo'/>
      </Link>
    </div>
  )
}

export default Round_icons