import { withContentCollections } from "@content-collections/next";
import type { NextConfig } from 'next';


const nextConfig : NextConfig = {
    images: {
        domains: [
            "api.microlink.io", // Microlink Image Preview

        ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                port: '',
                pathname: '/a/**',
            },

        ]
    },
};

export default withContentCollections(nextConfig);
