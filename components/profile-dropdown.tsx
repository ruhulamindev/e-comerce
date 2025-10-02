"use client"

import { useState, useEffect, useRef } from "react"
import { User, LogIn, UserPlus, LayoutDashboard, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useAuth } from "@/lib/auth-context"
import { useToast } from "@/hooks/use-toast"

export function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { user, logout } = useAuth()
  const { toast } = useToast()

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="ghost"
        size="icon"
        className="text-white hover:text-yellow-400 hover:bg-slate-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        <User className="h-5 w-5" />
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-slate-700 rounded-lg shadow-lg overflow-hidden z-50">
          {user ? (
            <>
              <Link
                href="/dashboard"
                className="flex items-center gap-3 px-4 py-3 hover:bg-slate-600 transition-colors text-white"
                onClick={() => setIsOpen(false)}
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Link>
              <button
                onClick={() => {
                  logout()
                  setIsOpen(false)
                  toast({
                    title: "Logged out successfully",
                    description: "You have been logged out of your account.",
                  })
                }}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-600 transition-colors text-white"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="flex items-center gap-3 px-4 py-3 hover:bg-slate-600 transition-colors text-white"
                onClick={() => setIsOpen(false)}
              >
                <LogIn className="h-4 w-4" />
                Login
              </Link>
              <Link
                href="/register"
                className="flex items-center gap-3 px-4 py-3 hover:bg-slate-600 transition-colors text-white"
                onClick={() => setIsOpen(false)}
              >
                <UserPlus className="h-4 w-4" />
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  )
}
