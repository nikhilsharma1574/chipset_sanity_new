import React from "react";
import AllComponents from "@/components/AllComponents";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { eventsQuery, heroQuery, noticeQuery } from "@/sanity/lib/queries";
import { Suspense } from "react";
import PageLoader from "@/components/Reusable/PageLoader";
import { promises } from "dns";
import { resolve } from "path";
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
  await new Promise(resolve=>setTimeout(resolve,3000))
  
  const slideshow = await sanityFetch<Hero[]>({query:heroQuery});
  const events = await sanityFetch<Event[]>({query:eventsQuery});
  return (
    <main >
      <Suspense fallback={ <PageLoader/> }>
        <AllComponents slideshow={slideshow} events={events}/>
      </Suspense>
    </main>
  );
}
