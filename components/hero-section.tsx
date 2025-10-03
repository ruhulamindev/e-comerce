"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect } from "react"

const sliderImages = [
  "/images/1280.jpg",
  "/images/istockphoto-2174520805-612x612.webp",
  "/images/istockphoto-2191616943-612x612.webp",
  "/images/108.jpg",
  "/images/photo-1483181957632-8bda974cbc91.avif",
]

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % sliderImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative bg-gradient-to-r from-red-700 via-red-600 to-orange-600 text-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">NeedProduct</h1>
            <p className="text-xl md:text-2xl text-yellow-300 font-semibold">
              20% OFF with coupon code : AB72CD
            </p>
            <div className="space-y-1 md:space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold">Premium Collection</h2>
              {/* <h2 className="text-2xl md:text-3xl font-bold">Collection</h2> */}
            </div>
            <Link href="/shop">
              <Button className="cursor-pointer mt-4 bg-gradient-to-r from-purple-600 to-pink-800 hover:from-purple-700 hover:via-fuchsia-600 hover:to-pink-700
              text-white px-8 py-6 text-lg font-semibold rounded-md">
                SHOP NOW
              </Button>
            </Link>
          </div>

          {/* Image Slider */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-2xl">
              {sliderImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Discount ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              {/* Optional overlay */}
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
