"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { products, type Product } from "@/lib/products-data"
import { X, ShoppingBag, Star } from "lucide-react"
import Link from "next/link"

export default function ComparePage() {
  const { user } = useAuth()
  const router = useRouter()
  const [compareItems, setCompareItems] = useState<Product[]>([])

  useEffect(() => {
    if (!user) {
      router.push("/login")
      return
    }

    loadCompare()
  }, [user, router])

  const loadCompare = () => {
    const compare = JSON.parse(localStorage.getItem("compare") || "[]")
    const items = products.filter((p) => compare.includes(p.id))
    setCompareItems(items)
  }

  const removeFromCompare = (id: string) => {
    const compare = JSON.parse(localStorage.getItem("compare") || "[]")
    const updated = compare.filter((itemId: string) => itemId !== id)
    localStorage.setItem("compare", JSON.stringify(updated))
    loadCompare()
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

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-[120px]">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8">Compare Products</h1>

          {compareItems.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-12 text-center">
              <p className="text-xl text-gray-600 mb-6">No products to compare</p>
              <Link href="/shop">
                <Button className="bg-green-600 hover:bg-green-700">Start Shopping</Button>
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="p-4 text-left font-semibold">Feature</th>
                    {compareItems.map((product) => (
                      <th key={product.id} className="p-4 text-center min-w-[250px]">
                        <div className="relative">
                          <Button
                            onClick={() => removeFromCompare(product.id)}
                            variant="ghost"
                            size="icon"
                            className="absolute -top-2 -right-2 text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <X className="h-5 w-5" />
                          </Button>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Product Images */}
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Product</td>
                    {compareItems.map((product) => (
                      <td key={product.id} className="p-4">
                        <Link href={`/product/${product.id}`}>
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-full h-48 object-contain mb-4"
                          />
                          <h3 className="font-semibold text-center hover:text-green-600">{product.name}</h3>
                        </Link>
                      </td>
                    ))}
                  </tr>

                  {/* Category */}
                  <tr className="border-b bg-gray-50">
                    <td className="p-4 font-semibold">Category</td>
                    {compareItems.map((product) => (
                      <td key={product.id} className="p-4 text-center uppercase text-sm text-gray-600">
                        {product.category}
                      </td>
                    ))}
                  </tr>

                  {/* Price */}
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Price</td>
                    {compareItems.map((product) => (
                      <td key={product.id} className="p-4 text-center">
                        <div className="space-y-1">
                          <p className="text-2xl font-bold text-green-600">${product.discountPrice.toFixed(2)}</p>
                          <p className="text-sm text-gray-400 line-through">${product.price.toFixed(2)}</p>
                          <p className="text-sm text-red-500 font-semibold">{product.discount}% OFF</p>
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Rating */}
                  <tr className="border-b bg-gray-50">
                    <td className="p-4 font-semibold">Rating</td>
                    {compareItems.map((product) => (
                      <td key={product.id} className="p-4">
                        <div className="flex flex-col items-center gap-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-5 w-5 ${
                                  i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-sm text-gray-600">
                            {product.rating} ({product.reviews} reviews)
                          </p>
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Stock */}
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Availability</td>
                    {compareItems.map((product) => (
                      <td key={product.id} className="p-4 text-center">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                            product.inStock ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                          }`}
                        >
                          {product.inStock ? "In Stock" : "Out of Stock"}
                        </span>
                      </td>
                    ))}
                  </tr>

                  {/* Description */}
                  <tr className="border-b bg-gray-50">
                    <td className="p-4 font-semibold">Description</td>
                    {compareItems.map((product) => (
                      <td key={product.id} className="p-4 text-sm text-gray-600">
                        {product.description}
                      </td>
                    ))}
                  </tr>

                  {/* Add to Cart */}
                  <tr>
                    <td className="p-4 font-semibold">Action</td>
                    {compareItems.map((product) => (
                      <td key={product.id} className="p-4">
                        <Button
                          onClick={() => addToCart(product)}
                          className="w-full bg-green-600 hover:bg-green-700 gap-2"
                        >
                          <ShoppingBag className="h-4 w-4" />
                          Add to Cart
                        </Button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {compareItems.length > 0 && compareItems.length < 2 && (
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <p className="text-blue-700">Add one more product to compare side by side</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
