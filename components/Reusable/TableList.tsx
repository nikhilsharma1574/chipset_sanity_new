import React from 'react';
import Link from 'next/link';
interface Notice {
  _id: string;
  title: string;
  desc: string;
  attachmentURL: string;
}

interface TableListProps {
  notices: Notice[];
}
const TableList: React.FC<TableListProps> = ({ notices }) => {
  return (
    <>
        <div className="flex justify-center bg-gray-100 h-full w-full rounded-2xl overflow-hidden">
        <div className="w-full">
          <table className="w-full text-[10px] md:text-[14px] lg:text-[16px] text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  News
                </th>
                <th scope="col" className="px-6 py-3 cursor-pointer hover:text-[#f6a339]">
                  View
                </th>
              </tr>
            </thead>
            <tbody className="w-full">
            {notices.map((notice) => (
        <tr key={notice._id} className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="row" className="px-6 py-4 w-full font-medium  text-gray-900 whitespace-nowrap dark:text-white">
            {notice.title}
          </th>
          <td className="px-6 py-3 cursor-pointer hover:text-[#f6a339]">
            <Link href={notice.attachmentURL} className='text-[#f39e2f]'>
                Open
            </Link>
          </td>
        </tr>
      ))}
          </tbody>
          </table>
        </div>
      </div>

    {/* <div className='w-full'>
      {notices.map((notice) => (
        <tr key={notice._id} className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="row" className="px-6 py-4 w-full font-medium  text-gray-900 whitespace-nowrap dark:text-white">
            {notice.title}
          </th>
          <td className="px-6 py-3  cursor-pointer hover:text-[#f6a339]">
            <Link href={notice.attachmentURL}>
                View
            </Link>
          </td>
        </tr>
      ))}
    </div> */}
    </>
  );
}

export default TableList;
