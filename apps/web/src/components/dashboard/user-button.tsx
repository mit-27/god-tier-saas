"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Book, ChevronRight, LogOut, Monitor, Moon, Rocket, Settings, Sun } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import type React from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";



export const UserButton : React.FC = () => {
  const {data : currentSession} = useSession();
  const { setTheme,theme } = useTheme();

  

  if (!currentSession) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="flex items-center justify-between gap-2 p-2 w-full h-12 rounded-[0.625rem] hover:bg-gray-700/10 hover:cursor-pointer text-content">
        <div className="flex items-center gap-2 whitespace-nowrap overflow-hidden">
          <Avatar className="w-5 h-5">
            {currentSession.user?.image ? <AvatarImage src={currentSession.user?.image} alt="Profile picture" /> : null}
            <AvatarFallback className=" w-5 h-5 overflow-hidden text-gray-700 bg-gray-100 border border-gray-500 rounded-md">
              {(currentSession.user?.name ?? "U").slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>

          <p>{currentSession.user?.name}</p>
        <ChevronRight className="w-4 h-4" />

          
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="right" className="w-96">
        <DropdownMenuGroup>
          {/* <Link href="/new"> */}
            <DropdownMenuCheckboxItem 
            checked={theme==="light"}
            onCheckedChange={() => setTheme("light")}
            className="cursor-pointer">
              <Sun className="w-4 h-4 mr-2" />
              <span>Light</span>
            </DropdownMenuCheckboxItem>
          {/* </Link> */}
          {/* <Link target="_blank"> */}
            <DropdownMenuCheckboxItem 
            checked={theme==="dark"}
            onCheckedChange={() => setTheme("dark")}
            className="cursor-pointer">
              <Moon className="w-4 h-4 mr-2" />
              <span>Dark</span>
            </DropdownMenuCheckboxItem>
          {/* </Link> */}
          {/* <Link href="/settings/user"> */}
            <DropdownMenuCheckboxItem 
            checked={theme==="system"}
            onCheckedChange={() => setTheme("system")}
            className="cursor-pointer">
              <Monitor className="w-4 h-4 mr-2" />
              <span>System</span>
            </DropdownMenuCheckboxItem>
          {/* </Link> */}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {/* <Button  className="w-full"> */}
            <DropdownMenuItem onClick={() => signOut({ callbackUrl: '/' })} className="cursor-pointer">
            <LogOut className="w-4 h-4 mr-2" />
              <span>
                Sign out
              </span>
            </DropdownMenuItem>
          {/* </Button> */}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
