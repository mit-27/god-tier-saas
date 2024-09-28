import { ReactNode } from "react"
import Particles from "@/components/ui/particles"


const Background = ({children} : {children: ReactNode}) => {
  return (
    <div className="min-h-screen w-full bg-black">
        {children}
        <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color="#ffffff"
        refresh
      />
    </div>
  )
}

export default Background