'use client'

import Footer from '@/app/components/Footer'
import QRCodeComponent from '@/app/components/QRCode'
import { useLanguage } from '@/app/context/LanguageContext'

const maleVideos = [
  {
    id: 'Ndj_L4-trO4',
    titleEn: 'Islamic Lecture 1',
    titleAr: 'محاضرة إسلامية ١',
  },
  {
    id: 'qS9UtkNoBCA',
    titleEn: 'Islamic Lecture 2',
    titleAr: 'محاضرة إسلامية ٢',
  },
]

export default function MaleVideosPage() {
  const { language, t } = useLanguage()
  const isRTL = language === 'ar'

  return (
    <div className={`min-h-screen flex flex-col bg-[#fdf8ed]`} dir={isRTL ? 'rtl' : 'ltr'}>
      <main className="max-w-5xl mx-auto px-4 py-10 flex-grow w-full">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-['Cormorant_Garamond'] text-[#2a1f0e] mb-3">
            {t('videosForMen')}
          </h1>
          <div className="w-16 h-px bg-[#c9a84c] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {maleVideos.map((video) => {
            const watchUrl = `https://www.youtube.com/watch?v=${video.id}`
            return (
              <div
                key={video.id}
                className="bg-white rounded-2xl shadow-md border border-[#c9a84c]/20
                           overflow-hidden hover:shadow-xl hover:border-[#c9a84c]/50
                           transition-all duration-300"
              >
                <div className="px-5 pt-5 pb-3">
                  <h2 className="text-xl font-['Cormorant_Garamond'] text-[#2a1f0e] font-bold">
                    {isRTL ? video.titleAr : video.titleEn}
                  </h2>
                </div>

                <div className="w-full aspect-video bg-[#1a1208]">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0&modestbranding=1`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    title={isRTL ? video.titleAr : video.titleEn}
                  />
                </div>

                <div className="px-5 py-4 flex items-center justify-between gap-4">
                  <a
                    href={watchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 flex-1 py-2.5 px-4
                               bg-[#c9a84c] text-[#1a1208] rounded-xl font-semibold text-sm
                               hover:bg-[#e8c97a] transition-colors duration-200"
                  >
                    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    {t('watchOnYouTube')}
                  </a>
                  <div className="flex-shrink-0">
                    <QRCodeComponent url={watchUrl} size={64} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </main>
      <Footer />
    </div>
  )
}