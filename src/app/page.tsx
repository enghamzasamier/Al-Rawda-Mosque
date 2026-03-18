'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLanguage } from './context/LanguageContext'
import DonationSection from './components/DonationSection'
import ReligiousContent from './components/ReligiousContent'

export default function Home() {
  const [clicked, setClicked] = useState(false)
  const router = useRouter()
  const { language, t } = useLanguage()
  const isRTL = language === 'ar'

  const handleGenderSelection = (gender: 'male' | 'female') => {
    setClicked(true)
    router.push(`/videos/${gender}`)
  }

  return (
    <div className={`min-h-screen ${isRTL ? 'font-[\'Amiri\']' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden islamic-pattern-bg">
        {/* Gold shimmer overlay */}
        <div className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.3) 0%, transparent 70%)'
          }}
        />

        <div className="text-center animate-fade-in relative z-10 max-w-3xl mx-auto px-4">
          {/* Arabic Bismillah */}
          <div className="arabic-calligraphy mb-6 text-5xl md:text-7xl">
            بسم الله الرحمن الرحيم
          </div>

          <h1 className="text-4xl md:text-6xl mb-6 text-[#fdf8ed] font-['Cormorant_Garamond']">
            {t('welcomeTitle')}
          </h1>

          <div className="w-24 h-px bg-[#c9a84c] mx-auto mb-6 opacity-60" />

          <p className="text-lg md:text-xl mb-10 text-[#fdf8ed]/80 max-w-2xl mx-auto leading-relaxed">
            {t('welcomeSubtitle')}
          </p>

          {!clicked ? (
            <div className="space-y-4">
              <p className="text-[#c9a84c] text-base font-medium mb-4">
                {t('selectGender')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => handleGenderSelection('male')}
                  className="group relative px-8 py-4 rounded-xl font-semibold text-lg
                             border-2 border-[#c9a84c] text-[#c9a84c]
                             hover:bg-[#c9a84c] hover:text-[#1a1208] transition-all duration-300
                             hover:shadow-[0_0_30px_rgba(201,168,76,0.4)]"
                  aria-label="Select men's content"
                >
                  <span className="flex items-center gap-2 justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                    </svg>
                    {t('male')}
                  </span>
                </button>
                <button
                  onClick={() => handleGenderSelection('female')}
                  className="group relative px-8 py-4 rounded-xl font-semibold text-lg
                             bg-[#c9a84c] text-[#1a1208]
                             hover:bg-[#e8c97a] transition-all duration-300
                             hover:shadow-[0_0_30px_rgba(201,168,76,0.5)]"
                  aria-label="Select women's content"
                >
                  <span className="flex items-center gap-2 justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                    </svg>
                    {t('female')}
                  </span>
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="inline-flex items-center gap-3 text-[#c9a84c]">
                <div className="w-5 h-5 border-2 border-[#c9a84c] border-t-transparent rounded-full animate-spin" />
                <p className="text-xl">{t('redirecting')}</p>
              </div>
            </div>
          )}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#c9a84c]/60 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v16.19l6.22-6.22a.75.75 0 111.06 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06l6.22 6.22V3a.75.75 0 01.75-.75z" clipRule="evenodd" />
          </svg>
        </div>
      </section>

      {/* Donation Section */}
      <DonationSection />

      {/* Religious Content Section */}
      <ReligiousContent />
    </div>
  )
}