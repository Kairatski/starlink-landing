import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Starlink Landing Page',
  description: 'High-speed internet from space',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}