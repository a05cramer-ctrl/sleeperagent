import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Sleeper Agent | $SLPR',
  description: 'Activated When You Least Expect It.',
  icons: {
    icon: '/hero-agent.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased bg-navy-950 text-white font-sans overflow-x-hidden">
        <div className="scanline-overlay" aria-hidden />
        {children}
      </body>
    </html>
  )
}
