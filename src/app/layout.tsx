import './globals.css'
import { Manrope, Plus_Jakarta_Sans } from 'next/font/google'
import ThemeProvider from './components/ThemeProvider'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' })

export const metadata = {
  title: 'Pranso AI - Transforming Business with AI Solutions',
  description: 'Pranso AI helps businesses leverage artificial intelligence to optimize operations, enhance customer experience, and drive growth through innovative solutions.',
  keywords: ['AI Solutions', 'Business Intelligence', 'Machine Learning', 'Digital Transformation', 'AI Consulting'],
  authors: [{ name: 'Pranso AI Team' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${jakarta.variable} font-sans`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 