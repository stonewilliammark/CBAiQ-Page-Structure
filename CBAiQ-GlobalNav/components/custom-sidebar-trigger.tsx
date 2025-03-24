"use client"

import { PanelLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSidebar } from "@/components/ui/sidebar"

interface CustomSidebarTriggerProps {
  className?: string
}

export function CustomSidebarTrigger({ className }: CustomSidebarTriggerProps) {
  const { isMobile, openMobile, setOpenMobile, toggleSidebar } = useSidebar()

  const handleClick = () => {
    if (isMobile) {
      setOpenMobile(!openMobile)
    } else {
      toggleSidebar()
    }
  }

  return (
    <Button
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={`h-7 w-7 ${className || ""}`}
      onClick={handleClick}
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
}

