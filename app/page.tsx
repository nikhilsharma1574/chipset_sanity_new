import React from "react";
import AllComponents from "@/components/AllComponents";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { eventsQuery, heroQuery, noticeQuery } from "@/sanity/lib/queries";
import { Suspense } from "react";
export type Hero = {
  mainImage: any;
  title: string,
  desc:string,
  slug: string,
  attachment: File,
}
export type Event={
  _id :string;
  title: string,
  desc: string,
  mainImage: string,
  github_link: string,
  live_link: string
}
export type Notice={
  _id :string;
  title: string,
  desc:string,
  attachmentURL:string
}

export default async function Home() {
  const slideshow = await sanityFetch<Hero[]>({query:heroQuery});
  const events = await sanityFetch<Event[]>({query:eventsQuery});
  return (
    <main >
      {/* <Suspense fallback={<p className="text-black flex w-screen h-screen bg-red-500">Loading feed...</p>}> */}
        <AllComponents slideshow={slideshow} events={events}/>
      {/* </Suspense> */}
    </main>
  );
}
