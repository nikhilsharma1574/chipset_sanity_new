"use client";
import React from "react";
import { WavyBackground } from "../ui/wavy-background";
import ThreeDBox from "../Reusable/ThreeDBox";
import ManSitting from "../Reusable/ManSitting";

const Background = () => {
  return (
    <div className="">
      {/* <div className="flex w-full items-center justify-center"> */}
        <ManSitting/>
      {/* </div> */}
      {/* <div className="flex w-full justify-center items-center">
        <p className="text-sm md:text-2xl lg:text-4xl  w-full p-10 text-black font-bold inter-var text-center">
          COMING SOON
        </p>
      </div> */}
    </div>
  )
}

export default Background

