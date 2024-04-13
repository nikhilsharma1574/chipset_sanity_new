import React from "react";
import AllComponents from "@/components/AllComponents";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { eventsQuery, heroQuery, noticeQuery } from "@/sanity/lib/queries";
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
      <AllComponents slideshow={slideshow} events={events}/>
    </main>
  );
}
