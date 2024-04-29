import React from 'react'
import { Form } from '@/components/Contact/Form'
const ContactPage = () => {
  return (
<>
        <div className='absolute flex justify-center items-center md:justify-start w-full'>
          <h1 className='p-12 font-typer text-xl font-bold'>
            CONTACT US
          </h1>
        </div>
        <div className='md:my-12 flex md:h-screen flex-1 flex-row items-center justify-center h-1/2'>
          <div className='p-12 flex items-center justify-center w-full '>
            <Form/>
          </div>
        </div> 
  </>
  )
}
export default ContactPage
