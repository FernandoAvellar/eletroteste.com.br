import './globals.css'
import { Inter } from 'next/font/google'
import Header from './ui/header'
import Footer from './ui/footer'

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
      </body>
    </html>
  )
}
