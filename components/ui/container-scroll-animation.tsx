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
  const rotate = useTransform(scrollYProgress, [0, 1], [35, -25]);
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
        className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-3 md:p-4 lg:p-6 bg-[#222222] rounded-[30px] shadow-2xl">
        <div className="flex justify-center bg-gray-100 h-full w-full rounded-2xl overflow-hidden p-4">
          NO NOTICE YET
        </div>
    </motion.div>
  );
};
