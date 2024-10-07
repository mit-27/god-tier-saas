import type { Metadata } from "next";

export const TITLE = "God Tier SaaS";
export const DESCRIPTION =
    "Build the next Enterprise application";

export const defaultMetadata: Metadata = {
    title: {
        template: `%s | ${TITLE}`,
        default: TITLE,
    },
    description: DESCRIPTION,
    metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN_URL || "https://www.godtiersaas.live"),
    keywords: [
        "SaaS",
        "god tier saas",
        "godtiersaas",
        "SaaS Kit",
        "SaaS starter kit",
        "Next.js",
        "Nest.js",
        "AuthJS",
        "ts-rest",
        "PostHog",
        "PostgreSQL",
        "Drizzle ORM",
    ]
};

export const twitterMetadata: Metadata["twitter"] = {
    title: TITLE,
    description: DESCRIPTION,
    card: "summary_large_image",
    images: [
        {
            url: "/images/og-image.png",
            width: 1200,
            height: 675,
        }
    ],
};

export const ogMetadata: Metadata["openGraph"] = {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    images: [
        {
            url: "/images/og-image.png",
            width: 1200,
            height: 675,

        }
    ],
};
