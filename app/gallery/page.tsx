import React from "react";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { galleryQuery } from "@/sanity/lib/queries";

export type Gallery = {
  mainImage: any;
  title: string,
  desc:string,
  slug: string,
  attachment: File,
}
export default async function page() {
  const gallery = await sanityFetch<Gallery[]>({query:galleryQuery});
  const urls: string[] = gallery[0].mainImage.map((item: { url: string; }) => item.url);
  return (
          <div className="h-full ">
            <div className="font-heading text-center flex text-4xl md:text-6xl lg:text-8xl font-semibold text-[#f39e2f] md:m-12">
              <h1 className="text-center w-full">
                GALLERY
              </h1>
            </div>
            <div>
              <ParallaxScroll className="" images={urls} />;
            </div>
          </div>
  );
}


