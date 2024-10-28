"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { dashboardNavitems, NavItem } from "@/config/dashboard-navitems";

import { Home, Inbox } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

import { UserButton } from "./user-button";

function AppSidebar({ className }: { className: string }) {
  const pathName = usePathname();

  return (
    <div className={cn(className)}>
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader className="items-center justify-center">
            <SidebarMenu>
              <SidebarMenuItem className="flex items-center justify-center">
                <Link
                  href="/dashboard"
                  className="text-medium cursor-pointer font-bold text-primary"
                >
                  My App
                </Link>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Options</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {dashboardNavitems.map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton
                        asChild
                        isActive={
                          pathName.split("/").pop() ===
                          item.href.split("/").pop()
                        }
                      >
                        <Link href={item.href}>
                          <item.icon />
                          <span>{item.label}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <UserButton />
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
      </SidebarProvider>
    </div>
  );
}

export default AppSidebar;
