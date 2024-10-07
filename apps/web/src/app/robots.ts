import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: ["/", "/blog", "/blog/*"],
            disallow: [],
        },
        sitemap: 'https://godtiersaas.live/sitemap.xml',
    }
}