import { groq } from "next-sanity";
export const heroQuery=   groq`*[_type == 'hero']{...,"mainImage":mainImage[]{'url':asset->url}}`;
export const eventsQuery= groq`*[_type == 'events']{...,"mainImage":mainImage.asset->url,"alt":mainImage.alt}`;
export const projectsQuery= groq`*[_type == 'project']{...,"mainImage":mainImage.asset->url,"alt":mainImage.alt}`;
export const teamQuery = groq`*[_type == 'team' && title != null]{...,"mainImage":mainImage.asset->url,"alt":mainImage.alt}`;
export const noticeQuery = groq`*[_type == "notice"]{_id,title,desc,"attachmentURL" : attachment.asset->url}`;
export const galleryQuery = groq`*[_type == 'gallery']{...,"mainImage":mainImage[]{'url':asset->url}}`;