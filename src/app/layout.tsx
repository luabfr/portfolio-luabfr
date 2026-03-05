import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/StyledComponentsRegistry';
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
      <body className={inter.className} style={{ margin: "0", padding: "0", maxWidth: "100vw", overflowX: "hidden", background: "#192231"}}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
