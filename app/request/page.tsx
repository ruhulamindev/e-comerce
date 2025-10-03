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

    // Here you can add backend API call to save request

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
      <main className="pt-[140px] pb-16">
        <div className="container mx-auto px-4 space-y-8">

          {/* Login Required Alert */}
          {!user && (
            <div className="max-w-2xl mx-auto mb-6 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
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

          {/* Page Title */}
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-2">Can't find what you're looking for?</h1>
            <p className="text-lg text-slate-600">Let us know and we'll do our best to source it for you.</p>
          </div>

          {/* Request Form */}
          <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Your Name *</label>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Your Email *</label>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Product Name *</label>
                <Input
                  placeholder="Product Name"
                  value={formData.productName}
                  onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Product Category *</label>
                <Input
                  placeholder="Product Category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Product Description and Details *</label>
                <Textarea
                  placeholder="Provide full details about the product you want us to source"
                  rows={5}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold">
                Submit Request
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
