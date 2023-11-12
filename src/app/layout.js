import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { UserProvider } from '@auth0/nextjs-auth0/client';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={inter.className}>
          <Navbar/>
          {children}
        </body>
      </UserProvider>
    </html>
  )
}
