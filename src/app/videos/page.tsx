'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useLanguage } from '../context/LanguageContext'

export default function VideosPage() {
  const router = useRouter()
  const { t } = useLanguage()

  useEffect(() => {
    router.replace('/videos/male')
  }, [router])

  return (
    <div className="flex justify-center items-center min-h-[60vh] bg-[#fdf8ed]">
      <div className="text-center">
        <div className="w-10 h-10 border-2 border-[#c9a84c] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <h1 className="text-2xl font-['Cormorant_Garamond'] text-[#2a1f0e]">{t('loading')}</h1>
      </div>
    </div>
  )
}
