"use client"

import { Search, Heart, ShoppingCart, Menu, X, GitCompare, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect } from "react"
import { SearchBar } from "@/components/search-bar"
import { ProfileDropdown } from "@/components/profile-dropdown"
import { usePathname } from "next/navigation"
// import { useTheme } from "@/lib/theme-provider"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [wishlistCount, setWishlistCount] = useState(0)
  const [compareCount, setCompareCount] = useState(0)
  // const { theme, toggleTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    const updateCounts = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]")
      const total = cart.reduce((sum: number, item: any) => sum + item.quantity, 0)
      setCartCount(total)

      const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
      setWishlistCount(wishlist.length)

      const compare = JSON.parse(localStorage.getItem("compare") || "[]")
      setCompareCount(compare.length)
    }

    updateCounts()

    window.addEventListener("storage", updateCounts)
    window.addEventListener("cartUpdated", updateCounts)
    window.addEventListener("wishlistUpdated", updateCounts)
    window.addEventListener("compareUpdated", updateCounts)

    return () => {
      window.removeEventListener("storage", updateCounts)
      window.removeEventListener("cartUpdated", updateCounts)
      window.removeEventListener("wishlistUpdated", updateCounts)
      window.removeEventListener("compareUpdated", updateCounts)
    }
  }, [])

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 bg-slate-900">
      {/* Top promo banner */}
      <div className="bg-slate-900 text-white py-1.5 px-4 text-center text-sm">
        <span className="text-slate-300">Need Help? Call Us: +880 1782-######</span>
        <span className="mx-4 hidden sm:inline">|</span>
        <span className="text-yellow-400 block sm:inline">20% off with coupon code : AB72CD</span>
      </div>

      {/* Main header */}
      <div className="bg-slate-800 text-white">
        <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Logo */}
            <Link href="/" className="text-2xl md:text-3xl font-bold hover:text-yellow-400 transition-colors">
              Need Product
            </Link>
            <hr className="block md:hidden w-full border-t border-slate-600 my-1" />


            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                href="/"
                className={`hover:text-yellow-400 transition-colors ${pathname === "/" ? "text-yellow-400" : ""}`}
              >
                HOME
              </Link>
              <Link
                href="/shop"
                className={`hover:text-yellow-400 transition-colors ${pathname === "/shop" ? "text-yellow-400" : ""}`}
              >
                SHOP
              </Link>
              <Link
                href="/about"
                className={`hover:text-yellow-400 transition-colors ${pathname === "/about" ? "text-yellow-400" : ""}`}
              >
                ABOUT US
              </Link>
              <Link
                href="/contact"
                className={`hover:text-yellow-400 transition-colors ${pathname === "/contact" ? "text-yellow-400" : ""}`}
              >
                CONTACT US
              </Link>
              <Link
                href="/request"
                className={`hover:text-yellow-400 transition-colors ${pathname === "/request" ? "text-yellow-400" : ""}`}
              >
                REQUEST
              </Link>
            </nav>

            {/* Desktop Icons */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="text-yellow-400 bg-slate-700"
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <Search className="h-5 w-5" />
              </Button>
                <Link href="/request">
              <Button
                variant="ghost"
                size="sm"
                className={`text-yellow-400 bg-slate-700 rounded-lg ${pathname === "/request" ? "bg-slate-700 text-yellow-400" : ""}`}
              >
                REQ
              </Button>
            </Link>
              {/* <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-yellow-400 hover:bg-slate-700"
                onClick={toggleTheme}
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button> */}
              <ProfileDropdown />
              <Link href="/compare">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-yellow-400 bg-slate-700 relative"
                >
                  <GitCompare className="h-5 w-5" />
                  {compareCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {compareCount}
                    </span>
                  )}
                </Button>
              </Link>
              <Link href="/wishlist">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-yellow-400 bg-slate-700 relative"
                >
                  <Heart className="h-5 w-5" />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {wishlistCount}
                    </span>
                  )}
                </Button>
              </Link>
              <Link href="/cart">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-yellow-400 bg-slate-700 relative"
                >
                  <ShoppingCart className="h-5 w-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Button>
              </Link>
              {/* Tablet + Mobile Hamburger for nav links */}
                <div className="hidden lg:hidden md:flex  items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-yellow-400 bg-slate-700 rounded-lg p-1"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </div>
            </div>

            <div className="flex md:hidden items-center gap-1.5 px-2">
              <Button
                variant="ghost"
                size="icon"
                className="text-yellow-400 bg-slate-700 rounded-lg p-1"
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <Search className="h-4 w-4" />
              </Button>
              <Link href="/request">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`text-yellow-400 bg-slate-700 rounded-lg ${pathname === "/request" ? "bg-slate-700 text-yellow-400" : ""}`}
                >
                  REQ
                </Button>
              </Link>
              <Link href="/compare">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-yellow-400 bg-slate-700 relative"
                >
                  <GitCompare className="h-5 w-5" />
                  {compareCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {compareCount}
                    </span>
                  )}
                </Button>
              </Link>
              <Link href="/wishlist">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-yellow-400 bg-slate-700 relative"
                >
                  <Heart className="h-5 w-5" />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {wishlistCount}
                    </span>
                  )}
                </Button>
              </Link>
              <Link href="/cart">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-yellow-400 bg-slate-700 relative rounded-lg"
                >
                  <ShoppingCart className="h-4 w-4" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
                      {cartCount}
                    </span>
                  )}
                </Button>
              </Link>
              <ProfileDropdown />
              <Button
                variant="ghost"
                size="icon"
                className="text-yellow-400 bg-slate-700 rounded-lg"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-300 shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            <Link
              href="/"
              className={`font-bold flex items-center gap-3 hover:text-yellow-400 transition-colors py-3 px-3 rounded-lg hover:bg-slate-700 ${pathname === "/" ? "bg-slate-700 text-yellow-400" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>🏠</span>
              <span>HOME</span>
            </Link>
            <Link
              href="/shop"
              className={`font-bold flex items-center gap-3 hover:text-yellow-400 transition-colors py-3 px-3 rounded-lg hover:bg-slate-700 ${pathname === "/shop" ? "bg-slate-700 text-yellow-400" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>🛍️</span>
              <span>SHOP</span>
            </Link>
            <Link
              href="/about"
              className={`font-bold flex items-center gap-3 hover:text-yellow-400 transition-colors py-3 px-3 rounded-lg hover:bg-slate-700 ${pathname === "/about" ? "bg-slate-700 text-yellow-400" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>ℹ️</span>
              <span>ABOUT US</span>
            </Link>
            <Link
              href="/contact"
              className={`font-bold flex items-center gap-3 hover:text-yellow-400 transition-colors py-3 px-3 rounded-lg hover:bg-slate-700 ${pathname === "/contact" ? "bg-slate-700 text-yellow-400" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>📞</span>
              <span>CONTACT US</span>
            </Link>
            <div className="border-t border-slate-700 my-2"></div>
            <Link
              href="/wishlist"
              className={`font-bold flex items-center gap-3 hover:text-yellow-400 transition-colors py-3 px-3 rounded-lg hover:bg-slate-700 ${pathname === "/wishlist" ? "bg-slate-700 text-yellow-400" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Heart className="h-5 w-5" />
              <span>WISHLIST</span>
              {wishlistCount > 0 && (
                <span className="ml-auto bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link
              href="/compare"
              className={`font-bold flex items-center gap-3 hover:text-yellow-400 transition-colors py-3 px-3 rounded-lg hover:bg-slate-700 ${pathname === "/compare" ? "bg-slate-700 text-yellow-400" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <GitCompare className="h-5 w-5" />
              <span>COMPARE</span>
              {compareCount > 0 && (
                <span className="ml-auto bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {compareCount}
                </span>
              )}
            </Link>
            {/* <button
              className="flex items-center gap-3 hover:text-yellow-400 transition-colors py-3 px-3 rounded-lg hover:bg-slate-700 text-left"
              onClick={toggleTheme}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span>DARK MODE</span>
            </button> */}
          </nav>
        </div>
      )}

      {/* Search Bar Dropdown */}
      {searchOpen && <SearchBar onClose={() => setSearchOpen(false)} />}
    </header>
  )
}





// "use client"

// import { Search, Heart, ShoppingCart, Menu, X } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"
// import { useState, useEffect } from "react"
// import { SearchBar } from "@/components/search-bar"
// import { ProfileDropdown } from "@/components/profile-dropdown"

// export function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
//   const [searchOpen, setSearchOpen] = useState(false)
//   const [cartCount, setCartCount] = useState(0)

//   useEffect(() => {
//     const updateCartCount = () => {
//       const cart = JSON.parse(localStorage.getItem("cart") || "[]")
//       const total = cart.reduce((sum: number, item: any) => sum + item.quantity, 0)
//       setCartCount(total)
//     }

//     updateCartCount()

//     // Listen for storage changes
//     window.addEventListener("storage", updateCartCount)

//     // Custom event for same-tab updates
//     window.addEventListener("cartUpdated", updateCartCount)

//     return () => {
//       window.removeEventListener("storage", updateCartCount)
//       window.removeEventListener("cartUpdated", updateCartCount)
//     }
//   }, [])

//   return (
//     <header className="w-full fixed top-0 left-0 right-0 z-50 bg-slate-900">
//       {/* Top promo banner */}
//       <div className="bg-slate-900 text-white py-1.5 px-4 text-center text-sm">
//         <span className="text-slate-300">Need Help? Call Us: +880 1782-888888</span>
//         <span className="mx-4 hidden sm:inline">|</span>
//         <span className="text-yellow-400 block sm:inline">20% off with coupon code : AB72CD</span>
//       </div>

//       {/* Main header */}
//       <div className="bg-slate-800 text-white">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex items-center justify-between">
//             {/* Logo */}
//             <Link href="/" className="text-2xl font-bold hover:text-yellow-400 transition-colors">
//               NeedProduct
//             </Link>

//             {/* Desktop Navigation */}
//             <nav className="hidden lg:flex items-center gap-8">
//               <Link href="/" className="hover:text-yellow-400 transition-colors">
//                 HOME
//               </Link>
//               <Link href="/shop" className="hover:text-yellow-400 transition-colors">
//                 SHOP
//               </Link>
//               <Link href="/about" className="hover:text-yellow-400 transition-colors">
//                 ABOUT US
//               </Link>
//               <Link href="/contact" className="hover:text-yellow-400 transition-colors">
//                 CONTACT US
//               </Link>
//               <Link href="/request" className="hover:text-yellow-400 transition-colors">
//                 REQUEST
//               </Link>
//             </nav>

//             {/* Desktop Icons */}
//             <div className="hidden md:flex items-center gap-4">
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="text-white hover:text-yellow-400 hover:bg-slate-700"
//                 onClick={() => setSearchOpen(!searchOpen)}
//               >
//                 <Search className="h-5 w-5" />
//               </Button>
//               <ProfileDropdown />
//               <Link href="/wishlist">
//                 <Button variant="ghost" size="icon" className="text-white hover:text-yellow-400 hover:bg-slate-700">
//                   <Heart className="h-5 w-5" />
//                 </Button>
//               </Link>
//               <Link href="/cart">
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   className="text-white hover:text-yellow-400 hover:bg-slate-700 relative"
//                 >
//                   <ShoppingCart className="h-5 w-5" />
//                   <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                     {cartCount}
//                   </span>
//                 </Button>
//               </Link>
//             </div>

//             {/* Mobile Icons */}
//             <div className="flex md:hidden items-center gap-2">
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="text-white hover:text-yellow-400 hover:bg-slate-700"
//                 onClick={() => setSearchOpen(!searchOpen)}
//               >
//                 <Search className="h-5 w-5" />
//               </Button>
//               <Link href="/request">
//                 <Button variant="ghost" size="sm" className="text-white hover:text-yellow-400 hover:bg-slate-700">
//                   REQ
//                 </Button>
//               </Link>
//               <Link href="/cart">
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   className="text-white hover:text-yellow-400 hover:bg-slate-700 relative"
//                 >
//                   <ShoppingCart className="h-5 w-5" />
//                   <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
//                     {cartCount}
//                   </span>
//                 </Button>
//               </Link>
//               <ProfileDropdown />
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="text-white hover:text-yellow-400 hover:bg-slate-700"
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               >
//                 {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="lg:hidden bg-slate-800 border-t border-slate-700">
//           <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
//             <Link
//               href="/"
//               className="hover:text-yellow-400 transition-colors py-2"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               HOME
//             </Link>
//             <Link
//               href="/shop"
//               className="hover:text-yellow-400 transition-colors py-2"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               SHOP
//             </Link>
//             <Link
//               href="/about"
//               className="hover:text-yellow-400 transition-colors py-2"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               ABOUT US
//             </Link>
//             <Link
//               href="/contact"
//               className="hover:text-yellow-400 transition-colors py-2"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               CONTACT US
//             </Link>
//             <Link
//               href="/wishlist"
//               className="hover:text-yellow-400 transition-colors py-2"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               WISHLIST
//             </Link>
//           </nav>
//         </div>
//       )}

//       {/* Search Bar Dropdown */}
//       {searchOpen && <SearchBar onClose={() => setSearchOpen(false)} />}
//     </header>
//   )
// }
