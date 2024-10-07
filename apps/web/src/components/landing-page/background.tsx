import { ReactNode } from "react"
import Particles from "@/components/ui/particles"


const Background = ({children} : {children: ReactNode}) => {
  return (
    <div className="min-h-screen relative w-full">
        {children}
        <Particles
        className="absolute inset-0 -z-10"
        quantity={150}
        ease={80}
        color="#ffffff"
        // refresh
      />
    </div>
  )
}

export default Background