import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['via.placeholder.com', 'cdn.sanity.io'], // Add both domains
      },
    };

export default nextConfig;
