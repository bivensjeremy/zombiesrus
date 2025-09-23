import { Caveat, Fira_Code as FontMono, Inter as FontSans, Potta_One, Roboto } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontPotter = Potta_One({
  subsets: ['latin'],
  weight: '400'
});

export const fontBody = Roboto({
  subsets: ['latin'],
  weight: ['400', '800']
});

export const fontCaveat = Caveat({
  subsets: ['latin'],
  weight: 'variable'
})