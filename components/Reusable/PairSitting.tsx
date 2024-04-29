import Image from 'next/image'
import React from 'react'
import footer_img1 from "../../public/assets/LandingLogos/LandingLogo.png"

const PairSitting = () => {
  return (
    <div>
        <Image src={footer_img1} height={1000} width={1000} className=' transition-all h-[40px] w-[40px] object-cover md:h-[500px] md:w-[600px]' alt='logo'/>
    </div>
  )
}

export default PairSitting