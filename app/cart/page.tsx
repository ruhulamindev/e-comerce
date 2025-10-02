"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Trash2, Plus, Minus } from "lucide-react"
import Link from "next/link"

interface CartItem {
  id: string
  name: string
  category: string
  image: string
  price: number
  discountPrice: number
  quantity: number
}

export default function CartPage() {
  const { user } = useAuth()
  const router = useRouter()
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    if (!user) {
      router.push("/login")
      return
    }

    loadCart()
  }, [user, router])

  const loadCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")
    setCartItems(cart)
  }

  const updateQuantity = (id: string, change: number) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change)
        return { ...item, quantity: newQuantity }
      }
      return item
    })

    setCartItems(updatedCart)
    localStorage.setItem("cart", JSON.stringify(updatedCart))
  }

  const removeItem = (id: string) => {
    const updatedCart = cartItems.filter((item) => item.id !== id)
    setCartItems(updatedCart)
    localStorage.setItem("cart", JSON.stringify(updatedCart))
  }

  const getTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.discountPrice * item.quantity, 0)
  }

  const handleCheckout = () => {
    // Create order
    const order = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      items: cartItems,
      total: getTotal(),
      status: "Completed",
    }

    const orders = JSON.parse(localStorage.getItem("orders") || "[]")
    orders.push(order)
    localStorage.setItem("orders", JSON.stringify(orders))

    // Clear cart
    localStorage.setItem("cart", "[]")
    setCartItems([])

    alert("Order placed successfully!")
    router.push("/dashboard")
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-[120px]">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-12 text-center">
              <p className="text-xl text-gray-600 mb-6">Your cart is empty</p>
              <Link href="/shop">
                <Button className="bg-green-600 hover:bg-green-700">Continue Shopping</Button>
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg shadow p-6">
                    <div className="flex gap-6">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-24 h-24 object-contain rounded"
                      />

                      <div className="flex-1">
                        <Link href={`/product/${item.id}`}>
                          <h3 className="font-bold text-lg hover:text-green-600">{item.name}</h3>
                        </Link>
                        <p className="text-sm text-gray-500 uppercase">{item.category}</p>
                        <p className="text-green-600 font-bold mt-2">${item.discountPrice.toFixed(2)}</p>
                      </div>

                      <div className="flex flex-col items-end justify-between">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="h-5 w-5" />
                        </Button>

                        <div className="flex items-center gap-2 border border-gray-300 rounded">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => updateQuantity(item.id, -1)}
                            className="h-8 w-8"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-12 text-center font-semibold">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => updateQuantity(item.id, 1)}
                            className="h-8 w-8"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow p-6 sticky top-32">
                  <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-semibold">${getTotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-semibold text-green-600">Free</span>
                    </div>
                    <div className="border-t pt-4 flex justify-between text-xl font-bold">
                      <span>Total</span>
                      <span className="text-green-600">${getTotal().toFixed(2)}</span>
                    </div>
                  </div>

                  <Button onClick={handleCheckout} className="w-full bg-green-600 hover:bg-green-700 py-6 text-lg">
                    Proceed to Checkout
                  </Button>

                  <Link href="/shop">
                    <Button variant="outline" className="w-full mt-4 bg-transparent">
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
