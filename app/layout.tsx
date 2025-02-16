import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Box访问助手',
  description: 'Box访问助手',
  generator: 'Helium',
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
