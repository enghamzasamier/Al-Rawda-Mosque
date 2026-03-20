import type { Metadata } from 'next'
import { Cormorant_Garamond, Amiri } from 'next/font/google'
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

export const metadata: Metadata = {
  title: 'مسجد الروضة | Al-Rawda Mosque',
  description: 'الموقع الرسمي لمسجد الروضة - The Official Site of Al-Rawda Mosque',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar">
      <body className={`${cormorant.variable} ${amiri.variable} font-['Cormorant_Garamond',serif]`}>
        <LanguageProvider>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </LanguageProvider>

        {/* Register Service Worker client-side only */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}