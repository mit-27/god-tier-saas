import * as React from "react";
import { MobileNavBar } from "@/components/dashboard/mobile-navbar";
import AppSidebar from "@/components/dashboard/app-sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex h-[100dvh] flex-col overflow-hidden lg:flex-row">
      <MobileNavBar className="lg:hidden" />

      <AppSidebar className="hidden lg:flex" />
      <main className="w-full">{children}</main>
    </div>
  );
}
