'use client'

import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { language } = useLanguage()
  const isRTL = language === 'ar'

  return (
    <footer className="bg-[#1a1208] text-[#fdf8ed] py-8 mt-12" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="arabic-calligraphy text-4xl mb-2">
          مسجد الروضة
        </div>
        <p className="text-[#fdf8ed]/50 font-['Cormorant_Garamond'] text-xl mb-6">
          Al-Rawda Mosque
        </p>

        <div className="w-20 h-px bg-[#c9a84c]/30 mx-auto mb-6" />

        <p className="text-xs text-[#fdf8ed]/30 mt-2">
          © {new Date().getFullYear()} {language === 'ar' ? 'مسجد الروضة' : 'Al-Rawda Mosque'}
        </p>
      </div>
    </footer>
  )
}