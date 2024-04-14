import Image from 'next/image';
import React from 'react';
import logo from '../../public/assets/logo/64x-black-logo.png'
const PageLoader = () => {
    return (
        <div className="fixed inset-0 z-50 flex h-screen w-full flex-col animate-page-load items-center justify-center bg-slate-50 text-primary">
            <div>
                <Image src={logo} height={500} width={500} alt='Logo' className='w-10 md:w-16 md:p-1'/>
            </div>
            <h1 className="animate-page-load-image text-lg font-semibold">
                CH<span className='text-orange-500'>i</span>PSET 
            </h1>
        </div>
    );
};
export default PageLoader;