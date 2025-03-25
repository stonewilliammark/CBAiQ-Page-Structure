"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { ChevronRight, type LucideIcon } from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
  className,
  ...props
}: {
  items: {
    title: string
    url: string
    icon: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
  className?: string
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  const { isMobile } = useSidebar()

  // Initialize all items as closed by default, regardless of active state
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})

  // Toggle function for a specific item
  const toggleItem = (title: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  // Add mobile-specific classes for padding
  const mobileClass = isMobile ? "mobile-nav-main" : ""

  return (
    <SidebarGroup className={`${className} ${mobileClass}`} style={{ backgroundColor: "inherit" }} {...props}>
      {!isMobile && <SidebarGroupLabel>Platform</SidebarGroupLabel>}
      {isMobile && <SidebarGroupLabel className="pt-0 mt-0">Platform</SidebarGroupLabel>}
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title} className="menu-item-container" data-menu-parent={item.title}>
            {/* Main menu button */}
            <SidebarMenuButton
              asChild
              tooltip={item.title}
              className={`${isMobile ? "mobile-menu-button" : ""} main-menu-button`}
              data-menu-title={item.title}
            >
              <Link href={item.url}>
                <item.icon />
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>

            {item.items?.length ? (
              <>
                {/* Arrow button to toggle submenu */}
                <SidebarMenuAction
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    toggleItem(item.title)
                  }}
                  className={`transition-transform duration-200 ${
                    openItems[item.title] ? "rotate-90" : ""
                  } menu-action-arrow`}
                  data-menu-title={item.title}
                  data-parent-action={item.title}
                >
                  <ChevronRight />
                  <span className="sr-only">Toggle {item.title} submenu</span>
                </SidebarMenuAction>

                {/* Submenu items */}
                {openItems[item.title] && (
                  <SidebarMenuSub
                    className={`${isMobile ? "mobile-menu-sub" : ""} submenu-container`}
                    data-parent-menu={item.title}
                  >
                    {item.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title} className="submenu-item" data-submenu-parent={item.title}>
                        <SidebarMenuSubButton
                          asChild
                          className={`${isMobile ? "mobile-submenu-button" : ""} submenu-button`}
                          data-submenu-title={subItem.title}
                          data-parent-menu={item.title}
                        >
                          <Link href={subItem.url}>
                            <span>{subItem.title}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                )}
              </>
            ) : null}
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}

