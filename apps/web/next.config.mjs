import { withContentCollections } from "@content-collections/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ["@template/shared"],
    images: {
        domains: [
            "api.microlink.io", // Microlink Image Preview
            "www.youtube.com"

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
