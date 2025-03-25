"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeSelector } from "@/components/theme-selector"
import { Separator } from "@/components/ui/separator"

export function SettingsContent() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Appearance</h3>
        <p className="text-sm text-muted-foreground">Customize how the application looks and feels.</p>
      </div>
      <Separator />
      <Card className="dark:bg-[#3E3E3E] dark:border-[#717171] shadow-none">
        <CardHeader>
          <CardTitle>Theme</CardTitle>
          <CardDescription>Choose between light, dark, or system theme for your dashboard.</CardDescription>
        </CardHeader>
        <CardContent>
          <ThemeSelector />
        </CardContent>
      </Card>
    </div>
  )
}

