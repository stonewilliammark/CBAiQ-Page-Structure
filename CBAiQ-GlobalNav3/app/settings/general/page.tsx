import PageTemplate from "@/components/page-template"
import { SettingsContent } from "./settings-content"

export default function GeneralSettingsPage() {
  return (
    <PageTemplate title="General" parentPath="/settings" parentTitle="Settings">
      <SettingsContent />
    </PageTemplate>
  )
}

