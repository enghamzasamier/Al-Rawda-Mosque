import type { Metadata } from 'next'
import { Cormorant_Garamond, Amiri, Merriweather, Reem_Kufi } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from './context/LanguageContext'
import LayoutWrapper from './components/LayoutWrapper'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const amiri = Amiri({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-amiri',
  display: 'swap',
})

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-merriweather',
  display: 'swap',
})

const reemKufi = Reem_Kufi({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-reem-kufi',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'مسجد الروضة | Al-Rawda Mosque',
  description: 'الموقع الرسمي لمسجد الروضة - Welcome to Al-Rawda Mosque',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar">
      <body className={`${cormorant.variable} ${amiri.variable} ${merriweather.variable} ${reemKufi.variable} font-['Merriweather',serif]`}>
        <LanguageProvider>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </LanguageProvider>
      </body>
    </html>
  )
}