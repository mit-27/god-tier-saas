"use client";

import { Button } from "@/components/ui/button";
import { useSession,signOut } from "next-auth/react"
import Link from "next/link"

export default function DashboardPage() {
  // const { data: session } = useSession()

  return (
    <div className="w-[60%] mx-auto mt-10 min-h-full">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <h2>Welcome, Mit</h2>
    </div>
  )
}
