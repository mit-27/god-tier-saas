"use client"
import { signIn } from "next-auth/react"

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Sign in with Google
      </button>
    </div>
  )
}