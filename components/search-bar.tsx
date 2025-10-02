"use client"

import { useState, useEffect, useRef } from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { products } from "@/lib/products-data"

interface SearchBarProps {
  onClose: () => void
}

export function SearchBar({ onClose }: SearchBarProps) {
  const [query, setQuery] = useState("")
  const [suggestions, setSuggestions] = useState<typeof products>([])
  const searchRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [onClose])

  useEffect(() => {
    if (query.trim()) {
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase()),
      )
      setSuggestions(filtered.slice(0, 5))
    } else {
      setSuggestions([])
    }
  }, [query])

  const handleSuggestionClick = (productId: string) => {
    router.push(`/product/${productId}`)
    onClose()
  }

  return (
    <div className="absolute top-full left-0 right-0 bg-slate-800 border-t border-slate-700 shadow-lg" ref={searchRef}>
      <div className="container mx-auto px-4 py-4">
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <Input
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 pr-10 bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
            autoFocus
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {suggestions.length > 0 && (
          <div className="max-w-2xl mx-auto mt-2 bg-slate-700 rounded-lg overflow-hidden">
            {suggestions.map((product) => (
              <button
                key={product.id}
                onClick={() => handleSuggestionClick(product.id)}
                className="flex items-center gap-4 p-3 hover:bg-slate-600 transition-colors w-full text-left"
              >
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-12 h-12 object-cover rounded"
                />
                <div className="flex-1">
                  <p className="text-white font-medium">{product.name}</p>
                  <p className="text-sm text-slate-400">{product.category}</p>
                </div>
                <p className="text-green-400 font-bold">${product.discountPrice}</p>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
