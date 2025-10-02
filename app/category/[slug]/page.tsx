"use client"

import { Header } from "@/components/header"
import { ProductsSection } from "@/components/products-section"
import { use } from "react"

const categoryNames: Record<string, string> = {
  ethnic: "Ethnic Collection",
  classic: "Classic Styles",
  premium: "Premium Range",
  modern: "Contemporary Designs",
  formal: "Office & Party Wear",
  sport: "Sports Collection",
}

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params)
  const categoryName = categoryNames[resolvedParams.slug] || resolvedParams.slug

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-[120px]">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8 capitalize">{categoryName}</h1>
          <ProductsSection category={resolvedParams.slug} />
        </div>
      </main>
    </div>
  )
}
