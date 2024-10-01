import Title from "@/components/ui/Title"
import Ripple from "../ui/ripple"
import { Button } from "../ui/button"
import React from "react"
import { StarFilledIcon } from "@radix-ui/react-icons"


const HoverButton = ({children} : {children: React.ReactNode}) => {
  return (
    <div className="inline-block transition-all z-30 duration-300 ease-in-out hover:scale-110 hover:cursor-pointer">
      {children}
    </div>
  )
}


const TechStack = () => {
  return (
    <div className="flex relative z-10 bg-black flex-col gap-4 sm:gap-4 mt-4 border w-full rounded-sm items-center justify-center p-4 max-w-5xl mx-auto min-h-[50vh]">
        <div className="relative max-w-2xl flex flex-col md:items-center lg:flex-row">
            <Title className="lg:text-4xl md:text-4xl text-2xl text-center  sm:text-2xl">Built on leading open-source technologies</Title>
        </div>

        <div className="flex gap-5 flex-wrap mt-3 justify-center items-center max-w-4xl">

          <HoverButton>
            <svg className="w-9 h-9" xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m4-14h-1.35v4H16zM9.346 9.71l6.059 7.828l1.054-.809L9.683 8H8v7.997h1.346z"></path></svg>
          </HoverButton>

          <HoverButton>
            <img src="/TechIcons/drizzle.png" alt="drizzle" className="z-30 w-8 h-8 bg-white rounded-full" />
          </HoverButton>

          <HoverButton>
            <img src="/TechIcons/nextauth.png" alt="nextauth" className="z-30 w-8 h-8" />
          </HoverButton>

          <HoverButton> 
            <img src="/TechIcons/ts-rest.png" alt="ts-rest" className="z-30 w-8 h-8" />   
          </HoverButton>

          <HoverButton>
            <img src="/TechIcons/nestjs.png" alt="nestjs" className="z-30 w-8 h-8" />
          </HoverButton>

          <HoverButton>
            <img src="/TechIcons/postgres.png" alt="postgres" className="z-30 w-8 h-8" />
          </HoverButton>

          <HoverButton>
            <img src="/TechIcons/docker.png" alt="docker" className="z-30 h-7" />
          </HoverButton>

        </div>
        
        <Button variant={'ringHover'} className="z-10 mt-10"> <StarFilledIcon className="w-5 h-5 mx-2"/> Star on Github</Button>


        <Ripple mainCircleOpacity={0.15} mainCircleSize={210}/>

    </div>
  )
}

export default TechStack