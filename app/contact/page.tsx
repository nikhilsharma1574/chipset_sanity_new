import React from 'react'
import Image from 'next/image'
import contact_logo from '../../public/svg/contact_us.svg'
const ContactPage = () => {
  return (
    <div>
      <div className='page4 p-6 flex flex-col'>
          <div className='flex flex-1 flex-col md:flex-row'>
            <div className='flex flex-1 md:p-6 '>
              <div className='flex flex-col'>
                  <p className='md:text-4xl font-extrabold text-xl md:font-semibold'>Contact us</p>
                  <div className='2 md:hidden flex-1 my-6 flex justify-center items-center'>
                    <Image src={contact_logo} className='h-fit' height={200} width={200} alt='image'/> 
                  </div>
                  <p className='font-paragraph_font text-xs md:text-lg my-6 lg:text-md md:mt-4'>CHiPSET is a Collaboration of Hackers, Innovators, Programmers, Script writers, Entrepreuners, and Technocrats. We are a non-profit organization with a zeal for making changes in the world by harvesting talents of unique individuals cross all domains.We believe in building the world by building it’s forever recurring addition; a family of inquisitive minds.</p>
              </div>
            </div>
            <div className='2 hidden  flex-1 my-6 md:flex justify-center items-center'>
                <Image src={contact_logo} className='h-fit' height={600} width={600} alt='image'/> 
            </div>
          </div>

          <div className='page5 Gallery md:px-6 flex flex-col'>
            <div className='w-full flex justify-center items-center'>
              <div className='md:px-6 md:w-1/2 w-full px-12'>
                <h5 id="drawer-label" className="inline-flex justify-center items-center mb-6 text-[12px] font-semibold text-gray-500 uppercase dark:text-gray-400"><svg className="w-4 h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                </svg>Contact us</h5>
               <form action="#" className="mb-6">
              <div className="mb-6">
                 <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                 <input  type="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required/>
              </div>
              <div className="mb-6">
                 <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">SRM mail</label>
                 <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="xxxxxx@srmist.edu.in" required/>
              </div>
              <div className="mb-6">
                 <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                 <input id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></input>
              </div>
              <button type="submit" className="text-black bg-[#f6a339] hover:bg-[#aa732b] w-full focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 rounded-[9px] block">Send message</button>
           </form>
           <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 justify-center flex-1 flex">
              <a href="#" className="hover:underline">chipsetrmp@gmail.com</a>
           </p>
        </div>
      </div>
      </div>
  {/* <Socialmed-ia/> */}
  </div>
  <div className='flex flex-1 flex-col justify-center p-4'>
    <h1 className='md:text-4xl p-4 font-bold text-xl md:font-bold'>Reach us at</h1>
    <iframe
    className='p-6 w-full rounded-[9px]'
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1189.0837635721973!2d80.17986054201832!3d13.032625689820724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266d11f9ca625%3A0xf77d1733be7b5b74!2sSRM%20Institute%20Of%20Science%20And%20Technology!5e0!3m2!1sen!2sin!4v1697312327215!5m2!1sen!2sin"
      width="800"
      height="600"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade">
    </iframe>
  </div>
    </div>
  )
}

export default ContactPage
