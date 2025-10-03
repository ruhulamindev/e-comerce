"use client"

import type React from "react"

import { Heart, GitCompare, Star, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import type { Product } from "@/lib/products-data"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
    setIsWishlisted(wishlist.includes(product.id))
  }, [product.id])

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!user) {
      router.push("/login")
      return
    }

    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
    if (isWishlisted) {
      const updated = wishlist.filter((id: string) => id !== product.id)
      localStorage.setItem("wishlist", JSON.stringify(updated))
      setIsWishlisted(false)
    } else {
      wishlist.push(product.id)
      localStorage.setItem("wishlist", JSON.stringify(wishlist))
      setIsWishlisted(true)
    }
    window.dispatchEvent(new Event("wishlistUpdated"))
  }

  const handleCompare = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!user) {
      router.push("/login")
      return
    }

    const compare = JSON.parse(localStorage.getItem("compare") || "[]")
    if (compare.length >= 2 && !compare.includes(product.id)) {
      alert("You can only compare 2 products at a time")
      return
    }

    if (!compare.includes(product.id)) {
      compare.push(product.id)
      localStorage.setItem("compare", JSON.stringify(compare))
      window.dispatchEvent(new Event("compareUpdated"))
      alert("Added to compare")
    }
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!user) {
      router.push("/login")
      return
    }

    const cart = JSON.parse(localStorage.getItem("cart") || "[]")
    const existingItem = cart.find((item: any) => item.id === product.id)

    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cart.push({ ...product, quantity: 1 })
    }

    localStorage.setItem("cart", JSON.stringify(cart))
    window.dispatchEvent(new Event("cartUpdated"))
    alert("Added to cart")
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
      <Link href={`/product/${product.id}`}>
        <div className="relative bg-gray-50 p-8">
          <Badge className="absolute top-2 left-2 bg-red-500 text-white">{product.discount}% OFF</Badge>

          <div className="absolute top-2 right-2 flex flex-col gap-2">
            <Button
              size="icon"
              variant="secondary"
              className={`h-8 w-8 rounded-full ${isWishlisted ? "bg-red-500 text-white hover:bg-red-600" : "bg-purple-500 hover:bg-green-500"}`}
              onClick={handleWishlist}
            >
              <Heart className={`h-4 w-4 ${isWishlisted ? "fill-current" : ""}`} />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="h-8 w-8 rounded-full bg-purple-500 hover:bg-green-500"
              onClick={handleCompare}
            >
              <GitCompare className="h-4 w-4" />
            </Button>
          </div>

          <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-48 object-contain" />
        </div>
      </Link>

      <div className="p-4 space-y-3">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-semibold text-gray-900 line-clamp-2 text-left hover:text-green-600 transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="flex justify-end">
          <Button
            size="sm"
            className="bg-green-600 hover:bg-green-700 text-white text-xs px-3 py-1.5 h-auto gap-2"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-3 w-3" />
            Add to Cart
          </Button>
        </div>

        <span className="text-xs text-gray-500 uppercase block text-left">{product.category}</span>

        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start gap-1">
            <span className="text-sm text-gray-400 line-through">${product.price.toFixed(2)}</span>
            <span className="text-lg font-bold text-green-600">${product.discountPrice.toFixed(2)}</span>
          </div>
          <Link href={`/product/${product.id}`} className="text-green-600 font-medium text-sm hover:underline">
            Details
          </Link>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {product.rating} ({product.reviews})
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className={`h-2 w-2 rounded-full ${product.inStock ? "bg-green-500" : "bg-red-500"}`}></div>
          <span className={`text-xs font-semibold ${product.inStock ? "text-green-600" : "text-red-600"}`}>
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>
      </div>
    </div>
  )
}
