'use client'

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from "./components/Footer"
import { ThemeProvider } from "@/app/components/theme-provider"
import { ThemeToggle } from "@/app/components/theme-toggle"

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: {
    default: 'BasinasBase - Personal Website',
    template: '%s | BasinasBase'
  },
  description: 'Personal website of BasinasBase, a tech entusiast and an avid manga reader. Here you can find my blog, portfolio and more.',
  keywords: ['basinasbase', 'personal website', 'portfolio', 'blog'],
  authors: [{ name: 'Georgios Basinas' }],
  creator: 'Georgios Basinas',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.basinasbase.com/',
    siteName: 'BasinasBase - Personal Website',
    images: [
      {
        url: 'https://www.basinasbase.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BasinasBase - Personal Website'
      }
    ]
  },
  robots: {
    index: true,
    follow: true
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen bg-background text-foreground">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
              {children}
            </main>
            <Footer />
            <div className="fixed bottom-4 right-4">
              <ThemeToggle />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}