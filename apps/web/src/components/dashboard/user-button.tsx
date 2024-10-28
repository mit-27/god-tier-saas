"use client";

import { useRouter } from "next/navigation";
import type React from "react";

import { ChevronRight, LogOut, User, Sun, Moon, Monitor } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type UserButtonProps = {
  navbarMode?: boolean;
};

export const UserButton = ({ navbarMode = false }: UserButtonProps) => {
  const { data: currentSession } = useSession();
  const { setTheme, theme } = useTheme();

  const router = useRouter();

  if (!currentSession) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="text-content flex h-12 items-center justify-between gap-2 rounded-[0.625rem] p-2 hover:cursor-pointer hover:bg-gray-700/10"
      >
        <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
          <Avatar className="h-5 w-5">
            {currentSession.user?.image ? (
              <AvatarImage
                src={currentSession.user?.image}
                alt="Profile picture"
              />
            ) : null}
            <AvatarFallback className="h-5 w-5 overflow-hidden rounded-md border border-gray-500 bg-gray-100 text-gray-700">
              {(currentSession.user?.name ?? "U").slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>

          {!navbarMode ? (
            <>
              <p className="text-md font-medium">{currentSession.user?.name}</p>
              <ChevronRight className="h-4 w-4" />
            </>
          ) : null}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side={navbarMode ? "bottom" : "right"}
        className="w-96"
      >
        <DropdownMenuGroup>
          {/* <Link href="/new"> */}
          <DropdownMenuCheckboxItem
            checked={theme === "light"}
            onCheckedChange={() => setTheme("light")}
            className="cursor-pointer"
          >
            <Sun className="w-4 h-4 mr-2" />
            <span>Light</span>
          </DropdownMenuCheckboxItem>
          {/* </Link> */}
          {/* <Link target="_blank"> */}
          <DropdownMenuCheckboxItem
            checked={theme === "dark"}
            onCheckedChange={() => setTheme("dark")}
            className="cursor-pointer"
          >
            <Moon className="w-4 h-4 mr-2" />
            <span>Dark</span>
          </DropdownMenuCheckboxItem>
          {/* </Link> */}
          {/* <Link href="/settings/user"> */}
          <DropdownMenuCheckboxItem
            checked={theme === "system"}
            onCheckedChange={() => setTheme("system")}
            className="cursor-pointer"
          >
            <Monitor className="w-4 h-4 mr-2" />
            <span>System</span>
          </DropdownMenuCheckboxItem>
          {/* </Link> */}
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() => router.push("/dashboard/profile")}
            className="cursor-pointer"
          >
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          {/* <Button  className="w-full"> */}

          <DropdownMenuItem
            onClick={() => signOut({ callbackUrl: "/" })}
            className="cursor-pointer"
          >
            <LogOut className="mr-2 h-4 w-4" />
            <span>Sign out</span>
          </DropdownMenuItem>
          {/* </Button> */}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
