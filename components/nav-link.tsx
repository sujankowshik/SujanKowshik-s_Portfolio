"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface NavLinkProps {
  href: string
  label: string
}

export function NavLink({ href, label }: NavLinkProps) {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(href.substring(1))
      if (element) {
        const rect = element.getBoundingClientRect()
        setActive(rect.top >= 0 && rect.top <= 300)
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [href])

  return (
    <a
      href={href}
      className={cn(
        "group flex items-center py-3 text-xs font-bold uppercase tracking-widest transition-all",
        active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
      )}
    >
      <span
        className={cn(
          "mr-4 h-px bg-muted-foreground transition-all duration-300",
          active ? "w-16 bg-foreground" : "w-8 group-hover:w-12 group-hover:bg-foreground",
        )}
      />
      {label}
    </a>
  )
}
