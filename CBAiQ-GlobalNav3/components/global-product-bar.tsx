"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Bell, ChevronDown, HelpCircle, LogOut } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function GlobalProductBar() {
  // Add state to track if we're in mobile view
  const [isMobileView, setIsMobileView] = useState(false)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Check if we're in mobile view on mount and when window resizes
  useEffect(() => {
    const checkMobileView = () => {
      // This breakpoint should match the one used for mobile sidebar
      setIsMobileView(window.innerWidth < 768)
    }

    // Check on mount
    checkMobileView()

    // Add resize listener
    window.addEventListener("resize", checkMobileView)

    // Clean up
    return () => window.removeEventListener("resize", checkMobileView)
  }, [])

  if (!mounted) {
    return (
      <div className="sticky top-0 z-50 flex h-14 w-full items-center bg-[#fafafa] px-4 global-product-bar">
        <div className="flex items-center"></div>
        <div className="ml-auto flex items-center gap-2"></div>
      </div>
    )
  }

  return (
    <div className="sticky top-0 z-50 flex h-14 w-full items-center bg-[#fafafa] px-4 global-product-bar">
      <div className={`flex items-center ${isMobileView ? "pl-0" : "pl-2 md:pl-2 sm:pl-0"}`}>
        {/* Conditionally apply padding based on mobile view */}
        <div className="flex items-center">
          <Link href="/insight-feed" className="hover:opacity-80 transition-opacity">
            <span className="text-[24px] font-semibold">
              <span className="text-[#ffcc01] dark:text-[#e6b800]">Comm</span>
              <span className="text-[#424247] dark:text-white">Bank iQ</span>
            </span>
          </Link>
        </div>
      </div>
      <div className="ml-auto flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center gap-1 px-2 py-1 font-normal text-[#424247] dark:text-white"
            >
              <span>Organisation name</span>
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Organisation 1</DropdownMenuItem>
            <DropdownMenuItem>Organisation 2</DropdownMenuItem>
            <DropdownMenuItem>Organisation 3</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="ghost" size="icon" className="text-[#424247] dark:text-white">
          <HelpCircle className="h-5 w-5" />
          <span className="sr-only">Help</span>
        </Button>
        <Button variant="ghost" size="icon" className="text-[#424247] dark:text-white">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </Button>
        <Button className="flex items-center gap-2 rounded-md bg-[#ffcc01] px-4 py-2 hover:bg-[#ffcc01]/90 log-off-button">
          <LogOut className="h-4 w-4 text-[#1e1e1e]" />
          <span className="text-sm font-medium text-[#1e1e1e]">Log off</span>
        </Button>
      </div>
    </div>
  )
}

