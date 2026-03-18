'use client'

import { useState } from 'react'
import Footer from '../components/Footer'
import { useLanguage } from '../context/LanguageContext'

const surahs = [
  {
    id: 1,
    name: 'Al-Fatiha',
    arabic: 'الفاتحة',
    english: 'The Opening',
    verses: 7,
    type: 'Meccan',
    description: 'The opening chapter of the Quran, recited in every prayer.',
    descriptionAr: 'الفصل الافتتاحي للقرآن، يُتلى في كل صلاة.',
    keyPoints: {
      en: ['Praise of Allah', 'Seeking guidance', 'The straight path'],
      ar: ['الثناء على الله', 'طلب الهداية', 'الصراط المستقيم'],
    },
    themes: {
      en: ['Tawheed (Oneness of Allah)', 'Guidance', 'Worship'],
      ar: ['التوحيد', 'الهداية', 'العبادة'],
    },
  },
  {
    id: 2,
    name: 'Al-Baqarah',
    arabic: 'البقرة',
    english: 'The Cow',
    verses: 286,
    type: 'Medinan',
    description: 'The longest chapter of the Quran, containing various laws and stories.',
    descriptionAr: 'أطول سورة في القرآن، تحتوي على قوانين وقصص متنوعة.',
    keyPoints: {
      en: ['The story of the cow', 'Laws and regulations', 'The story of Adam and Iblis'],
      ar: ['قصة البقرة', 'الأحكام والتشريعات', 'قصة آدم وإبليس'],
    },
    themes: {
      en: ['Faith', 'Law', 'History'],
      ar: ['الإيمان', 'الشريعة', 'التاريخ'],
    },
  },
  {
    id: 3,
    name: 'Al-Imran',
    arabic: 'آل عمران',
    english: 'The Family of Imran',
    verses: 200,
    type: 'Medinan',
    description: 'Discusses the family of Imran and the story of Maryam.',
    descriptionAr: 'تناقش عائلة عمران وقصة مريم.',
    keyPoints: {
      en: ['The family of Imran', 'The story of Maryam', 'The birth of Isa'],
      ar: ['عائلة عمران', 'قصة مريم', 'ولادة عيسى'],
    },
    themes: {
      en: ['Faith', 'Prophets', 'Divine signs'],
      ar: ['الإيمان', 'الأنبياء', 'الآيات الإلهية'],
    },
  },
  {
    id: 4,
    name: 'An-Nisa',
    arabic: 'النساء',
    english: 'The Women',
    verses: 176,
    type: 'Medinan',
    description: 'Contains many laws regarding women and family matters.',
    descriptionAr: 'تحتوي على العديد من القوانين المتعلقة بالنساء وشؤون الأسرة.',
    keyPoints: {
      en: ["Women's rights", 'Family laws', 'Inheritance'],
      ar: ['حقوق المرأة', 'قوانين الأسرة', 'الميراث'],
    },
    themes: {
      en: ['Social justice', 'Family', 'Rights'],
      ar: ['العدالة الاجتماعية', 'الأسرة', 'الحقوق'],
    },
  },
  {
    id: 5,
    name: "Al-Ma'idah",
    arabic: 'المائدة',
    english: 'The Table Spread',
    verses: 120,
    type: 'Medinan',
    description: 'Discusses food laws and the story of the table spread.',
    descriptionAr: 'تناقش قوانين الطعام وقصة المائدة.',
    keyPoints: {
      en: ['Food laws', 'The story of the table spread', 'Covenants and agreements'],
      ar: ['أحكام الطعام', 'قصة المائدة', 'العهود والاتفاقيات'],
    },
    themes: {
      en: ['Law', 'Covenant', 'Faith'],
      ar: ['الشريعة', 'العهد', 'الإيمان'],
    },
  },
]

