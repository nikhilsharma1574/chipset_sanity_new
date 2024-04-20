"use client";
import React, { Suspense } from "react";
import { WavyBackground } from "../ui/wavy-background";
import ThreeDBox from "../Reusable/ThreeDBox";
import ManSitting from "../Reusable/ManSitting";
import PageLoader from "../Reusable/PageLoader";
import Spline from "@splinetool/react-spline";

const Background = () => {
  return (
    <Suspense fallback={<PageLoader/>}>
      <div className="">
        <Spline className="md:bg-yellow-400" scene="https://prod.spline.design/BEdNCtL8uQfAdDdD/scene.splinecode" />
      </div>
    </Suspense>
  )
}

export default Background

