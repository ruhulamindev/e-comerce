"use client"

import { ShoppingBag } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef } from "react"

const categories = [
  {
    name: "ETHNIC",
    slug: "ethnic",
    description: "Traditional",
    icon: "🏺",
  },
  {
    name: "TIMELESS",
    slug: "classic",
    description: "Classic",
    icon: "⌚",
  },
  {
    name: "EXCLUSIVE",
    slug: "premium",
    description: "Premium",
    icon: "💎",
  },
  {
    name: "MODERN",
    slug: "modern",
    description: "Contemporary",
    icon: "🎨",
  },
  {
    name: "FORMAL",
    slug: "formal",
    description: "Office",
    icon: "👔",
  },
]

export function CategoriesSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollPosition = 0
    const scrollSpeed = 1
    let animationId: number
    const startTime = Date.now()

    const scroll = () => {
      const elapsed = Date.now() - startTime

      if (elapsed >= 60000) {
        scrollPosition = 0
        scrollContainer.scrollLeft = 0
        return
      }

      scrollPosition += scrollSpeed

      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Browse Our Categories</h2>

        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto"
            style={{
              scrollBehavior: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {[...categories, ...categories].map((category, index) => (
              <Link
                key={`${category.slug}-${index}`}
                href={`/category/${category.slug}`}
                className="flex-shrink-0 w-48"
              >
                <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer group">
                  <div className="relative inline-block mb-4">
                    <div className="w-24 h-32 mx-auto bg-gradient-to-b from-green-400 to-green-600 rounded-t-lg rounded-b-3xl relative shadow-lg">
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-green-700 rounded-t-lg">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-2 bg-green-800 rounded-t"></div>
                      </div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
                        +
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-green-600 rounded-full p-2 shadow-lg group-hover:bg-green-700 transition-colors">
                      <ShoppingBag className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
