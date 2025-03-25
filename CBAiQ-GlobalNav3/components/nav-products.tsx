"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, MoreHorizontal, Share, Trash2, type LucideIcon } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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

export function NavProducts({
  products,
}: {
  products: {
    name: string
    url: string
    icon: LucideIcon
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  const { isMobile } = useSidebar()

  // Initialize all products as closed by default
  const [openProducts, setOpenProducts] = useState<Record<string, boolean>>({})

  // Toggle function for a specific product
  const toggleProduct = (name: string) => {
    setOpenProducts((prev) => ({
      ...prev,
      [name]: !prev[name],
    }))
  }

  // Add mobile-specific classes for padding
  const mobileClass = isMobile ? "mobile-nav-products" : ""

  return (
    <SidebarGroup
      className={`group-data-[collapsible=icon]:hidden ${mobileClass} nav-products`}
      style={{ backgroundColor: "inherit" }}
    >
      <SidebarGroupLabel>Products</SidebarGroupLabel>
      <SidebarMenu>
        {products.map((item) => (
          <SidebarMenuItem key={item.name} className="menu-item-container">
            <SidebarMenuButton asChild className={`${isMobile ? "mobile-menu-button" : ""} products-menu-button`}>
              <Link href={item.url}>
                <item.icon />
                <span>{item.name}</span>
              </Link>
            </SidebarMenuButton>

            {item.items?.length ? (
              <>
                {/* Arrow button to toggle submenu */}
                <SidebarMenuAction
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    toggleProduct(item.name)
                  }}
                  className={`transition-transform duration-200 ${
                    openProducts[item.name] ? "rotate-90" : ""
                  } products-menu-action`}
                >
                  <ChevronRight />
                  <span className="sr-only">Toggle {item.name} submenu</span>
                </SidebarMenuAction>

                {/* Submenu items */}
                {openProducts[item.name] && (
                  <SidebarMenuSub className={`${isMobile ? "mobile-menu-sub" : ""} products-submenu`}>
                    {item.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title} className="products-submenu-item">
                        <SidebarMenuSubButton
                          asChild
                          className={`${isMobile ? "mobile-submenu-button" : ""} products-submenu-button`}
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
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuAction showOnHover className="products-menu-action-more">
                    <MoreHorizontal />
                    <span className="sr-only">More</span>
                  </SidebarMenuAction>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-48"
                  side={isMobile ? "bottom" : "right"}
                  align={isMobile ? "end" : "start"}
                >
                  <DropdownMenuItem>
                    <Share className="text-muted-foreground" />
                    <span>Share Product</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Trash2 className="text-muted-foreground" />
                    <span>Delete Product</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}

