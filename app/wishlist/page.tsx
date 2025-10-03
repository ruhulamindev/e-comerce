"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { products, type Product } from "@/lib/products-data"
import { Trash2, ShoppingCart, GitCompare } from "lucide-react"
import Link from "next/link"

export default function WishlistPage() {
  const { user } = useAuth()
  const router = useRouter()
  const [wishlistItems, setWishlistItems] = useState<Product[]>([])

  useEffect(() => {
    if (!user) {
      router.push("/login")
      return
    }

    loadWishlist()
  }, [user, router])

  const loadWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
    const items = products.filter((p) => wishlist.includes(p.id))
    setWishlistItems(items)
  }

  const removeFromWishlist = (id: string) => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
    const updated = wishlist.filter((itemId: string) => itemId !== id)
    localStorage.setItem("wishlist", JSON.stringify(updated))
    loadWishlist()
  }

  const addToCart = (product: Product) => {
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

  const addToCompare = (id: string) => {
    const compare = JSON.parse(localStorage.getItem("compare") || "[]")

    if (compare.length >= 2 && !compare.includes(id)) {
      alert("You can only compare 2 products at a time. Please remove one first.")
      return
    }

    if (!compare.includes(id)) {
      compare.push(id)
      localStorage.setItem("compare", JSON.stringify(compare))
      alert("Added to compare")
    } else {
      alert("Product already in compare list")
    }
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-[120px]">
        <div className="container mx-auto px-4 py-12">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">My Wishlist</h1>
            <Link href="/compare">
              <Button variant="outline" className="gap-2 bg-transparent">
                <GitCompare className="h-5 w-5" />
                Compare Products
              </Button>
            </Link>
          </div>

          {wishlistItems.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-12 text-center">
              <p className="text-xl text-gray-600 mb-6">Your wishlist is empty</p>
              <Link href="/shop">
                <Button className="bg-green-600 hover:bg-green-700">Start Shopping</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {wishlistItems.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow overflow-hidden">
                  <Link href={`/product/${product.id}`}>
                    <div className="bg-gray-50 p-8">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-48 object-contain"
                      />
                    </div>
                  </Link>

                  <div className="p-4 space-y-3">
                    <Link href={`/product/${product.id}`}>
                      <h3 className="font-semibold text-gray-900 hover:text-green-600 line-clamp-2">{product.name}</h3>
                    </Link>

                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-green-600">${product.discountPrice.toFixed(2)}</span>
                      <span className="text-sm text-gray-400 line-through">${product.price.toFixed(2)}</span>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        onClick={() => addToCart(product)}
                        className="flex-1 bg-green-600 hover:bg-green-700 gap-2"
                        size="sm"
                      >
                        <ShoppingCart className="h-4 w-4" />
                        Add to Cart
                      </Button>
                      <Button
                        onClick={() => addToCompare(product.id)}
                        variant="outline"
                        size="sm"
                        className="bg-transparent"
                      >
                        <GitCompare className="h-4 w-4" />
                      </Button>
                      <Button
                        onClick={() => removeFromWishlist(product.id)}
                        variant="outline"
                        size="sm"
                        className="text-red-500 hover:text-red-700 hover:bg-red-50 bg-transparent"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
