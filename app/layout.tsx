import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./clientLayout"
import { Analytics } from "@vercel/analytics/next"


export const metadata: Metadata = {
  title: "LegalEase - Simplifying Legal Access for All",
  description:
    "LegalEase makes the justice system accessible through AI-powered tools, plain language explanations, and personalized guidance.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return(
  <ClientLayout>{children}<Analytics /></ClientLayout>
)}


import './globals.css'