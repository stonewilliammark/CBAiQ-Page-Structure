"use client"
import { useSidebar } from "@/components/ui/sidebar"

export function MobileSidebarOverlay() {
  const { isMobile, openMobile } = useSidebar()

  // Only render the overlay when the sidebar is open on mobile
  if (isMobile && openMobile) {
    return <div className="fixed inset-0 bg-black/60 z-45" aria-hidden="true" onClick={(e) => e.stopPropagation()} />
  }

  return null
}

