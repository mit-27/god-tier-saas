"use client";
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import * as React from "react";
import { Icons, type ValidIcon } from "@/components/ui/icons";
import Link, { type LinkProps } from "next/link";
import { mainPageConfig } from "@/config/landing-page-nav-items";
import { usePathname } from "next/navigation";
import MobileNav from "./mobile-nav";
import { Button } from "../ui/button";
import { cva } from "class-variance-authority";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { signIn, useSession } from "next-auth/react";
import { on } from "events";
import { useRouter } from "next/navigation";




const navItemStyles = cva(
  [
    "block rounded-md px-3 text-sm text-gray-900/60 hover:text-gray-900/80",
    "dark:text-white/70 dark:hover:text-white",
    "transition-colors ease-out",
    "text-[13px]"
  ],
  {
    variants: {
      isActive: {
        true: "text-gray-900/80 dark:text-white",
      },
    },
  },
);


const Navbar = () => {
  const pathname = usePathname();
  const {data : currentSession} = useSession();
  const router = useRouter();

  const onSignIn = () => {
    if(currentSession) {
      router.push('/dashboard')
    }
    else {
      signIn('google', { callbackUrl: '/dashboard' })
    }
  }

  return (
    <header className="sticky top-3 z-50 flex items-center justify-between gap-8 rounded-2xl border px-1.5 py-1.5 backdrop-blur-lg md:top-3 mx-auto w-full max-w-4xl">
        <div className="flex items-center gap-6">
            <div className="ml-3 flex items-center gap-3 cursor-pointer">
                <Link href="/" className="text-[13px] font-bold cursor-pointer">God Tier SaaS</Link>
            </div>
            <div
            className={cn(
                "mx-auto hidden items-center justify-center border border-transparent md:flex md:gap-1",
              )}
            >
            <NavigationMenuPrimitive.Root >
            <NavigationMenuPrimitive.List className="relative flex flex-row gap-4 px-2 py-0.5">
              {mainPageConfig.map((page,index) => {
                const { href, title, children } = page;
                if (!children) {
                  return (
                    <NavigationMenuItem key={`${index}-${title}`}>
                      <Link href={href} legacyBehavior passHref key={`${index}-${title}`} >
                        <NavigationMenuLink
                        key={`${index}-${title}`}
                          className={navItemStyles({ isActive: href === pathname })}
                        >
                          {title}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  );
                }

                return (
                  <NavigationMenuPrimitive.Item key={`${index}-${title}`}>
                    {/* <WithTrigger trigger={true}> */}
                    <NavigationMenuPrimitive.Trigger asChild>
                        <button className={navItemStyles({ isActive: pathname.startsWith(href) })}>
                              {title}
                        </button>
                    </NavigationMenuPrimitive.Trigger>
                   
                    <NavigationMenuPrimitive.Content className="data-[motion=from-start]:animate-enter-from-left data-[motion=from-end]:animate-enter-from-right data-[motion=to-start]:animate-exit-to-left data-[motion=to-end]:animate-exit-to-right absolute left-0 top-0 border-0">
                    
                    <ul 
                    className="grid w-[400px] mt-2 gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]"
                    >
                         {children?.map((item) => {
                          const isExternal = item.href.startsWith("http");
                          const _externalProps = isExternal
                            ? { target: "_blank" }
                            : {};
                          const _isActive = pathname.startsWith(item.href);
                          return (
                            <ListItem
                              key={item.title}
                              title={item.title}
                              href={item.href}
                              icon={item.icon}
                            >
                              {item.description}
                            </ListItem>
                          );
                        })}
                      </ul>
                    </NavigationMenuPrimitive.Content>
                  </NavigationMenuPrimitive.Item>
                  
                );
              })}
            </NavigationMenuPrimitive.List>
            <div className="absolute left-1/2 top-full mt-3 -translate-x-1/2">
                <NavigationMenuPrimitive.Viewport
                  className={cn(
                    "relative flex origin-[top_center] justify-start overflow-hidden rounded-[20px] border border-gray-200 bg-white shadow-md dark:border-white/[0.15] dark:bg-black",
                    "data-[state=closed]:animate-scale-out-content data-[state=open]:animate-scale-in-content",
                    "h-[var(--radix-navigation-menu-viewport-height)] w-[var(--radix-navigation-menu-viewport-width)] transition-[width,height]",
                  )}
                />
            </div>
          </NavigationMenuPrimitive.Root>
            </div>
        </div>
        <div className="flex items-center justify-center gap-3">
        <div className="block md:hidden">
          <MobileNav />
        </div>
        <Button onClick={() => onSignIn()} className="h-7 px-3 rounded-sm py-1 text-xs hidden md:block" variant={"secondary"}>{currentSession ? 'Dashboard' : 'Log in'}</Button>
      </div>
    </header>
  )
}

export default Navbar

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & LinkProps & { icon: ValidIcon }
>(({ className, title, children, icon, ...props }, ref) => {
  // TODO: if external, add Arrow-Right-Up Icon
  const Icon = Icons[icon];
  return (
    <li className="group">
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "flex select-none gap-3 space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-900/70 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="self-start rounded-md border p-2 group-hover:bg-background">
            <Icon className="h-4 w-4" />
          </div>
          <div className="grid gap-1">
            <div className="font-medium text-sm leading-none">{title}</div>
            <p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
              {children}
            </p>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

function WithTrigger({
  trigger,
  children,
}: React.PropsWithChildren<{ trigger: boolean }>) {
  return trigger ? (
    <NavigationMenuPrimitive.Trigger asChild>
      {children}
    </NavigationMenuPrimitive.Trigger>
  ) : (
    children
  );
}