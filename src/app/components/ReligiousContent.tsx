'use client'

import { useLanguage } from '../context/LanguageContext'

const religiousContent = [
  {
    type: 'quran',
    typeLabel: { en: 'Quranic Verse', ar: 'آية قرآنية' },
    arabic: 'إِنَّمَا الصَّدَقَاتُ لِلْفُقَرَاءِ وَالْمَسَاكِينِ وَالْعَامِلِينَ عَلَيْهَا وَالْمُؤَلَّفَةِ قُلُوبُهُمْ وَفِي الرِّقَابِ وَالْغَارِمِينَ وَفِي سَبِيلِ اللَّهِ وَابْنِ السَّبِيلِ فَرِيضَةً مِنَ اللَّهِ وَاللَّهُ عَلِيمٌ حَكِيمٌ',
    translation: 'Charities are only for the poor and the needy, and those who collect them, and those whose hearts are to be reconciled, and to free the captives and the debtors, and for the cause of Allah, and for the wayfarer; a duty imposed by Allah. Allah is Knower, Wise.',
    reference: 'القرآن 9:60',
  },
  {
    type: 'hadith',
    typeLabel: { en: 'Hadith', ar: 'حديث شريف' },
    arabic: 'مَثَلُ الَّذِينَ يُنْفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنْبَتَتْ سَبْعَ سَنَابِلَ فِي كُلِّ سُنْبُلَةٍ مِائَةُ حَبَّةٍ وَاللَّهُ يُضَاعِفُ لِمَنْ يَشَاءُ',
    translation: 'The example of those who spend their wealth in the way of Allah is like a seed which grows seven spikes, in each spike is a hundred grains. And Allah multiplies His reward for whom He wills.',
    reference: 'صحيح البخاري 1413',
  },
  {
    type: 'quran',
    typeLabel: { en: 'Quranic Verse', ar: 'آية قرآنية' },
    arabic: 'وَمَا تُنْفِقُوا مِنْ خَيْرٍ يُوَفَّ إِلَيْكُمْ وَأَنْتُمْ لَا تُظْلَمُونَ',
    translation: 'And whatever you spend in good, it will be repaid to you in full, and you will not be wronged.',
    reference: 'القرآن 2:272',
  },
]

export default function ReligiousContent() {
  const { language, t } = useLanguage()
  const isRTL = language === 'ar'

  return (
    <section className="py-16 px-4 bg-[#2a1f0e]" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl mb-3 font-['Cormorant_Garamond'] text-[#fdf8ed]">
            Words of Wisdom
          </h2>
          <div className="arabic-calligraphy text-3xl mb-1">الحكمة ضالة المؤمن</div>
          <p className="text-[#fdf8ed]/40 text-sm italic">Wisdom is the lost property of the believer</p>
          <div className="w-16 h-px bg-[#c9a84c]/50 mx-auto mt-5" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {religiousContent.map((content, index) => (
            <div
              key={index}
              className="bg-[#1a1208] rounded-2xl p-6 border border-[#c9a84c]/20
                         hover:border-[#c9a84c]/50 transition-all duration-300
                         hover:shadow-[0_0_20px_rgba(201,168,76,0.08)]
                         flex flex-col"
            >
              {/* Type badge - bilingual */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-medium
                                 bg-[#c9a84c]/10 text-[#c9a84c] border border-[#c9a84c]/20">
                  {content.typeLabel.ar}
                </span>
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-medium
                                 bg-[#c9a84c]/10 text-[#c9a84c] border border-[#c9a84c]/20 capitalize">
                  {content.typeLabel.en}
                </span>
              </div>

              {/* Arabic text - always shown */}
              <p className="font-['Amiri'] text-xl mb-4 text-right text-[#fdf8ed]/90 leading-relaxed flex-1" dir="rtl">
                {content.arabic}
              </p>

              <div className="w-8 h-px bg-[#c9a84c]/25 mb-4" />

              {/* English translation - always shown */}
              <p className="text-[#fdf8ed]/55 text-sm mb-4 leading-relaxed" dir="ltr">
                {content.translation}
              </p>

              {/* Reference */}
              <p className="text-xs text-[#c9a84c]/70 font-medium self-end">{content.reference}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}