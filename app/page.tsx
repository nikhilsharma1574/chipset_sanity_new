import { Herolanding } from "@/components/Landing/Hero";
import Events from "@/components/Landing/Events";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import Image from "next/image";
import AboutLanding from "@/components/Landing/AboutLanding";
import { heroQuery,eventsQuery } from "@/sanity/lib/queries";
import Macbook from "@/components/Landing/Macbook";
import Footer from "@/components/Reusable/Footer";

export type Hero = {
  _id: string,
  title: string,
  slug: string,
  mainImage: Array<{url:string}>,
}
export type Event={
  _id :string;
  title: string,
  desc: string,
  mainImage: string,
  github_link: string,
  live_link: string
}

export default async function Home() {
const slideshow = await sanityFetch<Hero[]>({query:heroQuery});
const events = await sanityFetch<Event[]>({query:eventsQuery});

  return (
    <main >
      <div className="flex min-h-screen h-full w-full flex-col items-center justify-between ">
        <Herolanding images={slideshow}/>
        <AboutLanding/>
        <Macbook />
        <Events events={events}/>
      </div>
    </main>
  );
}
