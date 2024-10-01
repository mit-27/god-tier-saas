"use client";

import { useSession,signOut } from "next-auth/react"
import Link from "next/link"

export default function DashboardPage() {
  const { data: session } = useSession()

  return (
    <div className="min-h-screen justify-center items-center rounded-md bg-black w-full">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      
    </div>
  )
}
