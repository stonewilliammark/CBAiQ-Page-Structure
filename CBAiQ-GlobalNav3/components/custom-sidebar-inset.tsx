"use client"

import type React from "react"
import { SidebarInset as OriginalSidebarInset } from "@/components/ui/sidebar"
import { useTheme } from "next-themes"

interface CustomSidebarInsetProps extends React.ComponentProps<typeof OriginalSidebarInset> {
  children: React.ReactNode
}

export function CustomSidebarInset({ children, className, ...props }: CustomSidebarInsetProps) {
  const { theme } = useTheme()
  const isDarkMode = theme === "dark"

  const insetStyle = {
    marginTop: 0,
    backgroundColor: isDarkMode ? "#272727" : "white",
    borderRadius: "0.75rem",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    margin: "0.5rem",
    marginBottom: "1rem", // Extra margin at bottom to show shadow
    overflow: "hidden",
  }

  return (
    <div className="custom-sidebar-inset-wrapper" style={{ backgroundColor: isDarkMode ? "#121212" : "white" }}>
      <OriginalSidebarInset className={`pt-0 ${className || ""}`} style={insetStyle} {...props}>
        <div style={{ backgroundColor: isDarkMode ? "#272727" : "white", height: "100%", overflow: "auto" }}>
          {children}
        </div>
      </OriginalSidebarInset>
    </div>
  )
}

