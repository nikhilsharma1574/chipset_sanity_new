import React from 'react'
import Image from 'next/image'
import contact_logo from '../../public/svg/contact_us.svg'
import Binacular from '@/components/Reusable/Binacular'
import RobotContact from '@/components/Reusable/RobotContact'
const ContactPage = () => {
  return (
<>
      <div className='h-screen bg-yellow-100'>
        <div className='absolute'>
          <RobotContact/>
        </div>
        <div className='flex items-center justify-center h-1/2'>
        </div>
      </div>
  
  </>
  )
}

export default ContactPage
