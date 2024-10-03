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
        description: "All product features for GTS",
        segment: "",
        icon: "package",
        children: marketingProductPagesConfig,
    },
    {
        href: "/",
        description: "All resources for GTS",
        title: "Resources",
        segment: "",
        icon: "library",
        children: marketingResourcePagesConfig,
    },
    {
        href: "/",
        title: "Pricing",
        description: "The pricing for GTS.",
        segment: "pricing",
        icon: "credit-card",
    },
    {
        href: "/",
        description: "The documentation for GTS.",
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
