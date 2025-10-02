"use client"

import type React from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate sending reset email
    setTimeout(() => {
      setSent(true)
      setLoading(false)
      toast({
        title: "Reset link sent!",
        description: "Check your email for password reset instructions.",
      })
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-[120px] pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-center mb-4">Forgot Password</h1>
            <p className="text-center text-gray-600 mb-8">
              Enter your email address and we'll send you a link to reset your password.
            </p>

            {sent ? (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-4">
                <p className="font-semibold mb-2">Email sent!</p>
                <p className="text-sm">Check your inbox for password reset instructions.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={loading}>
                  {loading ? "Sending..." : "Send Reset Link"}
                </Button>
              </form>
            )}

            <p className="text-center mt-6 text-sm text-gray-600">
              Remember your password?{" "}
              <Link href="/login" className="text-green-600 hover:text-green-700 font-semibold">
                Back to Login
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
