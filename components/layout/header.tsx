"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-center items-center">
      <nav className="flex items-center space-x-3 sm:space-x-5 text-sm sm:text-base">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "py-1 transition-colors duration-150",
                isActive
                  ? "text-white border-b-2 border-dashed border-white pb-0.5" // Removed larger font size, kept original styling
                  : "text-neutral-400 hover:text-neutral-200",
              )}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}
