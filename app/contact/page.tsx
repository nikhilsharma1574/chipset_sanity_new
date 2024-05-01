import React from 'react'
import { BackgroundBeams } from '@/components/ui/background-beams'
import { Form } from '@/components/Contact/Form'
export default async function ContactPage() {
  return (
    <>
      <div className=" w-full rounded-md bg-neutral-950 flex flex-col items-center justify-center">
            <div className="z-50 max-w-2xl mx-auto md:p-4">
              <div className='md:my-12 flex md:h-screen flex-1 flex-row items-center justify-center h-1/2'>
                <div className='p-12 flex items-center justify-center w-full '>
                  <Form/>
                </div>
              </div> 
            </div>
            <BackgroundBeams />
          </div>
              
          </>
  )
}

