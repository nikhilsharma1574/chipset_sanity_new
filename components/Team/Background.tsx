"use client";
import React from "react";
import { WavyBackground } from "../ui/wavy-background";

const Background = () => {
  return (
    <div>
      <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        COMMING SOON
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Meet the exceptional individuals who power our organization - coming soon!
      </p>
    </WavyBackground>
    </div>
  )
}

export default Background

