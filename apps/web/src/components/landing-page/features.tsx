"use client"

import Feature from "@/components/ui/feature"
import {
    IconTransfer,
    IconDatabase,
    IconBrush,
    IconShield,
    IconDeviceDesktopAnalytics,
    IconShip,
    IconBlockquote,
    IconPaint
    
  } from "@tabler/icons-react";
import Title from "../ui/Title";



const Features = () => {

    const features = [
        {
          title: "End to End Type Safety",
          description:
            "Get the best developer experience with type-safety and easy API development.",
          icon: <IconTransfer />,
        },
        {
          title: "Manage your database with Drizzle ORM",
          description:
            "Drizzle ORM enables fast, type-safe database queries with PostgreSQL.",
          icon: <IconDatabase />,
        },
        {
          title: "Demo of Optimistic UI",
          description:
            "Example of a Posts page demonstrating Optimistic UI CRUD operations using Tanstack Query.",
          icon: <IconBrush />,
        },
        {
          title: "Secure Authentication",
          description: "Implement secure client-side and server-side authentication using AuthJS.",
          icon: <IconShield />,
        },
        {
          title: "Analytics with PostHog",
          description: "Track user behavior and understand your customers better with PostHog.",
          icon: <IconDeviceDesktopAnalytics />,
        },
        {
          title: "Docker-ready for deployment.",
          description:
            "Deploy your application with Docker and Docker Compose.",
          icon: <IconShip />,
        },
        {
          title: "Ready-to-use ContentLayer for blog and changelog",
          description:
            "Manage your blogs and changelogs with ready-to-use content collections.",
          icon: <IconBlockquote />,
        },
        {
          title: "Templates from landing page to Dashboard",
          description: "Use ready-to-use templatees for your landing page and dashboard.",
          icon: <IconPaint />,
        },
      ];

  return (
    <div className="flex flex-col gap-2 sm:gap-4 mt-3">
        <div className="relative flex flex-col md:items-center lg:flex-row">
            <Title className="lg:text-5xl">Features</Title>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-6xl mx-auto">
            {features.map((feature, index) => (
                <Feature key={feature.title} {...feature} index={index} />
            ))}
    </div>
    </div>
  )
}

export default Features