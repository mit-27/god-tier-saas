"use client";

// import { signOut } from "next-auth/";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { LogOut, Menu, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { dashboardNavitems } from "@/config/dashboard-navitems";
import { cn } from "@/lib/utils";

import { UserButton } from "./user-button";

type Props = {
  className?: string;
};

export const MobileNavBar = ({ className }: Props) => {
  const router = useRouter();
  return (
    <div className={cn(className)}>
      <Sheet>
        <div className="flex w-full items-center justify-between gap-3 p-2">
          <SheetTrigger className="rounded-md p-2 hover:bg-muted">
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <p className="mx-2 flex-grow font-bold">{"My App"}</p>

          <UserButton navbarMode={true} />
        </div>
        <SheetHeader>
          <SheetClose />
        </SheetHeader>
        <SheetContent
          side="bottom"
          className="rounded-xl bg-white shadow dark:bg-gray-950"
        >
          <div className="flex w-full flex-col p-4">
            <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
              Options
            </h2>
            <div className="space-y-1">
              {dashboardNavitems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <SheetClose asChild>
                    <Button
                      variant="ghost"
                      className="w-full justify-start border-t"
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.label}
                    </Button>
                  </SheetClose>
                </Link>
              ))}
              {/* <SignOutButton redirectUrl={"/"}> */}
              <SheetClose asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-start border-t py-2"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Button>
              </SheetClose>
              {/* </SignOutButton> */}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
