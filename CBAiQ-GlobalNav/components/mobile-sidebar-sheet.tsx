"use client"

import { useEffect } from "react"
import { useSidebar } from "@/components/ui/sidebar"

export function MobileSidebarSheet() {
  const { isMobile, openMobile } = useSidebar()

  // Add a class to the body when the mobile sidebar is open
  useEffect(() => {
    if (isMobile && openMobile) {
      document.body.classList.add("mobile-sidebar-open")

      // Apply container padding
      const sidebarElement = document.querySelector('[data-sidebar="sidebar"][data-mobile="true"]')
      if (sidebarElement instanceof HTMLElement) {
        sidebarElement.style.paddingLeft = "8px"
        sidebarElement.style.paddingRight = "0"
        sidebarElement.style.paddingBottom = "8px" // Add 8px bottom padding
      }

      // Apply updated button padding to match desktop
      const sidebarMenuButtons = document.querySelectorAll('[data-sidebar="menu-button"]')
      sidebarMenuButtons.forEach((button) => {
        if (button instanceof HTMLElement) {
          button.style.paddingLeft = "8px"
          button.style.paddingRight = "8px" // Reduced from 32px to 8px
        }
      })

      // Adjust group label padding
      const sidebarGroupLabels = document.querySelectorAll('[data-sidebar="group-label"]')
      sidebarGroupLabels.forEach((label) => {
        if (label instanceof HTMLElement) {
          label.style.paddingLeft = "8px"
        }
      })

      // Position menu action buttons correctly
      const menuActions = document.querySelectorAll('[data-sidebar="menu-action"]')
      menuActions.forEach((action) => {
        if (action instanceof HTMLElement) {
          action.style.right = "8px"
        }
      })

      // Add a small margin to the last group in the sidebar
      const sidebarGroups = document.querySelectorAll('[data-sidebar="content"] > div')
      const lastGroup = sidebarGroups[sidebarGroups.length - 1]
      if (lastGroup instanceof HTMLElement) {
        lastGroup.style.marginBottom = "8px"
      }
    } else {
      document.body.classList.remove("mobile-sidebar-open")
    }

    return () => {
      document.body.classList.remove("mobile-sidebar-open")
    }
  }, [isMobile, openMobile])

  return null
}

