"use client"

import Link from "next/link"

const brands = [
  { name: "Nike", category: "sport", logo: "👟" },
  { name: "Apple", category: "modern", logo: "🍎" },
  { name: "Gucci", category: "premium", logo: "👜" },
  { name: "Zara", category: "formal", logo: "👔" },
  { name: "Adidas", category: "sport", logo: "⚽" },
  { name: "Samsung", category: "modern", logo: "📱" },
  { name: "Prada", category: "premium", logo: "💼" },
  { name: "H&M", category: "classic", logo: "👗" },
  { name: "Puma", category: "sport", logo: "🏃" },
  { name: "Sony", category: "modern", logo: "🎮" },
]

export function BrandsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="underline text-3xl font-bold text-center mb-12 text-gray-900">Brand of Product</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {brands.map((brand, index) => (
            <Link key={index} href={`/category/${brand.category}`}>
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-all cursor-pointer group hover:bg-gray-100">
                <div className="text-5xl mb-3">{brand.logo}</div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {brand.name}
                </h3>
                <p className="text-sm text-gray-600 capitalize">{brand.category}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
