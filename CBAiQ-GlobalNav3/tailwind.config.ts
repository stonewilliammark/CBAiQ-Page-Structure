import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

// Update the dark mode colors in the config
// Find the .dark section and update it with these values:

/*
.dark {
  --background: 240 10% 3.9%; // #09090b
  --foreground: 0 0% 98%; // #fafafa

  --card: 240 10% 3.9%; // #09090b
  --card-foreground: 0 0% 98%; // #fafafa

  --popover: 240 10% 3.9%; // #09090b
  --popover-foreground: 0 0% 98%; // #fafafa

  --primary: 0 0% 98%; // #fafafa
  --primary-foreground: 240 5.9% 10%; // #19191c

  --secondary: 240 3.7% 15.9%; // #27272a
  --secondary-foreground: 0 0% 98%; // #fafafa

  --muted: 240 3.7% 15.9%; // #27272a
  --muted-foreground: 240 5% 64.9%; // #a1a1aa

  --accent: 240 3.7% 15.9%; // #27272a
  --accent-foreground: 0 0% 98%; // #fafafa

  --destructive: 0 62.8% 30.6%; // #7f1d1d
  --destructive-foreground: 0 0% 98%; // #fafafa

  --border: 240 3.7% 15.9%; // #27272a
  --input: 240 3.7% 15.9%; // #27272a
  --ring: 240 4.9% 83.9%; // #d4d4d8

  // Updated sidebar variables for dark mode
  --sidebar: 240 5.9% 10%; // #19191c
  --sidebar-foreground: 0 0% 98%; // #fafafa
  --sidebar-primary: 0 0% 98%; // #fafafa
  --sidebar-primary-foreground: 240 5.9% 10%; // #19191c
  --sidebar-accent: 240 3.7% 15.9%; // #27272a
  --sidebar-accent-foreground: 0 0% 98%; // #fafafa
  --sidebar-border: 240 3.7% 15.9%; // #27272a
  --sidebar-ring: 217.2 91.2% 59.8%; // #3b82f6

  // CommBank colors - adjusted for dark mode
  --commbank-yellow: 49 90% 45%; // #e6b800 - slightly darker yellow for dark mode
}
*/

