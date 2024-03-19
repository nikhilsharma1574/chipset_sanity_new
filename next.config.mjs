import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:[
            "cdn.sanity.io",
            'images.unsplash.com'
        ]
    },
};

export default nextConfig;
