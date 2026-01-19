import { Gloria_Hallelujah, Patrick_Hand, Potta_One, Special_Elite } from "next/font/google";

export const fontCaveat = Gloria_Hallelujah({
  subsets: ['latin'],
  weight: '400',
  fallback: ["system-ui", "Arial", "sans-serif"],
})

//Patrick Hand for body
export const fontBody = Patrick_Hand({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-body',
  fallback: ["system-ui", "Arial", "sans-serif"],
})

// Special Elite 
export const fontAccent = Special_Elite({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-accent',
  fallback: ["system-ui", "Arial", "sans-serif"],
})

// Potta One for Header
export const fontHeader = Potta_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-header',
  fallback: ["system-ui", "Arial", "sans-serif"],
})