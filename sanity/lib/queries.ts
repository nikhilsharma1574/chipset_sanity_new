import { groq } from "next-sanity";
export const heroQuery=   groq`*[_type == 'hero']{...,"mainImage":mainImage[]{'url':asset->url}}`;
export const eventsQuery= groq`*[_type == 'events']{...,"mainImage":mainImage.asset->url,"alt":mainImage.alt}`;
// export const profileQuery = groq`*[_type == 'profile']{...,"mainImage":mainImage.asset->url,"alt":mainImage.alt}[0]`;

export const projectsQuery= groq`*[_type == 'project']{...,"mainImage":mainImage.asset->url,"alt":mainImage.alt}`;