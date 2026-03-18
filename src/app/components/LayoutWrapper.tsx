'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '../context/LanguageContext'

function TopNavbar() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <header className="fixed top-0 left-0 right-0 z-30 h-14
                       bg-[#1a1208] border-b border-[#c9a84c]/20
                       flex items-center justify-between px-4">
      {/* Logo + name - left */}
      <Link href="/" className="flex items-center gap-2.5">
        <div className="relative w-9 h-9 rounded-lg overflow-hidden bg-[#fdf8ed]/10 ring-1 ring-[#c9a84c]/30 p-0.5">
          <Image
            src="/images/logo.avif"
            alt="Al-Rawda Mosque"
            fill
            className="object-contain"
            sizes="36px"
            priority
          />
        </div>
        <span className="text-[#c9a84c] font-['Cormorant_Garamond'] text-lg font-bold hidden sm:block">
          {language === 'ar' ? 'مسجد الروضة' : 'Al-Rawda Mosque'}
        </span>
      </Link>

      {/* Language toggle - right */}
      <button
        onClick={toggleLanguage}
        className="w-10 h-10 flex items-center justify-center rounded-xl
                   border border-[#c9a84c]/30 text-[#c9a84c]
                   hover:bg-[#c9a84c]/10 transition-colors duration-200
                   text-sm font-bold tracking-wide"
        aria-label="Toggle language"
      >
        {language === 'en' ? 'ع' : 'EN'}
      </button>
    </header>
  )
}

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopNavbar />
      <div className="pt-14 min-h-screen">
        {children}
      </div>
    </>
  )
}
