import { groq } from "next-sanity";
export const heroQuery=   groq`*[_type == 'hero']{...,"mainImage":mainImage[]{'url':asset->url}}`;
export const eventsQuery= groq`*[_type == 'events'] | order(date desc){...,"mainImage":mainImage.asset->url,"alt":mainImage.alt}`;
export const projectsQuery= groq`*[_type == 'project']{...,"mainImage":mainImage.asset->url,"alt":mainImage.alt}`;
export const teamQuery = groq`*[_type == 'team' && title != null] | order(title desc){...,"mainImage":mainImage.asset->url,"alt":mainImage.alt}`;
export const noticeQuery = groq`*[_type == "notice"]{_id,title,desc,"attachmentURL" : attachment.asset->url}`;
export const galleryQuery = groq`*[_type == 'gallery']{...,"mainImage":mainImage[]{'url':asset->url}}`; 
export const aboutVideosQuery = groq`
  *[_type == "aboutVideos"][0]{
    "aboutUsVideo": aboutUsVideo.asset->url,
    "howItsGoingVideo": howItsGoingVideo.asset->url,
    "howItStartedVideo": howItStartedVideo.asset->url,
    "futureVisionVideo": futureVisionVideo.asset->url,
    "landingpagevideo": landingpagevideo.asset->url
  }
`;