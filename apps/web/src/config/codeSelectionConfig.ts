
export type AccordionDataItemType = {
    title: string,
    content: string,
    index: number,
    codeString: string,
    fileName: string,
}

export const AccordionData: AccordionDataItemType[] = [
    {
        title: 'Create a Controller',
        content: 'Create a controller to handle the API requests.',
        index: 0,
        fileName: "Page.tsx",
        codeString: `
        import { cn } from "@/lib/utils"
        const Title1 = ({children,className} : {children: React.ReactNode,className?: string}) => {
  
          return (
                <h1
                    className={cn(
                    "text-black dark:text-white",
                    "relative mx-0 max-w-[43.5rem]  pt-5  md:mx-auto md:px-4 md:py-2",
                    "text-balance text-left font-semibold tracking-tighter md:text-center",
                    "text-5xl sm:text-7xl md:text-7xl lg:text-7xl",
                    className
                    )}
                >
                {children}
                </h1>
          )
        }
  
        export default Title1
        `
    },
    {
        title: 'Define the API',
        content: 'Define the API routes using ts-rest Router.',
        index: 1,
        fileName: "Router.tsx",
        codeString: `
        import { cn } from "@/lib/utils"
        const Title2 = ({children,className} : {children: React.ReactNode,className?: string}) => {
  
          return (
                <h1
                    className={cn(
                    "text-black dark:text-white",
                    "relative mx-0 max-w-[43.5rem]  pt-5  md:mx-auto md:px-4 md:py-2",
                    "text-balance text-left font-semibold tracking-tighter md:text-center",
                    "text-5xl sm:text-7xl md:text-7xl lg:text-7xl",
                    className
                    )}
                >
                {children}
                </h1>
          )
        }
  
        export default Title2
        `
    },
    {
        title: 'Implement the API',
        content: 'Implement the API routes in your controller.',
        index: 2,
        fileName: "Component.tsx",
        codeString: `
        import { cn } from "@/lib/utils"
        const Title3 = ({children,className} : {children: React.ReactNode,className?: string}) => {
  
          return (
                <h1
                    className={cn(
                    "text-black dark:text-white",
                    "relative mx-0 max-w-[43.5rem]  pt-5  md:mx-auto md:px-4 md:py-2",
                    "text-balance text-left font-semibold tracking-tighter md:text-center",
                    "text-5xl sm:text-7xl md:text-7xl lg:text-7xl",
                    className
                    )}
                >
                {children}
                </h1>
          )
        }
  
        export default Title3
        `
    },

];