import React from 'react'

const Timeline = () => {
  return (
    <div className='lg:p-12 md:p-6 mt-12'>
        <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
            <li className="mb-10 ml-6">            
                <span className="absolute flex items-center justify-center w-6 h-6 bg-yellow-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-yellow-900">
                    <svg className="w-2.5 h-2.5 text-yellow-800 dark:text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </span>
                <h3 className=" flex items-center mb-1 text-sm font-semibold text-gray-900 dark:text-white">CHiPSET, Established in 2016</h3>
                <time className="block mb-2 text-[12px] md:text-[14px] font-normal leading-none text-gray-400 dark:text-gray-500">Oldest technical club of SRM Ramapuram</time>
                <p className="text-[8px] md:text-[10px] font-normal text-gray-500 dark:text-gray-400 mb-4 ">Startes for technical events and creating diverse enviroment for developers.</p>
            </li>
            <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-yellow-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-yellow-900">
                    <svg className="w-2.5 h-2.5 text-yellow-800 dark:text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </span>
                <h3 className=" mb-1 text-sm font-semibold text-gray-900 dark:text-white">Conducted Technical events</h3>
                <time className="block mb-2 text-[12px] md:text-[14px] font-normal leading-none text-gray-400 dark:text-gray-500">Hello hackers more than 900+ registrations</time>
                <p className="text-[8px] md:text-[10px] font-normal text-gray-500 dark:text-gray-400">biggest event in history of SRM ramapuram.</p>
            </li>
            <li className="ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-yellow-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-yellow-900">
                    <svg className="w-2.5 h-2.5 text-yellow-800 dark:text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </span>
                <h3 className=" mb-1 text-sm font-semibold text-gray-900 dark:text-white">Only technical club got chance to conduct TEXUS in 2021</h3>
                <time className="block mb-2 text-[12px] md:text-[14px] font-normal leading-none text-gray-400 dark:text-gray-500">Texux is National level fest of SRM Ramapuram</time>
                <p className="text-[8px] md:text-[10px] font-normal text-gray-500 dark:text-gray-400">CHiPSET did it.</p>
            </li>
        </ol>

    </div>
  )
}

export default Timeline