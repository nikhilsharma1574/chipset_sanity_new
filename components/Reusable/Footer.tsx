"use client"
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Round_icons from '../Reusable/Round_icons_footer'

export const socialmedia=[
    {title:"Linkdln" ,footer_img:'/assets/socials/linkdln_footer.svg',image: '/assets/socials/linkdln.png', link :'https://www.linkedin.com/company/chipsetsrmramapuram/mycompany/'},
    {title:"Instagram" ,footer_img:'/assets/socials/instagram_footer.svg',image: '/assets/socials/instagram.png', link :'https://www.instagram.com/chipsetsrmrmp/'},
    {title:"Youtube" ,footer_img:'/assets/socials/youtube_footer.svg',image: '/assets/socials/youtube.png', link :'https://www.youtube.com/@chipsetsrmrmp5406'},
    {title:"Twitter" ,footer_img:'/assets/socials/twitter_footer.svg',image: '/assets/socials/twitter.png', link :'https://twitter.com/chipsetrmp'},
    {title:"Mail" ,footer_img:'/assets/socials/gmail_footer.svg',image: '/assets/socials/mail.png', link :'mailto:chipsetrmp@gmail.com'},
    {title:"Discord" ,footer_img:'/assets/socials/discord_footer.svg',image: '/assets/socials/discord.png', link :'www.discord.com'},
  ]
  
const Footer = () => {
  return (
    <div>
        <footer className=" rounded-lg shadow dark:bg-gray-900">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className='flex items-center'>
              <Image src="/assets/logo/64x-black-logo.png" height={100} width={100} alt='Logo' className='w-12 md:w-20 p-1'/>
            <div>
              <p className='font-bold text-xl md:text-4xl'>CHiPSET</p>
              <p className='font-semibold uppercase text-xs text-[#f6a339]'>A Technical Club</p>
            </div>
            </div>
                    {/* <ul className="flex flex-wrap items-center mb-6 text-[12px] justify-center mt-6  font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="about" className="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="contact" className="hover:underline">Contact</a>
                        </li>
                    </ul> */}
                </div>
                <div className='flex flex-1 px-4 justify-center items-center'>
                {
            socialmedia.map((socials,index)=>(
                <div key={index} className='flex '>
                    <Round_icons {...socials}/>
                 </div>   
            ))}
                </div>
                <hr className="my-6 sm:mx-auto border-black lg:my-8" />
                <div className='flex flex-1 justify-center'>
                  <div>
                    <span className="block text-[9px] md:text-[12px] justify-center text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="" className="hover:underline">CHiPSET</a>. All Rights Reserved.</span>
                    <span className="block text-[9px] md:text-[12px] justify-center text-gray-500 sm:text-center dark:text-gray-400">Developer - Nikhil Sharma<Link className='hover:underline font-bold' href="https://www.linkedin.com/in/nikhilshaarrma/"> Contact </Link></span>
                  </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
