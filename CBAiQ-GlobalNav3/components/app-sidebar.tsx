"use client"

import type * as React from "react"
import {
  Download,
  FileText,
  Globe,
  Home,
  LifeBuoy,
  MessageCircle,
  PlusCircle,
  Send,
  Settings2,
  ShoppingBag,
  Store,
  Users,
} from "lucide-react"

import { MobileSidebarClose } from "./mobile-sidebar-close"
import { NavMain } from "./nav-main"
import { NavProducts } from "./nav-products"
import { NavSecondary } from "./nav-secondary"
import { NavUser } from "./nav-user"
import { Sidebar, SidebarContent, SidebarFooter, SidebarRail, useSidebar } from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Insight feed",
      url: "/insight-feed",
      icon: Home,
      isActive: true,
      items: [
        {
          title: "History",
          url: "/insight-feed/history",
        },
        {
          title: "Starred",
          url: "/insight-feed/starred",
        },
        {
          title: "Settings",
          url: "/insight-feed/settings",
        },
      ],
    },
    {
      title: "Create insight",
      url: "/create-insight",
      icon: PlusCircle,
      // No submenu items
    },
    {
      title: "Insight store",
      url: "/insight-store",
      icon: Store,
      items: [
        {
          title: "Browse",
          url: "/insight-store/browse",
        },
        {
          title: "Categories",
          url: "/insight-store/categories",
        },
        {
          title: "Purchases",
          url: "/insight-store/purchases",
        },
      ],
    },
    {
      title: "Customer support",
      url: "/customer-support",
      icon: MessageCircle,
      items: [
        {
          title: "Chat",
          url: "/customer-support/chat",
        },
        {
          title: "Tickets",
          url: "/customer-support/tickets",
        },
        {
          title: "FAQ",
          url: "/customer-support/faq",
        },
      ],
    },
    {
      title: "Downloads",
      url: "/downloads",
      icon: Download,
      items: [
        {
          title: "Recent",
          url: "/downloads/recent",
        },
        {
          title: "Completed",
          url: "/downloads/completed",
        },
        {
          title: "In Progress",
          url: "/downloads/in-progress",
        },
      ],
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "/settings/general",
        },
        {
          title: "Team",
          url: "/settings/team",
        },
        {
          title: "Billing",
          url: "/settings/billing",
        },
        {
          title: "Limits",
          url: "/settings/limits",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "/support",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "/feedback",
      icon: Send,
    },
    {
      title: "Disclaimer",
      url: "/disclaimer",
      icon: FileText,
    },
  ],
  products: [
    {
      name: "Profiling",
      url: "/products/profiling",
      icon: Users,
      items: [
        {
          title: "Customer Profiles",
          url: "/products/profiling/customer-profiles",
        },
        {
          title: "Segments",
          url: "/products/profiling/segments",
        },
        {
          title: "Analytics",
          url: "/products/profiling/analytics",
        },
      ],
    },
    {
      name: "Regions",
      url: "/products/regions",
      icon: Globe,
      items: [
        {
          title: "Map View",
          url: "/products/regions/map-view",
        },
        {
          title: "Regional Data",
          url: "/products/regions/regional-data",
        },
        {
          title: "Comparisons",
          url: "/products/regions/comparisons",
        },
      ],
    },
    {
      name: "Centre iQ",
      url: "/products/centre-iq",
      icon: ShoppingBag,
      items: [
        {
          title: "Retail Analytics",
          url: "/products/centre-iq/retail-analytics",
        },
        {
          title: "Store Performance",
          url: "/products/centre-iq/store-performance",
        },
        {
          title: "Customer Flow",
          url: "/products/centre-iq/customer-flow",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { isMobile } = useSidebar()

  return (
    <Sidebar
      variant="inset"
      className="top-14 border-none"
      style={{ paddingTop: 0 }}
      collapsible="offcanvas" // Ensure it's using offcanvas mode for mobile
      {...props}
    >
      {isMobile && <MobileSidebarClose />}
      <SidebarContent className="pt-0">
        <NavMain items={data.navMain} className="pt-0" />
        <NavProducts products={data.products} />
        <NavSecondary items={data.navSecondary} className="mt-auto" /> {/* Removed mb-6 class */}
      </SidebarContent>

      {/* Only show the user section on desktop */}
      {!isMobile && (
        <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter>
      )}

      {/* Only show the rail on desktop */}
      {!isMobile && <SidebarRail />}
    </Sidebar>
  )
}

