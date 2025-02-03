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
  domain: string,
  date: string,
  candidates:string
}
export type Notice={
  _id :string;
  title: string,
  desc:string,
  attachmentURL:string
}

export type TeamMembers={
  _id :string;
  title: string,
  desc:string,
  // attachmentURL:string
}

export type Members={
  _id :string;
  title: string,
  desc: string,
  members: object,
  github_link: string,
  live_link: string
}

export default async function Home() {

  const slideshow = await sanityFetch<Hero[]>({query:heroQuery});
  const events = await sanityFetch<Event[]>({query:eventsQuery});
  return (
    <main>
      <Suspense fallback={ <PageLoader/> }>
        <AllComponents slideshow={slideshow} events={events}/>
      </Suspense>
    </main>
  );
}
