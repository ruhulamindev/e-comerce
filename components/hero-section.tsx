import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-red-700 via-red-600 to-orange-600 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left content */}
          <div className="flex-1 space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-balance">NeedProduct</h1>
            <p className="text-2xl text-yellow-300 font-semibold">20% OFF with coupon code : AB72CD</p>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Premium</h2>
              <h2 className="text-3xl font-bold">Collection</h2>
            </div>
            <Link href="/shop">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg font-semibold rounded-md">
                SHOP NOW
              </Button>
            </Link>
          </div>

          {/* Right content - Special offer badge */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="bg-white rounded-lg shadow-2xl p-8 transform rotate-3">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 bg-yellow-400 text-red-700 font-bold text-4xl px-6 py-2 rounded-lg shadow-lg transform -rotate-12">
                    50%
                  </div>
                  <div className="bg-red-600 text-white px-12 py-16 rounded-lg shadow-xl transform -rotate-3">
                    <div className="text-center space-y-2">
                      <div className="text-2xl font-bold">SPECIAL</div>
                      <div className="text-5xl font-bold">OFFER</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
