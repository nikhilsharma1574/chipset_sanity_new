export default {
    name: 'aboutVideos',
    title: 'About Page Videos',
    type: 'document',
    fields: [
      { name: 'aboutUsVideo', title: 'About Us Video', type: 'file', options: { accept: 'video/mp4,video/*' } },
      { name: 'howItsGoingVideo', title: 'How Its Going Video', type: 'file', options: { accept: 'video/mp4,video/*' } },
      { name: 'howItStartedVideo', title: 'How It Started Video', type: 'file', options: { accept: 'video/mp4,video/*' } },
      { name: 'futureVisionVideo', title: 'Future Vision Video', type: 'file', options: { accept: 'video/mp4,video/*' } },
      {name:'landingpagevideo', title: 'Landing Page Video', type: 'file', options: { accept: 'video/mp4,video/*' } },
    ],
  };