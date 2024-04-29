import React from 'react'
import Image from 'next/image'
import contact_logo from '../../public/svg/contact_us.svg'
import Binacular from '@/components/Reusable/Binacular'
import RobotContact from '@/components/Reusable/RobotContact'
import { Form } from '@/components/Contact/Form'
import Spline from '@splinetool/react-spline'
import ThubsUp from '@/components/Reusable/ThubsUp'
const ContactPage = () => {
  return (
<>
      <div className=''>
        </div>
        <div className='md:my-12 flex md:h-screen flex-1 flex-row items-center justify-center h-1/2'>
          <div className='p-12 flex items-center justify-center w-full '>
            <Form/>
          </div>
          <div className='p-12 items-center justify-center w-full'>
          {/* <ThubsUp/> */}
          </div>
        </div>
  
  </>
  )
}

export default ContactPage
