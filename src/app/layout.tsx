import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Portfolio @luabfr',
  description: 'Portfolio built on Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">     
      <body style={{ margin: "0", padding: "0", maxWidth: "100vw", overflowX: "hidden"}}>{children}</body>
    </html>
  )
}
