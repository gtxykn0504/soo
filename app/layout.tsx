import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Soo lab',
  description: 'An innovative lab for exploring new ideas and technologies',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
