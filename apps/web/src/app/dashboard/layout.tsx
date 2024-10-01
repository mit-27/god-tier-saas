"use client";
import * as React from "react";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useSession } from "next-auth/react";




export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    const [open, setOpen] = React.useState(false);
    const {data : currentSession} = useSession();

    return (
      <div>
      {children}
      </div>
    );
  }