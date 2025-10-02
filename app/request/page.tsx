"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export default function RequestPage() {
  const { user } = useAuth()
  const router = useRouter()
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    productName: "",
    category: "",
    description: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!user) {
      toast({
        title: "Login Required",
        description: "Please login or register to submit a product request.",
        variant: "destructive",
      })
      return
    }

    // Process the request
    toast({
      title: "Request Submitted!",
      description: "We'll review your product request and get back to you soon.",
    })

    // Reset form
    setFormData({
      name: "",
      email: "",
      productName: "",
      category: "",
      description: "",
    })
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[120px]">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8">Product Request</h1>

          {!user && (
            <div className="max-w-2xl mb-6 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-yellow-800 mb-2">Login Required</h2>
              <p className="text-yellow-700 mb-4">
                You must be logged in to submit a product request. Please{" "}
                <button
                  onClick={() => router.push("/login")}
                  className="text-green-600 hover:text-green-700 font-semibold underline"
                >
                  login
                </button>{" "}
                or{" "}
                <button
                  onClick={() => router.push("/register")}
                  className="text-green-600 hover:text-green-700 font-semibold underline"
                >
                  register
                </button>{" "}
                to continue.
              </p>
            </div>
          )}

          <div className="max-w-2xl">
            <p className="text-lg text-slate-600 mb-8">
              Can't find what you're looking for? Let us know and we'll do our best to source it for you.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <Input
                  placeholder="Product Name"
                  value={formData.productName}
                  onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                  required
                />
              </div>
              <div>
                <Input
                  placeholder="Product Category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Product Description and Details"
                  rows={5}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                Submit Request
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
