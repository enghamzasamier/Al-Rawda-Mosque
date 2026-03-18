'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'en' | 'ar'

type TranslationKeys =
  // Navigation
  | 'home' | 'videos' | 'quran' | 'companions' | 'ahadith' | 'mosqueName' | 'menu' | 'close'
  // Hero / Landing
  | 'welcomeTitle' | 'welcomeSubtitle' | 'selectGender' | 'male' | 'female' | 'redirecting'
  // Donation
  | 'supportMosque' | 'donationText' | 'vodafoneCash' | 'instaPay' | 'copy' | 'copied' | 'openInstaPay' | 'mayAllahReward'
  // Religious content
  | 'wordsOfWisdom'
  // Videos
  | 'videosForMen' | 'videosForWomen' | 'islamicLecture' | 'womensLecture' | 'watchOnYouTube'
  // Quran Section
  | 'holyQuran' | 'surahs' | 'verses' | 'keyPoints' | 'meccan' | 'medinan' | 'share' | 'readMore'
  | 'surahDetails' | 'revelationType' | 'totalVerses' | 'mainThemes'
  // Companions Section
  | 'tenPromisedParadise' | 'companions' | 'keyAchievements' | 'title' | 'description' | 'achievements'
  | 'virtues' | 'viewDetails' | 'companionDetails' | 'earlyLife' | 'contributions' | 'legacy'
  // Ahadith
  | 'ahadithCollection' | 'shareThisSection' | 'scanToShare'
  // Common
  | 'loading' | 'error' | 'back' | 'next' | 'previous' | 'search' | 'filter' | 'sort' | 'all' | 'more' | 'less'

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const translations: Record<Language, Record<TranslationKeys, string>> = {
  en: {
    // Navigation
    home: 'Home',
    videos: 'Videos',
    quran: 'Quran',
    companions: 'Companions',
    ahadith: 'Ahadith',
    mosqueName: 'Al-Rawda Mosque',
    menu: 'Menu',
    close: 'Close',

    // Hero / Landing
    welcomeTitle: 'Welcome to Al-Rawda Mosque',
    welcomeSubtitle: 'Join us in supporting our community through your generous donations. Every contribution helps us serve better.',
    selectGender: 'Please select to access the appropriate content:',
    male: 'Men',
    female: 'Women',
    redirecting: 'Redirecting...',

    // Donation
    supportMosque: 'Support Our Mosque',
    donationText: 'Your generous donations help us maintain and expand our services to the community. Every contribution makes a difference.',
    vodafoneCash: 'Vodafone Cash',
    instaPay: 'InstaPay',
    copy: 'Copy',
    copied: 'Copied!',
    openInstaPay: 'Open InstaPay',
    mayAllahReward: 'May Allah reward you for your generosity',

    // Religious content
    wordsOfWisdom: 'Words of Wisdom',

    // Videos
    videosForMen: 'Videos for Men',
    videosForWomen: 'Videos for Women',
    islamicLecture: 'Islamic Lecture',
    womensLecture: "Women's Lecture",
    watchOnYouTube: 'Watch on YouTube',

    // Quran Section
    holyQuran: 'The Holy Quran',
    surahs: 'Surahs',
    verses: 'verses',
    keyPoints: 'Key Points',
    meccan: 'Meccan',
    medinan: 'Medinan',
    share: 'Share',
    readMore: 'Read More',
    surahDetails: 'Surah Details',
    revelationType: 'Revelation Type',
    totalVerses: 'Total Verses',
    mainThemes: 'Main Themes',

    // Companions Section
    tenPromisedParadise: 'The Ten Promised Paradise',
    keyAchievements: 'Key Achievements',
    title: 'Title',
    description: 'Description',
    achievements: 'Achievements',
    virtues: 'Virtues',
    viewDetails: 'View Details',
    companionDetails: 'Companion Details',
    earlyLife: 'Early Life',
    contributions: 'Contributions',
    legacy: 'Legacy',

    // Ahadith
    ahadithCollection: 'Ahadith Collection',
    shareThisSection: 'Share This Section',
    scanToShare: 'Scan to share this section',

    // Common
    loading: 'Loading...',
    error: 'Error',
    back: 'Back',
    next: 'Next',
    previous: 'Previous',
    search: 'Search',
    filter: 'Filter',
    sort: 'Sort',
    all: 'All',
    more: 'More',
    less: 'Less',
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    videos: 'الفيديوهات',
    quran: 'القرآن',
    companions: 'الصحابة',
    ahadith: 'الأحاديث',
    mosqueName: 'مسجد الروضة',
    menu: 'القائمة',
    close: 'إغلاق',

    // Hero / Landing
    welcomeTitle: 'أهلاً بكم في مسجد الروضة',
    welcomeSubtitle: 'انضموا إلينا في دعم مجتمعنا من خلال تبرعاتكم الكريمة. كل مساهمة تساعدنا على خدمتكم بشكل أفضل.',
    selectGender: 'يرجى الاختيار للوصول إلى المحتوى المناسب:',
    male: 'الرجال',
    female: 'النساء',
    redirecting: 'جاري التحويل...',

    // Donation
    supportMosque: 'دعم مسجدنا',
    donationText: 'تساعدنا تبرعاتكم الكريمة في الحفاظ على خدماتنا وتوسيعها للمجتمع. كل مساهمة تصنع الفارق.',
    vodafoneCash: 'فودافون كاش',
    instaPay: 'انستا باي',
    copy: 'نسخ',
    copied: 'تم النسخ!',
    openInstaPay: 'فتح انستا باي',
    mayAllahReward: 'جزاكم الله خيراً على كرمكم',

    // Religious content
    wordsOfWisdom: 'كلمات الحكمة',

    // Videos
    videosForMen: 'فيديوهات للرجال',
    videosForWomen: 'فيديوهات للنساء',
    islamicLecture: 'محاضرة إسلامية',
    womensLecture: 'محاضرة نسائية',
    watchOnYouTube: 'شاهد على يوتيوب',

    // Quran Section
    holyQuran: 'القرآن الكريم',
    surahs: 'السور',
    verses: 'آيات',
    keyPoints: 'النقاط الرئيسية',
    meccan: 'مكية',
    medinan: 'مدنية',
    share: 'مشاركة',
    readMore: 'اقرأ المزيد',
    surahDetails: 'تفاصيل السورة',
    revelationType: 'نوع الوحي',
    totalVerses: 'عدد الآيات',
    mainThemes: 'المواضيع الرئيسية',

    // Companions Section
    tenPromisedParadise: 'العشرة المبشرون بالجنة',
    keyAchievements: 'الإنجازات الرئيسية',
    title: 'اللقب',
    description: 'الوصف',
    achievements: 'الإنجازات',
    virtues: 'الفضائل',
    viewDetails: 'عرض التفاصيل',
    companionDetails: 'تفاصيل الصحابي',
    earlyLife: 'الحياة المبكرة',
    contributions: 'المساهمات',
    legacy: 'الإرث',

    // Ahadith
    ahadithCollection: 'مجموعة الأحاديث',
    shareThisSection: 'مشاركة هذا القسم',
    scanToShare: 'امسح للمشاركة',

    // Common
    loading: 'جاري التحميل...',
    error: 'خطأ',
    back: 'رجوع',
    next: 'التالي',
    previous: 'السابق',
    search: 'بحث',
    filter: 'تصفية',
    sort: 'ترتيب',
    all: 'الكل',
    more: 'المزيد',
    less: 'أقل',
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ar')

  // On mount, read from localStorage and apply to html element
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('preferredLanguage')
      const lang: Language = (saved === 'en' || saved === 'ar') ? saved : 'ar'
      setLanguage(lang)
    }
  }, [])

  // Apply dir and lang to html element whenever language changes
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
      const translation = translations[language][key as TranslationKeys]
      return translation || key
    } catch {
      console.warn(`Translation missing for key: ${key}`)
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