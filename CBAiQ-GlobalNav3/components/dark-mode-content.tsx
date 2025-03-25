"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface DarkModeContentProps {
  children: React.ReactNode
}

export function DarkModeContent({ children }: DarkModeContentProps) {
  const { theme } = useTheme()
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contentRef.current) return

    const applyStyles = () => {
      const isDarkMode = document.documentElement.classList.contains("dark")

      if (isDarkMode && contentRef.current) {
        // Apply dark mode styles directly to the element
        contentRef.current.style.backgroundColor = "#272727"
        contentRef.current.style.borderRadius = "0.75rem"
        contentRef.current.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1)"
        contentRef.current.style.margin = "0.5rem"
        contentRef.current.style.overflow = "hidden"

        // Apply styles to all direct children
        Array.from(contentRef.current.children).forEach((child) => {
          ;(child as HTMLElement).style.backgroundColor = "#272727"
        })
      }
    }

    // Apply styles immediately
    applyStyles()

    // Set up a mutation observer to watch for theme changes
    const observer = new MutationObserver(applyStyles)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [theme])

  return (
    <div ref={contentRef} className="dark-mode-content">
      {children}
    </div>
  )
}

