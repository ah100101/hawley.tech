"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

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
      <nav>
        <ul className="flex items-center space-x-3 sm:space-x-5 text-sm sm:text-base">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.href} className="relative">
                <Link
                  href={item.href}
                  className={cn(
                    "py-1 transition-colors duration-150 block",
                    isActive ? "text-white" : "text-neutral-400 hover:text-neutral-200",
                  )}
                >
                  {item.label}
                </Link>
                {isActive && (
                  <motion.div
                    className="absolute bottom-[-2px] left-0 right-0 h-[1px] bg-white"
                    layoutId="underline"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 35,
                    }}
                  />
                )}
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
