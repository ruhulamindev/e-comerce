import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CategoriesSection } from "@/components/categories-section"
import { BrandsSection } from "@/components/brands-section"
import { ProductsSection } from "@/components/products-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[120px]">
        <HeroSection />
        <CategoriesSection />
        <BrandsSection />
        <ProductsSection />
      </main>
    </div>
  )
}
