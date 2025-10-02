import { Header } from "@/components/header"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[120px]">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8">About Us</h1>
          <div className="max-w-3xl space-y-6">
            <p className="text-lg text-slate-600">
              Welcome to NeedProduct, your premier destination for quality products across multiple categories. We are
              committed to providing our customers with the best shopping experience.
            </p>
            <p className="text-lg text-slate-600">
              Our mission is to offer a curated selection of products that meet the highest standards of quality and
              value. From ethnic collections to modern designs, we have something for everyone.
            </p>
            <p className="text-lg text-slate-600">
              With over 10 years of experience in e-commerce, we understand what our customers need and strive to exceed
              their expectations with every purchase.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