export default function QuranPage() {
  const [selectedSurah, setSelectedSurah] = useState(surahs[0])
  const [searchTerm, setSearchTerm] = useState('')
  const { language, t } = useLanguage()
  const isRTL = language === 'ar'

  const filteredSurahs = surahs.filter(surah =>
    surah.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    surah.arabic.includes(searchTerm) ||
    surah.english.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className={`min-h-screen flex flex-col bg-[#fdf8ed] ${isRTL ? "font-['Amiri']" : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <main className="max-w-7xl mx-auto px-4 py-8 flex-grow w-full">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl mb-3 font-['Cormorant_Garamond'] text-[#2a1f0e]">
            {t('holyQuran')}
          </h1>
          <div className="arabic-calligraphy mb-2 text-3xl">
            {isRTL ? 'القرآن الكريم' : 'القُرْآن الكَرِيم'}
          </div>
          <div className="w-16 h-px bg-[#c9a84c] mx-auto mt-4" />
        </div>

        {/* Mobile Selector */}
        <div className="md:hidden mb-8">
          <div className="bg-white rounded-2xl shadow-md border border-[#c9a84c]/20 p-4">
            <h2 className="text-xl font-semibold mb-4 text-center text-[#2a1f0e]">{t('surahs')}</h2>
            <input
              type="text"
              placeholder={t('search')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 mb-3 border border-[#c9a84c]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a84c] bg-[#fdf8ed]"
            />
            <select
              value={selectedSurah.id}
              onChange={(e) => {
                const s = surahs.find(s => s.id === parseInt(e.target.value))
                if (s) setSelectedSurah(s)
              }}
              className="w-full p-3 border border-[#c9a84c]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a84c] bg-[#fdf8ed]"
            >
              {filteredSurahs.map((surah) => (
                <option key={surah.id} value={surah.id}>
                  {language === 'en' ? surah.name : surah.arabic} — {surah.verses} {t('verses')}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar list */}
          <div className="hidden md:block lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white rounded-2xl shadow-md border border-[#c9a84c]/20 p-4">
                <input
                  type="text"
                  placeholder={t('search')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-2 mb-4 border border-[#c9a84c]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a84c] bg-[#fdf8ed] text-[#2a1f0e]"
                />
                <h2 className="text-xl font-semibold mb-3 text-center text-[#2a1f0e]">{t('surahs')}</h2>
                <div className="space-y-1.5 max-h-[65vh] overflow-y-auto pr-1">
                  {filteredSurahs.map((surah) => (
                    <button
                      key={surah.id}
                      onClick={() => setSelectedSurah(surah)}
                      className={`w-full text-right p-3 rounded-xl transition-all ${
                        selectedSurah.id === surah.id
                          ? 'bg-[#c9a84c] text-[#1a1208] font-semibold'
                          : 'hover:bg-[#c9a84c]/10 text-[#2a1f0e]'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-base font-['Amiri']">{surah.arabic}</span>
                        <span className="text-sm">{surah.name}</span>
                      </div>
                      <div className="flex justify-between items-center mt-1 opacity-70 text-xs">
                        <span>{surah.english}</span>
                        <span>{surah.verses} {t('verses')}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-md border border-[#c9a84c]/20 p-8">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-['Cormorant_Garamond'] mb-3 text-[#2a1f0e]">
                  {selectedSurah.name}
                </h2>
                <p className="text-3xl font-['Amiri'] mb-4 text-[#c9a84c]">
                  {selectedSurah.arabic}
                </p>
                <div className="flex justify-center gap-3 text-sm text-[#2a1f0e]/60 flex-wrap">
                  <span>{selectedSurah.english}</span>
                  <span>•</span>
                  <span>{selectedSurah.verses} {t('verses')}</span>
                  <span>•</span>
                  <span>{t(selectedSurah.type.toLowerCase())}</span>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-[#fdf8ed] p-6 rounded-xl border border-[#c9a84c]/10">
                  <h3 className="text-xl font-semibold mb-3 text-[#2a1f0e]">{t('description')}</h3>
                  <p className="text-[#2a1f0e]/70 leading-relaxed">
                    {language === 'en' ? selectedSurah.description : selectedSurah.descriptionAr}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-[#fdf8ed] p-6 rounded-xl border border-[#c9a84c]/10">
                    <h3 className="text-xl font-semibold mb-3 text-[#2a1f0e]">{t('keyPoints')}</h3>
                    <ul className="space-y-2">
                      {selectedSurah.keyPoints[language].map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-[#2a1f0e]/70">
                          <span className="text-[#c9a84c] mt-0.5">◆</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#fdf8ed] p-6 rounded-xl border border-[#c9a84c]/10">
                    <h3 className="text-xl font-semibold mb-3 text-[#2a1f0e]">{t('mainThemes')}</h3>
                    <ul className="space-y-2">
                      {selectedSurah.themes[language]?.map((theme, i) => (
                        <li key={i} className="flex items-start gap-2 text-[#2a1f0e]/70">
                          <span className="text-[#c9a84c] mt-0.5">◆</span>
                          {theme}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}