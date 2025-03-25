"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Moon, Sun, Monitor } from "lucide-react"

import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ThemeSelector() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  // Set system as default if theme is not set
  useEffect(() => {
    if (mounted && !theme) {
      setTheme("system")
    }
  }, [mounted, theme, setTheme])

  if (!mounted) {
    return null
  }

  return (
    <div className="space-y-2">
      <Label htmlFor="theme-selector">Theme Preference</Label>
      <Tabs defaultValue={theme || "system"} onValueChange={setTheme} className="w-full">
        <TabsList className="grid grid-cols-3">
          <TabsTrigger value="light" className="flex items-center gap-2">
            <Sun className="h-4 w-4" />
            <span>Light</span>
          </TabsTrigger>
          <TabsTrigger value="dark" className="flex items-center gap-2">
            <Moon className="h-4 w-4" />
            <span>Dark</span>
          </TabsTrigger>
          <TabsTrigger value="system" className="flex items-center gap-2">
            <Monitor className="h-4 w-4" />
            <span>System</span>
          </TabsTrigger>
        </TabsList>
      </Tabs>
      {mounted && (
        <p className="text-sm text-muted-foreground">
          Current theme: {theme === "system" ? "System (follows your device)" : theme === "dark" ? "Dark" : "Light"}
        </p>
      )}
    </div>
  )
}

