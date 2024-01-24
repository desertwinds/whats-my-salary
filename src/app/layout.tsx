import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ConfigProvider from './_lib/MyConfigProvider';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Salary Convertor',
  description: 'See how your salary looks like in multiple currencies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConfigProvider>
          {children}
        </ConfigProvider>
      </body>
    </html>
  )
}
