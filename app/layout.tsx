import './global.css'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Navigation from './components/Navigation'
import { ThemeProvider } from './providers/theme-provider'
import { LanguageProvider } from './providers/language-provider'

export const metadata = {
  title: 'Jesús Villarreal - Full-stack Developer',
  description: 'Portafolio profesional de Jesús Villarreal, Full-stack Developer con experiencia en tecnologías front-end y back-end.',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Jesús Villarreal - Full-stack Developer',
    description: 'Portafolio profesional de Jesús Villarreal',
    url: 'https://jesus-villarreal.vercel.app',
    siteName: 'Jesús Villarreal',
    locale: 'es-MX',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jesús Villarreal - Full-stack Developer',
    description: 'Portafolio profesional de Jesús Villarreal',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-white dark:bg-gray-900 transition-theme">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme-preference"
        >
          <LanguageProvider>
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <main className="flex-grow">
                {children}
              </main>
              <Analytics />
              <SpeedInsights />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
