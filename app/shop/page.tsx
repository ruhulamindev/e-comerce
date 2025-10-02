"use client"

import { Header } from "@/components/header"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products-data"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const categories = ["all", "ethnic", "classic", "premium", "modern", "formal", "sport"]

  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((p) => p.category === selectedCategory)

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[120px]">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8">Shop All Products</h1>

          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((cat) => (
              <Button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                variant={selectedCategory === cat ? "default" : "outline"}
                className={selectedCategory === cat ? "bg-green-600 hover:bg-green-700" : ""}
              >
                {cat === "all" ? "All Products" : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
