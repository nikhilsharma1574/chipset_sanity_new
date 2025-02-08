import React, { Suspense } from 'react'
import PageLoader from '@/components/Reusable/PageLoader'
import TicketCard from '@/components/Reusable/Ticket-card'
export default async function ContactPage() {
  return (
    <>
          <Suspense fallback={<PageLoader/>}>
            <div className='flex p-12 w-full mb-12 h-full flex-1 justify-center'>
              <div data-aos="fade-left" className='w-full flex'>
                <TicketCard/>
              </div>
            </div>
          </Suspense>
      </>
  )
}

