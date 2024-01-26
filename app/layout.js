import './globals.css'
import { Inter } from 'next/font/google'
import Header from './ui/header'
import Footer from './ui/footer'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Eletroteste',
  description: 'Site da empresa Eletroteste',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
