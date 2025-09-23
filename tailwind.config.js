import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui({
    themes: {
      light: {
        colors: {
          background: "#4A228A", // Deep royal purple
          foreground: "#374151", // Slate gray
          primary: {
            DEFAULT: "#2AE6D6", // Aqua
            foreground: "#374151",
          },
          secondary: {
            DEFAULT: "#FF8FA3", // Coral pink
            foreground: "#374151",
          },
          accent: {
            DEFAULT: "#FFD166", // Golden yellow
            foreground: "#374151",
          },
          muted: {
            DEFAULT: "#A78BFA", // Lavender
            foreground: "#374151",
          }
        }
      },
      dark: {
        colors: {
          background: "#1A1029", // Almost-black purple (keeps brand tone without eye strain)
          foreground: "#E5E7EB", // Light gray (good readability)
          primary: {
            DEFAULT: "#2AE6D6", // Same aqua for brand consistency
            foreground: "#1A1029", // High contrast against dark bg
          },
          secondary: {
            DEFAULT: "#FF6B8B", // Slightly deeper coral (reads better in dark mode)
            foreground: "#1A1029",
          },
          accent: {
            DEFAULT: "#F6C945", // Muted gold (avoids glare vs light mode yellow)
            foreground: "#1A1029",
          },
          muted: {
            DEFAULT: "#7C6FCF", // Dusty violet for subtle UI/disabled elements
            foreground: "#E5E7EB",
          }
        }
      }
    }
  })],
}

module.exports = config;