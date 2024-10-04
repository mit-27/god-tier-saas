"use client";
import { dashboardNavitems, NavItem } from '@/config/dashboard-navitems'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useTransition } from 'react'
import { UserButton } from './user-button'

const Navbar = ({className} : {className: string}) => {
  return (
    <aside 
    className={cn(
        "bg-background lg:gap-10 text-content/65 inset-y-0 w-64 px-5 z-10 h-full shrink-0 flex flex-col overflow-y-auto",
        className,
      )}
    >
        <Link href="/dashboard" className="flex min-w-full mt-2 items-center justify-center -mx-2">
            {'My App'}
        </Link>

        <nav className="flex flex-col flex-1 flex-grow mt-6 pb-10">
            <ul className="flex flex-col flex-1 gap-y-6">
            <li className="flex flex-col gap-2">
                <h2 className="text-xs leading-6 uppercase">Options</h2>
                <ul className="-mx-2 space-y-1">
                {dashboardNavitems.map((item) => (
                    <li key={item.label}>
                    <NavLink item={item} />
                    </li>
                ))}
                </ul>
            </li>
            {/* <li className="flex flex-col gap-2">
                <h2 className="text-xs leading-6 uppercase">Resources</h2>
                <ul className="-mx-2 space-y-1">
                {resourcesNavigation.map((item) => (
                    <li key={item.label}>
                    <NavLink item={item} />
                    </li>
                ))}
                </ul>
            </li> */}
            </ul>
        </nav>

        <div className="bg-[inherit] min-w-full [flex:0_0_56px] -mx-2 sticky bottom-0">
            <UserButton />

            {/* Fading indicator that there are more items to scroll */}
            <div className="pointer-events-none absolute bottom-full inset-x-0 h-10 bg-[inherit] [mask-image:linear-gradient(to_top,white,transparent)]" />
        </div>
        
    </aside>
  )
}

const NavLink: React.FC<{ item: NavItem }> = ({ item }) => {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const pathName = usePathname();
    const link = (
      <Link
        prefetch
        href={item.href}
        onClick={() => {
          if (!item.external) {
            startTransition(() => {
              router.push(item.href);
            });
          }
        }}
        target={item.external ? "_blank" : undefined}
        className={cn(
          "transition-all duration-150 group flex gap-x-2 rounded-md px-2 py-1 text-sm font-normal leading-6 items-center border border-transparent hover:bg-secondary hover:text-content justify-between",
          {
            "bg-background border-border text-content [box-shadow:0px_1px_3px_0px_rgba(0,0,0,0.03)]":
              pathName.split("/").pop() === item.href.split("/").pop(),
            "text-content-subtle pointer-events-none": item.disabled,
          },
        )}
      >
        <div className="flex items-center group gap-x-2">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center text-[0.625rem]">
            {isPending ? (
              <Loader2 className="w-5 h-5 shrink-0 animate-spin" />
            ) : (
              <item.icon className="w-5 h-5 shrink-0 [stroke-width:1.25px]" aria-hidden="true" />
            )}
          </span>
          <p className="truncate whitespace-nowrap">{item.label}</p>
        </div>
        {item.tag}
      </Link>
    );

    return link;
  };

export default Navbar