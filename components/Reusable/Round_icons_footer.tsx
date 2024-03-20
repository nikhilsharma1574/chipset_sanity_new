import React from 'react'
import Image from 'next/image';
interface round{
    image:string;
    link:string;
    title:string;
    footer_img:string;
  }
const Round_icons:React.FC<round> = ({ image, link,title,footer_img}) => {
    // console.log(footer_img  )
  return (
    <div className=''>
        <Image src={footer_img} height={100} width={100} className='rounded-full hover:scale-110 object-cover transition-all flex md:p-3 p-1 justify-center items-center m-1 h-[40px] w-[40px] md:h-[60px] md:w-[60px]' alt='logo'/>
    </div>
  )
}

export default Round_icons