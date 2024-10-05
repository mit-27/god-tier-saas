import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button, buttonVariants } from "@/components/ui/button"
import { ChevronRight } from "lucide-react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import AnimatedShinyText from "../ui/animated-shiny-text";
import { LinkPreview } from "../ui/link-preview";
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { HeroVideoDialog } from "../ui/hero-video-dialog";
import Title from "../ui/Title";
import Subtitle from "../ui/Subtitle";


const Hero = () => {
  return (
    <div>
        <div className="mt-10 grid grid-cols-1 md:mt-20 min-h-screen">
        <div className="flex flex-col items-start gap-6 px-7 pb-8 text-center md:items-center md:px-10">
              <Link
                href="https://github.com/mit-27/god-tier-saas"
                target="_blank"
                className={cn(
                  "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                )}
              >
                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                  <span className="text-xs flex ">🎉 Introducing God Tier SaaS</span>
                  <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedShinyText>
              </Link>
              <div className="relative flex flex-col gap-4 md:items-center lg:flex-row">
                  <Title>
                    Build the next Enterprise application 
                  </Title>
              </div>
              
              {/* <p className="max-w-2xl text-balance text-left text-base tracking-tight text-black dark:font-medium dark:text-neutral-400 md:text-center md:text-lg "> */}
              <Subtitle>
                  A SaaS Kit offering end-to-end type safety with{" "} 
                  <LinkPreview url="https://ts-rest.com/">ts-rest</LinkPreview>{" "} 
                  between <LinkPreview url="https://nextjs.org/">Next.js</LinkPreview> and{" "} 
                  <LinkPreview url="https://nestjs.com/">Nest.js</LinkPreview>,{" "} 
                  along with integrated services like{" "} 
                  <LinkPreview url="https://authjs.dev/">AuthJS</LinkPreview> for authentication,{" "}
                  <LinkPreview url="https://posthog.com/">PostHog</LinkPreview> for analytics, and{" "}
                  <LinkPreview url="https://orm.drizzle.team/">Drizzle ORM</LinkPreview> with PostgreSQL for database management.
                  <br />
                  Perfect to build scalable SaaS applications.
              </Subtitle>
                
              {/* </p> */}

              <div className="mx-0 flex w-full max-w-full flex-col gap-4 py-1 sm:max-w-lg sm:flex-row md:mx-auto">
                <div className="flex w-full flex-col gap-2 sm:flex-row sm:gap-4">
                  {/* <RainbowButton className="w-full">Start Building</RainbowButton> */}
                  <Link
                    href="https://github.com/mit-27/god-tier-saas"
                    className={cn(
                      buttonVariants({
                        variant: "rainbow",
                        size: "lg",
                      }),
                      "w-full"
                    )}
                  >
                    Start Building
                  </Link>
                  <Link
                    href="https://github.com/mit-27/god-tier-saas"
                    target="_blank"
                    className={cn(
                      buttonVariants({
                        variant: "outline",
                        size: "lg",
                      }),
                      "w-full"
                    )}
                  >
                    <GitHubLogoIcon className="h-5 w-5 mx-2" />
                    <span>View on GitHub</span>
                  </Link>


                </div>
              </div>
                
          </div>
          
        </div>

        {/* Video Dialog */}
        <div className="mx-auto mt-5 max-w-4xl">
          <HeroVideoDialog
            className="dark:hidden block"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
            thumbnailAlt="Hero Video"
          />
          <HeroVideoDialog
            className="hidden dark:block"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
            thumbnailAlt="Hero Video"
          />
        </div> 
    </div>
  )
}

export default Hero