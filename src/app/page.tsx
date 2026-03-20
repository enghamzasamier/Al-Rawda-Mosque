'use client'

import { useState } from 'react'
import { useLanguage } from './context/LanguageContext'
import DonationSection from './components/DonationSection'
import ReligiousContent from './components/ReligiousContent'
import VideoItem from './components/VideoItem'
import Footer from './components/Footer'

// Inline data lists for zero-request loading
const maleVideos = [
  { id: 'Ndj_L4-trO4', titleEn: 'Islamic Lecture 1', titleAr: 'محاضرة إسلامية ١' },
  { id: 'qS9UtkNoBCA', titleEn: 'Islamic Lecture 2', titleAr: 'محاضرة إسلامية ٢' },
]

const femaleVideos = [
  { id: 'LIhOA9c7IOo', titleEn: "Women's Lecture 1", titleAr: 'محاضرة نسائية ١' },
  { id: 'i3LpGR0jX-c', titleEn: "Women's Lecture 2", titleAr: 'محاضرة نسائية ٢' },
  { id: 'PJmC6NlBcOU', titleEn: "Women's Lecture 3", titleAr: 'محاضرة نسائية ٣' },
]

export default function Home() {
  const [view, setView] = useState<'landing' | 'male' | 'female'>('landing')
  const { language, t } = useLanguage()
  const isRTL = language === 'ar'

  const handleGenderSelection = (v: 'male' | 'female') => {
    setView(v)
    window.scrollTo(0, 0)
  }

  // ---- Sub-View: Video Section ----
  const renderVideoSection = (type: 'male' | 'female') => {
    const videos = type === 'male' ? maleVideos : femaleVideos
    const title = type === 'male' ? t('videosForMen') : t('videosForWomen')
    
    return (
      <div className="animate-fade-in bg-[#fdf8ed]">
        <header className="py-8 bg-[#1a1208] border-b border-[#c9a84c]/20 text-center mb-8">
           <button onClick={() => setView('landing')} className="text-[#c9a84c] mb-4 hover:underline">&larr; {t('back')}</button>
           <h2 className="text-3xl md:text-5xl font-['Cormorant_Garamond'] text-[#fdf8ed] mb-1">{title}</h2>
        </header>

        <main className="max-w-5xl mx-auto px-4 pb-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="bg-white rounded-2xl shadow-md border border-[#c9a84c]/20 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="p-5">
                   <h3 className="text-xl font-['Cormorant_Garamond'] text-[#2a1f0e] font-bold">{isRTL ? video.titleAr : video.titleEn}</h3>
                </div>
                <div className="aspect-video">
                  <VideoItem id={video.id} title={isRTL ? video.titleAr : video.titleEn} platform="youtube" originalUrl={`https://www.youtube.com/watch?v=${video.id}`} />
                </div>
              </div>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (view !== 'landing') return renderVideoSection(view)

  // ---- Main View: Landing ----
  return (
    <div className={`min-h-screen ${isRTL ? 'font-[\'Amiri\']' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <section className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden islamic-pattern-bg">
        <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.3) 0%, transparent 70%)' }} />

        <div className="text-center animate-fade-in relative z-10 max-w-3xl mx-auto px-4">
          <div className="arabic-calligraphy mb-6 text-5xl md:text-7xl">بسم الله الرحمن الرحيم</div>
          <h1 className="text-4xl md:text-6xl mb-6 text-[#fdf8ed] font-['Cormorant_Garamond']">{t('welcomeTitle')}</h1>
          <div className="w-24 h-px bg-[#c9a84c] mx-auto mb-6 opacity-60" />
          <p className="text-lg md:text-xl mb-10 text-[#fdf8ed]/80 max-w-2xl mx-auto leading-relaxed">{t('welcomeSubtitle')}</p>

          <div className="space-y-4">
            <p className="text-[#c9a84c] text-base font-medium mb-4">{t('selectGender')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => handleGenderSelection('male')} 
                className="group px-8 py-4 rounded-xl font-semibold text-lg border-2 border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#1a1208] transition-all transform hover:scale-105"
                aria-label="Select men's content"
              >
                {t('male')}
              </button>
              <button 
                onClick={() => handleGenderSelection('female')} 
                className="group px-8 py-4 rounded-xl font-semibold text-lg bg-[#c9a84c] text-[#1a1208] hover:bg-[#e8c97a] transition-all transform hover:scale-105"
                aria-label="Select women's content"
              >
                {t('female')}
              </button>
            </div>
          </div>
        </div>
      </section>

      <DonationSection />
      <ReligiousContent />
      <Footer />
    </div>
  )
}