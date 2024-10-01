import type { ValidIcon } from "@/components/ui/icons";

export type Page = {
    title: string;
    subtitle?: string;
    description: string;
    href: string;
    icon: ValidIcon;
    disabled?: boolean;
    segment: string;
    children?: Page[];
};










// export type PageId = (typeof pagesConfig)[number]["segment"];

// export const pagesConfig = [
//     {
//         title: "Monitors",
//         description: "Check all the responses in one place.",
//         href: "/monitors",
//         icon: "activity",
//         segment: "monitors",
//         // children: monitorPagesConfig,
//     },
//     {
//         title: "Incidents",
//         description: "All your incidents.",
//         href: "/incidents",
//         icon: "siren",
//         segment: "incidents",
//         // children: incidentPagesConfig,
//     },
//     {
//         title: "Status Pages",
//         description: "Where you can see all the pages.",
//         href: "/status-pages",
//         icon: "panel-top",
//         segment: "status-pages",
//         // children: statusPagesPagesConfig,
//     },
//     {
//         title: "Notifications",
//         description: "Where you can see all the notifications.",
//         href: "/notifications",
//         icon: "bell",
//         segment: "notifications",
//         // children: notificationsPagesConfig,
//     },
//     {
//         title: "Settings",
//         description: "Your workspace settings",
//         href: "/settings/general",
//         icon: "cog",
//         segment: "settings",
//         // children: settingsPagesConfig,
//     },
// ] as const satisfies readonly Page[];

type MarketingPageType = Page;

export const marketingProductPagesConfig = [
    {
        href: "/",
        title: "Feature 1",
        subtitle:
            "The subtitle for feature 1",
        description: "The description for feature 1",
        segment: "features",
        icon: "activity",
    },
    {
        href: "/",
        title: "Feature 2",
        subtitle:
            "The subtitle for feature 2",
        description: "The description for feature 2",
        segment: "features",
        icon: "panel-top",
    },
] as const satisfies MarketingPageType[];

export const marketingResourcePagesConfig = [
    {
        href: "/blog",
        title: "Blog",
        description: "All the latest articles and news from GTS.",
        segment: "blog",
        icon: "book",
    },
    {
        href: "/changelog",
        title: "Changelog",
        description: "All the latest features, fixes and work to GTS.",
        segment: "changelog",
        icon: "newspaper",
    },

] as const satisfies Page[];

export const mainPageConfig = [
    {
        href: "/",
        title: "Features",
        description: "All product features for OpenStatus",
        segment: "",
        icon: "package",
        children: marketingProductPagesConfig,
    },
    {
        href: "/",
        description: "All resources for OpenStatus",
        title: "Resources",
        segment: "",
        icon: "library",
        children: marketingResourcePagesConfig,
    },
    {
        href: "/",
        title: "Pricing",
        description: "The pricing for OpenStatus.",
        segment: "pricing",
        icon: "credit-card",
    },
    {
        href: "/",
        description: "The documentation for OpenStatus.",
        title: "Docs",
        segment: "docs",
        icon: "book",
    },
] satisfies Page[];

export function getPageBySegment(
    segment: string | string[],
    currentPage: readonly Page[] = mainPageConfig,
): Page | undefined {
    if (typeof segment === "string") {
        const page = currentPage.find((page) => page.segment === segment);
        return page;
    }
    if (Array.isArray(segment) && segment.length > 0) {
        const [firstSegment, ...restSegments] = segment;
        const childPage = currentPage.find((page) => page.segment === firstSegment);
        if (childPage?.children) {
            return getPageBySegment(restSegments, childPage.children);
        }
        return childPage;
    }
    return undefined;
}
