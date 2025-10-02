import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main footer content - 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Name & Description */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">NeedProduct</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Your one-stop destination for premium products. We offer the best quality items at competitive prices with
              excellent customer service.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/request" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">
                  Request
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>123 Business Street, City, Country</li>
              <li>+880 1782-888888</li>
              <li>info@needproduct.com</li>
              <li>Mon - Sat: 9:00 AM - 6:00 PM</li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-slate-300 text-sm mb-4">Subscribe to get special offers and updates!</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
              />
              <Button className="bg-yellow-400 text-slate-900 hover:bg-yellow-500">Subscribe</Button>
            </div>
          </div>
        </div>

        <hr className="border-slate-700 mb-6" />

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-6">
          <Link
            href="#"
            target="_blank"
            className="text-slate-300 hover:text-yellow-400 transition-colors"
          >
            <Facebook className="h-6 w-6" />
          </Link>
          <Link
            href="#"
            target="_blank"
            className="text-slate-300 hover:text-yellow-400 transition-colors"
          >
            <Twitter className="h-6 w-6" />
          </Link>
          <Link
            href="#"
            target="_blank"
            className="text-slate-300 hover:text-yellow-400 transition-colors"
          >
            <Instagram className="h-6 w-6" />
          </Link>
        </div>

        <hr className="border-slate-700 mb-6" />

        {/* Bottom footer */}
        <div className="text-center space-y-2">
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-slate-300">
            <span>© 2025 NeedProduct. All rights reserved</span>
            <span className="hidden sm:inline">|</span>
            <Link href="/privacy" className="hover:text-yellow-400 transition-colors">
              Privacy Policy
            </Link>
            <span className="hidden sm:inline">|</span>
            <Link href="/terms" className="hover:text-yellow-400 transition-colors">
              Terms of Service
            </Link>
          </div>
          <div className="text-sm text-slate-400">
            Developed by{" "}
            <Link href="#" target="_blank" className="text-yellow-400 hover:underline font-semibold">
              LST
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
