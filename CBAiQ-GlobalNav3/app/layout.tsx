import type React from "react"
import "./globals.css"
import "./sidebar-variables.css"
import "./dropdown-fix.css"
import "./card-fix.css"
import "./sidebar-hover-fix-all.css" // Add our new hover fix for all sections
import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true} disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
