import Image from 'next/image'
import React from 'react'
import footer_img1 from "../../public/assets/LandingLogos/LandingLogo.png"
import bg from "../../public/assets/background/bg.png"
const PairSitting = () => {
  return (
    <div className='flex justify-center items-center mt-12 '>
        <Image src={bg} height={1000} width={1000} className='z-10 rounded-md brightness-50' alt='logo'/>
        <Image src={footer_img1} height={2000} width={2000} className='hover:scale-125 transition-all delay-75 z-20 absolute scale-[1]' alt='logo'/>
    </div>
  )
}

export default PairSitting