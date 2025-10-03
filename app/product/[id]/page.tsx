"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/products-data"
import { Heart, GitCompare, ShoppingCart, Star } from "lucide-react"
import { useState, use } from "react"
import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import { ProductCard } from "@/components/product-card"

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const product = products.find((p) => p.id === resolvedParams.id)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const { user } = useAuth()
  const router = useRouter()

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="pt-[120px]">
          <div className="container mx-auto px-4 py-12">
            <p className="text-center text-xl">Product not found</p>
          </div>
        </main>
      </div>
    )
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  const handleWishlist = () => {
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
  }

  const handleCompare = () => {
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
      alert("Added to compare")
    }
  }

  const handleAddToCart = () => {
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
    alert("Added to cart")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-[120px]">
        <div className="container mx-auto px-4 py-12">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left: Images */}
              <div>
                {/* Main Image */}
                <div className="bg-gray-50 rounded-lg p-8 mb-4">
                  <img
                    src={product.images[selectedImage] || product.image}
                    alt={product.name}
                    className="w-full h-96 object-contain"
                  />
                </div>

                <div className="grid grid-cols-4 gap-4">
                  {product.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`bg-gray-50 rounded-lg p-4 border-2 transition-colors ${
                        selectedImage === index ? "border-green-600" : "border-transparent hover:border-gray-300"
                      }`}
                    >
                      <img
                        src={img || "/placeholder.svg"}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-20 object-contain"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right: Product Info */}
              <div className="space-y-6">
                {/* Product Name */}
                <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>

                {/* Category */}
                <div>
                  <span className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm uppercase font-semibold">
                    {product.category}
                  </span>
                </div>

                {/* Prices */}
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-green-600">${product.discountPrice.toFixed(2)}</span>
                  <span className="text-xl text-gray-400 line-through">${product.price.toFixed(2)}</span>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.discount}% OFF
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
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
                  <span className="text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-2">Description</h2>
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>
                </div>

                {/* Add to Cart Button */}
                <Button
                  onClick={handleAddToCart}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg font-semibold gap-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </Button>

                {/* Wishlist and Compare */}
                <div className="flex gap-4">
                  <Button
                    onClick={handleWishlist}
                    variant="outline"
                    className={`flex-1 gap-2 ${isWishlisted ? "bg-red-50 border-red-500 text-red-600" : ""}`}
                  >
                    <Heart className={`h-5 w-5 ${isWishlisted ? "fill-current" : ""}`} />
                    {isWishlisted ? "In Wishlist" : "Add to Wishlist"}
                  </Button>
                  <Button onClick={handleCompare} variant="outline" className="flex-1 gap-2 bg-transparent">
                    <GitCompare className="h-5 w-5" />
                    Compare
                  </Button>
                </div>

                {/* Stock Status */}
                <div className="flex items-center gap-2">
                  <div className={`h-3 w-3 rounded-full ${product.inStock ? "bg-green-500" : "bg-red-500"}`}></div>
                  <span className={`font-semibold ${product.inStock ? "text-green-600" : "text-red-600"}`}>
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {relatedProducts.length > 0 && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
