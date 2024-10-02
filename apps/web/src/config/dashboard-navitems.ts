import {
    NotebookText,
    type LucideIcon,
    ChartPie,
    StickyNote
} from "lucide-react";

export type NavItem = {
    disabled?: boolean;
    tooltip?: string;
    icon: LucideIcon;
    href: string;
    external?: boolean;
    label: string;
    tag?: React.ReactNode;
};

export const dashboardNavitems: NavItem[] = [
    {
        icon: NotebookText,
        href: "/dashboard/posts",
        label: "Posts",
    },
    {
        icon: ChartPie,
        href: "/dashboard/analytics",
        label: "Analytics",
    },
    {
        icon: StickyNote,
        label: "Notes",
        href: "/dashboard/notes",
    },

];