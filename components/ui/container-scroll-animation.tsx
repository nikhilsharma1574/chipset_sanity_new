"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const ContainerScroll = ({
  NoticeData,
  titleComponent,
}: {
  NoticeData: {
    name: string;
  }[];
  titleComponent: string | React.ReactNode;
}) => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.9, 1.0] : [1.05, 1];
  };
  const rotate = useTransform(scrollYProgress, [0, 1], [25, -25]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [50, -100]);

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-10 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card
          rotate={rotate}
          translate={translate}
          scale={scale}
          NoticeData={NoticeData}
        />
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
}: {
  rotate: any;
  scale: any;
  translate: any;
  NoticeData: {
    name: string;
  }[];
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,scale,boxShadow: "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",}}
        className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-2 lg:p-3 bg-[#222222] rounded-[30px] shadow-2xl">
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
                  <tbody>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              Recruitment Shortlist
                          </th>
                          <td className="px-6 py-3 cursor-pointer hover:text-[#f6a339]">
                              Open
                          </td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Recruitment Notice
                          </th>
                          <td className="px-6 py-3 cursor-pointer hover:text-[#f6a339]">
                              Open
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>

        </div>
    </motion.div>
  );
};
