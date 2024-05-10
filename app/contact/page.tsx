import React, { Suspense } from 'react'
import { BackgroundBeams } from '@/components/ui/background-beams'
import { Form } from '@/components/Contact/Form'
import PageLoader from '@/components/Reusable/PageLoader'
import PairSitting from '@/components/Reusable/PairSitting'
export default async function ContactPage() {
  return (
    <>
      {/* <div className="w-full rounded-md flex flex-col items-center justify-center">
            <div className=" max-w-2xl mx-auto md:p-4">
              <div className='md:my-12 flex flex-1 flex-row items-center justify-center h-1/2'>
                <div className='p-12 flex items-center justify-center w-full '>
                  <Form/>
                </div>
              </div> 
            </div>
          </div> */}
          <Suspense fallback={<PageLoader/>}>
      <div className='flex justify-center items-center w-full'>
        <h1 className='p-12 font-typer text-xl md:text-4xl animate-pulse font-bold'>
          COMMING SOON
        </h1>
      </div>
      <div className='flex p-12 w-full mb-12 h-full flex-1 justify-center'>
          <div data-aos="fade-left" className=''>
            <PairSitting/>
          </div>
        </div>
    </Suspense>
          </>
  )
}

