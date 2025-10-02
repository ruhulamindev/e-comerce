import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { AuthProvider } from "@/lib/auth-context"
// import { ThemeProvider } from "@/lib/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Footer } from "@/components/footer";
import { Header } from "@/components/header"  // ✅ Header Import


import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "NeedProduct - Premium Collection",
  description: "Shop our premium collection with 20% off using coupon code AB72CD",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${dmSans.variable} font-sans antialiased`}>
        {/* <ThemeProvider> */}
          <AuthProvider>
             <Header />
            <Suspense fallback={null}>{children}</Suspense>
             <Footer />
            <Toaster />
          </AuthProvider>
        {/* </ThemeProvider> */}
        <Analytics />
      </body>
    </html>
  )
}




// import type React from "react"
// import type { Metadata } from "next"
// import { Space_Grotesk, DM_Sans } from "next/font/google"
// import { Analytics } from "@vercel/analytics/next"
// import { Suspense } from "react"
// import { AuthProvider } from "@/lib/auth-context"
// import "./globals.css"

// const spaceGrotesk = Space_Grotesk({
//   subsets: ["latin"],
//   variable: "--font-space-grotesk",
//   display: "swap",
// })

// const dmSans = DM_Sans({
//   subsets: ["latin"],
//   variable: "--font-dm-sans",
//   display: "swap",
// })

// export const metadata: Metadata = {
//   title: "NeedProduct - Premium Collection",
//   description: "Shop our premium collection with 20% off using coupon code AB72CD",
//   generator: "v0.app",
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${spaceGrotesk.variable} ${dmSans.variable} font-sans antialiased`}>
//         <AuthProvider>
//           <Suspense fallback={null}>{children}</Suspense>
//         </AuthProvider>
//         <Analytics />
//       </body>
//     </html>
//   )
// }
