'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'en' | 'ar'

type TranslationKeys =
  // Navigation
  | 'home' | 'videos' | 'mosqueName' 
  // Hero / Landing
  | 'welcomeTitle' | 'welcomeSubtitle' | 'selectGender' | 'male' | 'female' | 'redirecting'
  // Donation
  | 'supportMosque' | 'donationText' | 'vodafoneCash' | 'instaPay' | 'copy' | 'copied' | 'openInstaPay' | 'mayAllahReward'
  // Religious content
  | 'wordsOfWisdom'
  // Videos
  | 'videosForMen' | 'videosForWomen' | 'islamicLecture' | 'womensLecture' | 'watchOnYouTube'
  // Common
  | 'loading' | 'error' | 'back'

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    home: 'Home',
    videos: 'Videos',
    mosqueName: 'Al-Rawda Mosque',
    welcomeTitle: 'Welcome to Al-Rawda Mosque',
    welcomeSubtitle: 'Join us in supporting our community through your generous donations. Every contribution helps us serve better.',
    selectGender: 'Please select to access the appropriate content:',
    male: 'Men',
    female: 'Women',
    redirecting: 'Redirecting...',
    supportMosque: 'Support Our Mosque',
    donationText: 'Your generous donations help us maintain and expand our services to the community. Every contribution makes a difference.',
    vodafoneCash: 'Vodafone Cash',
    instaPay: 'InstaPay',
    copy: 'Copy',
    copied: 'Copied!',
    openInstaPay: 'Open InstaPay',
    mayAllahReward: 'May Allah reward you for your generosity',
    wordsOfWisdom: 'Words of Wisdom',
    videosForMen: 'Videos for Men',
    videosForWomen: 'Videos for Women',
    islamicLecture: 'Islamic Lecture',
    womensLecture: "Women's Lecture",
    watchOnYouTube: 'Watch on YouTube',
    loading: 'Loading...',
    error: 'Error',
    back: 'Back',
  },
  ar: {
    home: 'الرئيسية',
    videos: 'الفيديوهات',
    mosqueName: 'مسجد الروضة',
    welcomeTitle: 'أهلاً بكم في مسجد الروضة',
    welcomeSubtitle: 'انضموا إلينا في دعم مجتمعنا من خلال تبرعاتكم الكريمة. كل مساهمة تساعدنا على خدمتكم بشكل أفضل.',
    selectGender: 'يرجى الاختيار للوصول إلى المحتوى المناسب:',
    male: 'الرجال',
    female: 'النساء',
    redirecting: 'جاري التحويل...',
    supportMosque: 'دعم مسجدنا',
    donationText: 'تساعدنا تبرعاتكم الكريمة في الحفاظ على خدماتنا وتوسيعها للمجتمع. كل مساهمة تصنع الفارق.',
    vodafoneCash: 'فودافون كاش',
    instaPay: 'انستا باي',
    copy: 'نسخ',
    copied: 'تم النسخ!',
    openInstaPay: 'فتح انستا باي',
    mayAllahReward: 'جزاكم الله خيراً على كرمكم',
    wordsOfWisdom: 'كلمات الحكمة',
    videosForMen: 'فيديوهات للرجال',
    videosForWomen: 'فيديوهات للنساء',
    islamicLecture: 'محاضرة إسلامية',
    womensLecture: 'محاضرة نسائية',
    watchOnYouTube: 'شاهد على يوتيوب',
    loading: 'جاري التحميل...',
    error: 'خطأ',
    back: 'رجوع',
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ar')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('preferredLanguage')
      const lang: Language = (saved === 'en' || saved === 'ar') ? saved : 'ar'
      setLanguage(lang)
    }
  }, [])

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
      localStorage.setItem('preferredLanguage', language)
    }
  }, [language])

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en')
  }

  const t = (key: string): string => {
    try {
      return translations[language][key] || key
    } catch {
      return key
    }
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}