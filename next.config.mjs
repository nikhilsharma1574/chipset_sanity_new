import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['via.placeholder.com', 'cdn.sanity.io', 'tailwindcomponents.com' , 'image.winudf.com', 'images.unsplash.com','image.winudf.com'], // Add both domains
      },
    };

export default nextConfig;
