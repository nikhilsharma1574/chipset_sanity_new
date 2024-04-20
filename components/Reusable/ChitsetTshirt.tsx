"use client";
import Spline from '@splinetool/react-spline'
import React, { Suspense } from 'react'
import PageLoader from './PageLoader';

const ChitsetTshirt = () => {
  
  return (
    <div className=''>
      {/* <Suspense fallback={ <PageLoader/> }> */}
      <Spline scene="https://prod.spline.design/mWV7aJhC00dAFICm/scene.splinecode" />
      {/* </Suspense> */}
    </div>
  )
}

export default ChitsetTshirt
