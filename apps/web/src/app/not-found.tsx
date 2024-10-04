import { Button, buttonVariants } from '@/components/ui/button';
import Title from '@/components/ui/Title';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'

const NotFound = () => {
  return (
    <div className='flex flex-col gap-5 items-center justify-center h-screen'>
        <div className="relative flex flex-col gap-4 md:items-center lg:flex-row">
                  <Title>
                    404 Page Not Found
                  </Title>
         </div>
         <Link
            href="/"
            className={cn(
                buttonVariants({
                variant: "shine",
                size: "lg",
                }),
            
            )}
            >
            Go to Home
        </Link>
    </div>
  )
}

export default NotFound;