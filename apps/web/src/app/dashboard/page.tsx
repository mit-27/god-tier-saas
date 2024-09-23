"use client";

import { useSession,signOut } from "next-auth/react"
import Link from "next/link"

export default function DashboardPage() {
  const { data: session } = useSession()

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {session ? (
        <>
          <p>Welcome, {session.accessToken}!</p>
          <form action={ () => { signOut() }} method="post">
            <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded mt-4">
              Sign out
            </button>
          </form>
        </>
      ) : (
        <Link href="/login" className="text-blue-500 hover:underline">
          Please sign in
        </Link>
      )}
    </div>
  )
}
