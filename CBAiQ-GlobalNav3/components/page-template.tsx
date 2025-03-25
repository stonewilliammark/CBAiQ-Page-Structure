import type React from "react"
import { AppSidebar } from "./app-sidebar"
import { GlobalProductBar } from "./global-product-bar"
import { CustomSidebarTrigger } from "./custom-sidebar-trigger"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { MobileSidebarOverlay } from "./mobile-sidebar-overlay"

interface PageTemplateProps {
  title: string
  parentPath?: string
  parentTitle?: string
  children?: React.ReactNode
}

export default function PageTemplate({ title, parentPath, parentTitle, children }: PageTemplateProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <GlobalProductBar />
      <div className="flex-1 bg-[#fafafa] dark:bg-[#121212]">
        <SidebarProvider>
          <MobileSidebarOverlay />
          <AppSidebar />
          <SidebarInset
            className="pt-0 bg-white dark:bg-[#272727] rounded-xl shadow-md overflow-auto"
            style={{ marginTop: 0 }}
          >
            <header className="flex h-16 shrink-0 items-center gap-2 bg-white dark:bg-[#272727]">
              <div className="flex items-center gap-2 px-4">
                <CustomSidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Breadcrumb>
                  <BreadcrumbList>
                    {parentPath && parentTitle && (
                      <>
                        <BreadcrumbItem className="hidden md:block">
                          <BreadcrumbLink href={parentPath}>{parentTitle}</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="hidden md:block" />
                      </>
                    )}
                    <BreadcrumbItem>
                      <BreadcrumbPage>{title}</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0 bg-white dark:bg-[#272727]">
              {children ? (
                children
              ) : (
                <>
                  <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="aspect-video rounded-xl bg-muted/50 dark:bg-[#3E3E3E]" />
                    <div className="aspect-video rounded-xl bg-muted/50 dark:bg-[#3E3E3E]" />
                    <div className="aspect-video rounded-xl bg-muted/50 dark:bg-[#3E3E3E]" />
                  </div>
                  <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 dark:bg-[#3E3E3E] md:min-h-min" />
                  {/* Add extra space at the bottom to ensure shadow is visible */}
                  <div className="h-4"></div>
                </>
              )}
            </div>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </div>
  )
}

