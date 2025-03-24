"use client"

import { useEffect } from "react"
import { useSidebar } from "@/components/ui/sidebar"

export function SidebarMobileFix() {
  const { isMobile, openMobile, setOpenMobile } = useSidebar()

  // Handle mobile sidebar toggle
  useEffect(() => {
    // Find the sidebar trigger button
    const handleSidebarTrigger = () => {
      const triggerButton = document.querySelector("[data-sidebar='trigger']")

      if (triggerButton) {
        // Create a new click handler
        const handleClick = (e: MouseEvent) => {
          if (isMobile) {
            e.preventDefault()
            e.stopPropagation()
            setOpenMobile(!openMobile)
          }
        }

        // Add our custom event listener
        triggerButton.addEventListener("click", handleClick)

        // Return cleanup function
        return () => {
          triggerButton.removeEventListener("click", handleClick)
        }
      }

      return () => {}
    }

    // Set up the event handler
    const cleanup = handleSidebarTrigger()

    // Clean up on unmount
    return cleanup
  }, [isMobile, openMobile, setOpenMobile])

  return null
}

