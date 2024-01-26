import type { Metadata } from 'next'
import { Poppins, Volkhov } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "500", "600", "700"] })
const volkhov = Volkhov({ subsets: ['latin'], weight: ["400", "700"] })

export const metadata: Metadata = {
  title: 'BTEC',
  description: 'A College Website Page built with Next14, Shadcn, and Tailwind.',
  icons:{
    icon:['/favicon.ico?v=4'],
    apple:['/apple-touch-icon.png?v=4']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (   
    <html lang="en">
      <body className={[poppins.className, volkhov.className].toString()} >{children}</body>
    </html>
  )
}
