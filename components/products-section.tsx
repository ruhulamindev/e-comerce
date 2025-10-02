"use client"

import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/products-data"
import Link from "next/link"

interface ProductsSectionProps {
  showAll?: boolean
  category?: string
}

export function ProductsSection({ showAll = false, category }: ProductsSectionProps) {
  const categories = ["ethnic", "classic", "premium", "modern", "formal", "sport"]

  const getProductsByCategory = (cat: string) => {
    return products.filter((p) => p.category === cat)
  }

  if (showAll) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    )
  }

  if (category) {
    const categoryProducts = getProductsByCategory(category)
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categoryProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    )
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Products</h2>

        <div className="space-y-12">
          {categories.map((cat) => {
            const categoryProducts = getProductsByCategory(cat)
            if (categoryProducts.length === 0) return null

            return (
              <div key={cat}>
                <h3 className="text-2xl font-bold mb-6 text-gray-900 capitalize">{cat}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {categoryProducts.slice(0, 4).map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
                {categoryProducts.length > 4 && (
                  <div className="flex justify-center mt-8">
                    <Link href={`/category/${cat}`}>
                      <Button className="bg-red-500 hover:bg-red-600 text-white">View All</Button>
                    </Link>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
