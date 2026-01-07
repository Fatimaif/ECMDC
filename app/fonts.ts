import { Inter, Geist } from 'next/font/google'
import localFont from 'next/font/local'

// Using Inter with extralight weight as a substitute for Aspen Extralight
export const aspenExtralight = Inter({
  weight: ['200', '300', '400'],
  subsets: ['latin'],
  variable: '--font-aspen-extralight',
  display: 'swap',
})

export const fontAspenExtralight = aspenExtralight.className

// Geist Sans font (main font used across the website)
export const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
})

export const fontGeistSans = geistSans.className
