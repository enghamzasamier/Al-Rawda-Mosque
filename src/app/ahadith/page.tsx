'use client'

import { useState } from 'react'
import Footer from '../components/Footer'
import { useLanguage } from '../context/LanguageContext'

const ahadithCategories = [
  {
    id: 'charity',
    titleEn: 'Charity',
    titleAr: 'الصدقة',
    ahadith: [
      {
        arabic: 'مَثَلُ الَّذِينَ يُنْفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنْبَتَتْ سَبْعَ سَنَابِلَ فِي كُلِّ سُنْبُلَةٍ مِائَةُ حَبَّةٍ وَاللَّهُ يُضَاعِفُ لِمَنْ يَشَاءُ',
        translation: 'The example of those who spend their wealth in the way of Allah is like a seed which grows seven spikes, in each spike is a hundred grains. And Allah multiplies His reward for whom He wills.',
        reference: 'صحيح البخاري 1413',
      },
      {
        arabic: 'الصَّدَقَةُ تَدْفَعُ مِيتَةَ السُّوءِ',
        translation: 'Charity wards off an evil death.',
        reference: 'سنن الترمذي 664',
      },
    ],
  },
  {
    id: 'knowledge',
    titleEn: 'Knowledge',
    titleAr: 'العلم',
    ahadith: [
      {
        arabic: 'طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ',
        translation: 'Seeking knowledge is obligatory upon every Muslim.',
        reference: 'سنن ابن ماجه 224',
      },
      {
        arabic: 'مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ',
        translation: 'Whoever takes a path in search of knowledge, Allah will make easy for him a path to Paradise.',
        reference: 'صحيح مسلم 2699',
      },
    ],
  },
  {
    id: 'manners',
    titleEn: 'Good Manners',
    titleAr: 'الأدب',
    ahadith: [
      {
        arabic: 'إِنَّمَا بُعِثْتُ لِأُتَمِّمَ مَكَارِمَ الْأَخْلَاقِ',
        translation: 'I was sent to perfect good character.',
        reference: 'مسند أحمد 8729',
      },
      {
        arabic: 'الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ',
        translation: 'A Muslim is one from whose tongue and hand the Muslims are safe.',
        reference: 'صحيح البخاري 10',
      },
    ],
  },
]

export default function AhadithPage() {
  const [selectedCategory, setSelectedCategory] = useState(ahadithCategories[0])
  const { language, t } = useLanguage()
  const isRTL = language === 'ar'

  return (
    <div className={`min-h-screen flex flex-col bg-[#fdf8ed] ${isRTL ? "font-['Amiri']" : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <main className="max-w-5xl mx-auto px-4 py-8 flex-grow w-full">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl mb-3 font-['Cormorant_Garamond'] text-[#2a1f0e]">
            {t('ahadithCollection')}
          </h1>
          <div className="arabic-calligraphy mb-2 text-3xl">
            أحاديث النبي ﷺ
          </div>
          <div className="w-16 h-px bg-[#c9a84c] mx-auto mt-4" />
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {ahadithCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-xl font-medium transition-all duration-200 ${
                selectedCategory.id === category.id
                  ? 'bg-[#c9a84c] text-[#1a1208] shadow-md'
                  : 'bg-white text-[#2a1f0e] border border-[#c9a84c]/30 hover:border-[#c9a84c] hover:bg-[#c9a84c]/10'
              }`}
            >
              {isRTL ? category.titleAr : category.titleEn}
            </button>
          ))}
        </div>

        {/* Hadith cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {selectedCategory.ahadith.map((hadith, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-[#c9a84c]/20 p-6
                         hover:border-[#c9a84c]/50 hover:shadow-lg transition-all duration-300"
            >
              {/* Arabic text */}
              <div className="font-['Amiri'] text-xl mb-4 text-right leading-relaxed text-[#2a1f0e]/90" dir="rtl">
                {hadith.arabic}
              </div>

              <div className="w-8 h-px bg-[#c9a84c]/30 mb-4" />

              {/* Translation (only in English mode) */}
              {language === 'en' && (
                <p className="text-[#2a1f0e]/60 text-sm mb-4 leading-relaxed">
                  {hadith.translation}
                </p>
              )}

              {/* Reference */}
              <p className="text-xs text-[#c9a84c] font-medium">
                {hadith.reference}
              </p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}