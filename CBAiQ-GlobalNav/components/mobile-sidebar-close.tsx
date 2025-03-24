"use client"

import { PanelLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSidebar } from "@/components/ui/sidebar"

export function MobileSidebarClose() {
  const { setOpenMobile } = useSidebar()

  return (
    <div className="flex justify-end pr-2 pt-2">
      {" "}
      {/* Reduced from pr-8 to pr-2 */}
      <Button
        variant="ghost"
        size="icon"
        className="h-7 w-7 mobile-sidebar-close"
        onClick={() => setOpenMobile(false)}
        aria-label="Close sidebar"
      >
        <PanelLeft className="h-4 w-4" />
        <span className="sr-only">Toggle Sidebar</span>
      </Button>
    </div>
  )
}

