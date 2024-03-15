"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";
import { Hero } from "@/app/page";

export function Herolanding({ images}: { images: Hero[] }) {
    const imagearr = images[0].mainImage.map((item: { url: string }) => item.url);
  return (
    <ImagesSlider className="md:h-[40rem] h-[15rem]" images={imagearr}>
      <motion.div initial={{ opacity: 0, y: -80, }} animate={{ opacity: 1, y: 0, }} transition={{ duration: 0.6, }} className="z-50 flex flex-col justify-center items-center">
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          The hero section slideshow <br /> nobody asked for
        </motion.p>
      </motion.div>
     </ImagesSlider>
  );
}
