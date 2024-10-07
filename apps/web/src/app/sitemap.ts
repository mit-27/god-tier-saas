import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: process.env.NEXT_PUBLIC_DOMAIN_URL || 'https://godtiersaas.live',
            lastModified: new Date(),
        },

    ]
}