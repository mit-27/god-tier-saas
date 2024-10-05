import { cn } from '@/lib/utils'
import React from 'react'

const Subtitle = ({children,className} : {children: React.ReactNode,className?: string}) => {
  return (
    <div 
    className={cn(
        "max-w-2xl text-balance text-left text-base tracking-tight text-black dark:font-medium dark:text-neutral-400 md:text-center md:text-lg",
        className
    )}
    >
        {children}
    </div>
  )
}

export default Subtitle