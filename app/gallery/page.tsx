import React from "react";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { galleryQuery } from "@/sanity/lib/queries";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"; // ✅ Import effect

export type Gallery = {
  mainImage: { url: string }[];
  title: string;
  desc: string;
  slug: string;
  attachment: File;
};

export default async function Page() {
  const gallery = await sanityFetch<Gallery[]>({ query: galleryQuery });
  const urls: string[] = gallery.flatMap((item) => item.mainImage.map((img) => img.url));

  return (
    <div className="h-full">
      {/* ✅ Apply Text Generate Effect to GALLERY Heading */}
      <div className="font-heading text-center flex text-4xl md:text-6xl lg:text-8xl font-semibold text-[#f39e2f] md:m-12">
  <TextGenerateEffect words="GALLERY" />
</div>


      {/* ✅ Parallax Image Scroll */}
      <div className="relative w-full aspect-[4/3]">
      <ParallaxScroll className="w-full h-full" images={urls} />

      </div>
    </div>
  );
}
