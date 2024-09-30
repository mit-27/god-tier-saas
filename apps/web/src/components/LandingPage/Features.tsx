"use client"

import Feature from "@/components/ui/feature"
import {
    IconAdjustmentsBolt,
    IconCloud,
    IconCurrencyDollar,
    IconEaseInOut,
    IconHeart,
    IconHelp,
    IconRouteAltLeft,
    IconTerminal2,
  } from "@tabler/icons-react";
import Title from "../ui/Title";



const Features = () => {

    const features = [
        {
          title: "Built for developers",
          description:
            "Built for engineers, developers, dreamers, thinkers and doers.",
          icon: <IconTerminal2 />,
        },
        {
          title: "Ease of use",
          description:
            "It's as easy as using an Apple, and as expensive as buying one.",
          icon: <IconEaseInOut />,
        },
        {
          title: "Pricing like no other",
          description:
            "Our prices are best in the market. No cap, no lock, no credit card required.",
          icon: <IconCurrencyDollar />,
        },
        {
          title: "100% Uptime guarantee",
          description: "We just cannot be taken down by anyone.",
          icon: <IconCloud />,
        },
        {
          title: "Multi-tenant Architecture",
          description: "You can simply share passwords instead of buying new seats",
          icon: <IconRouteAltLeft />,
        },
        {
          title: "24/7 Customer Support",
          description:
            "We are available a 100% of the time. Atleast our AI Agents are.",
          icon: <IconHelp />,
        },
        {
          title: "Money back guarantee",
          description:
            "If you donot like EveryAI, we will convince you to like us.",
          icon: <IconAdjustmentsBolt />,
        },
        {
          title: "And everything else",
          description: "I just ran out of copy ideas. Accept my sincere apologies",
          icon: <IconHeart />,
        },
      ];

  return (
    <div className="flex flex-col gap-2 sm:gap-4 mt-2">
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