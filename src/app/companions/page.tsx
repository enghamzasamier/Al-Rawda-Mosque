'use client'

import { useState } from 'react'
import Footer from '../components/Footer'
import { useLanguage } from '../context/LanguageContext'

const companions = [
  {
    id: 1,
    name: 'Abu Bakr',
    arabic: 'أبو بكر الصديق',
    title: 'The Truthful',
    titleAr: 'الصديق',
    description: 'The first Caliph and closest companion of Prophet Muhammad (peace be upon him).',
    descriptionAr: 'الخليفة الأول وأقرب صحابي للنبي محمد (صلى الله عليه وسلم).',
    achievements: {
      en: ['First Caliph of Islam', 'Led the Muslim community after Prophet Muhammad', 'Compiled the Quran into a single book', 'Known for his unwavering faith and loyalty'],
      ar: ['أول خليفة في الإسلام', 'قاد المجتمع المسلم بعد النبي محمد', 'جمع القرآن في كتاب واحد', 'معروف بإيمانه وولائه الثابت'],
    },
    virtues: {
      en: ['Extreme generosity', 'Deep knowledge of Islam', 'Exceptional leadership', 'Unwavering faith'],
      ar: ['الكرم الشديد', 'المعرفة العميقة بالإسلام', 'القيادة الاستثنائية', 'الإيمان الثابت'],
    },
  },
  {
    id: 2,
    name: 'Umar ibn Al-Khattab',
    arabic: 'عمر بن الخطاب',
    title: 'The Just',
    titleAr: 'الفاروق',
    description: 'The second Caliph known for his justice and strong leadership.',
    descriptionAr: 'الخليفة الثاني المعروف بعدله وقيادته القوية.',
    achievements: {
      en: ['Second Caliph of Islam', 'Expanded Islamic territories', 'Established the Islamic calendar', 'Created the first Islamic treasury'],
      ar: ['ثاني خليفة في الإسلام', 'وسع الأراضي الإسلامية', 'أسس التقويم الهجري', 'أنشأ أول بيت مال للمسلمين'],
    },
    virtues: {
      en: ['Justice and fairness', 'Strong leadership', 'Deep wisdom', 'Fear of Allah'],
      ar: ['العدل والإنصاف', 'القيادة القوية', 'الحكمة العميقة', 'الخوف من الله'],
    },
  },
  {
    id: 3,
    name: 'Uthman ibn Affan',
    arabic: 'عثمان بن عفان',
    title: 'The Possessor of Two Lights',
    titleAr: 'ذو النورين',
    description: 'The third Caliph known for his generosity and compilation of the Quran.',
    descriptionAr: 'الخليفة الثالث المعروف بكرمه وجمعه للقرآن.',
    achievements: {
      en: ['Third Caliph of Islam', 'Standardized the Quran', "Expanded the Prophet's Mosque", 'Known for his generosity'],
      ar: ['ثالث خليفة في الإسلام', 'وحد نسخ القرآن', 'وسع المسجد النبوي', 'معروف بكرمه'],
    },
    virtues: {
      en: ['Extreme generosity', 'Modesty and humility', 'Strong faith', 'Love for the Quran'],
      ar: ['الكرم الشديد', 'التواضع', 'الإيمان القوي', 'حب القرآن'],
    },
  },
  {
    id: 4,
    name: 'Ali ibn Abi Talib',
    arabic: 'علي بن أبي طالب',
    title: 'The Lion of Allah',
    titleAr: 'أسد الله',
    description: 'The fourth Caliph and cousin of Prophet Muhammad (peace be upon him).',
    descriptionAr: 'الخليفة الرابع وابن عم النبي محمد (صلى الله عليه وسلم).',
    achievements: {
      en: ['Fourth Caliph of Islam', 'First male to accept Islam', 'Known for his bravery in battle', 'Famous for his wisdom and knowledge'],
      ar: ['رابع خليفة في الإسلام', 'أول ذكر يعتنق الإسلام', 'معروف بشجاعته في المعارك', 'مشهور بحكمته ومعرفته'],
    },
    virtues: {
      en: ['Bravery and courage', 'Deep knowledge', 'Justice and fairness', 'Strong faith'],
      ar: ['الشجاعة والجرأة', 'المعرفة العميقة', 'العدل والإنصاف', 'الإيمان القوي'],
    },
  },
  {
    id: 5,
    name: 'Talha ibn Ubaydullah',
    arabic: 'طلحة بن عبيد الله',
    title: 'The Generous',
    titleAr: 'الكريم',
    description: 'Known for his generosity and bravery in battle.',
    descriptionAr: 'معروف بكرمه وشجاعته في المعارك.',
    achievements: {
      en: ['One of the first converts to Islam', 'Participated in all major battles', 'Known for his generosity', 'Protected Prophet Muhammad in battle'],
      ar: ['أحد أوائل المسلمين', 'شارك في جميع المعارك الكبرى', 'معروف بكرمه', 'حمى النبي محمد في المعارك'],
    },
    virtues: {
      en: ['Generosity', 'Bravery', 'Loyalty', 'Strong faith'],
      ar: ['الكرم', 'الشجاعة', 'الولاء', 'الإيمان القوي'],
    },
  },
  {
    id: 6,
    name: 'Zubayr ibn Al-Awwam',
    arabic: 'الزبير بن العوام',
    title: 'The Disciple',
    titleAr: 'الحواري',
    description: 'Known for his bravery and loyalty to Islam.',
    descriptionAr: 'معروف بشجاعته وولائه للإسلام.',
    achievements: {
      en: ['One of the first converts to Islam', 'Participated in all major battles', 'Known for his bravery', 'Strong supporter of the Prophet'],
      ar: ['أحد أوائل المسلمين', 'شارك في جميع المعارك الكبرى', 'معروف بشجاعته', 'داعم قوي للنبي'],
    },
    virtues: {
      en: ['Bravery', 'Loyalty', 'Strong faith', 'Generosity'],
      ar: ['الشجاعة', 'الولاء', 'الإيمان القوي', 'الكرم'],
    },
  },
  {
    id: 7,
    name: 'Abdur-Rahman ibn Awf',
    arabic: 'عبد الرحمن بن عوف',
    title: 'The Wealthy',
    titleAr: 'الغني',
    description: 'Known for his wealth and generosity in the cause of Allah.',
    descriptionAr: 'معروف بثروته وكرمه في سبيل الله.',
    achievements: {
      en: ['One of the first converts to Islam', 'Known for his business acumen', 'Extremely generous with his wealth', 'Participated in all major battles'],
      ar: ['أحد أوائل المسلمين', 'معروف بمهاراته التجارية', 'كريم جداً بثروته', 'شارك في جميع المعارك الكبرى'],
    },
    virtues: {
      en: ['Generosity', 'Business acumen', 'Strong faith', 'Loyalty'],
      ar: ['الكرم', 'الحنكة التجارية', 'الإيمان القوي', 'الولاء'],
    },
  },
  {
    id: 8,
    name: "Sa'd ibn Abi Waqqas",
    arabic: 'سعد بن أبي وقاص',
    title: 'The Lion',
    titleAr: 'الأسد',
    description: 'Known for his bravery and archery skills.',
    descriptionAr: 'معروف بشجاعته ومهاراته في الرماية.',
    achievements: {
      en: ['One of the first converts to Islam', 'Excellent archer', 'Led Muslim armies to victory', 'Participated in all major battles'],
      ar: ['أحد أوائل المسلمين', 'رامٍ ممتاز', 'قاد الجيوش الإسلامية للنصر', 'شارك في جميع المعارك الكبرى'],
    },
    virtues: {
      en: ['Bravery', 'Archery skills', 'Leadership', 'Strong faith'],
      ar: ['الشجاعة', 'مهارات الرماية', 'القيادة', 'الإيمان القوي'],
    },
  },
  {
    id: 9,
    name: 'Said ibn Zayd',
    arabic: 'سعيد بن زيد',
    title: 'The Righteous',
    titleAr: 'الصالح',
    description: 'Known for his righteousness and early conversion to Islam.',
    descriptionAr: 'معروف بصلاحه واعتناقه المبكر للإسلام.',
    achievements: {
      en: ['One of the first converts to Islam', 'Participated in all major battles', 'Known for his righteousness', 'Strong supporter of the Prophet'],
      ar: ['أحد أوائل المسلمين', 'شارك في جميع المعارك الكبرى', 'معروف بصلاحه', 'داعم قوي للنبي'],
    },
    virtues: {
      en: ['Righteousness', 'Strong faith', 'Loyalty', 'Bravery'],
      ar: ['الصلاح', 'الإيمان القوي', 'الولاء', 'الشجاعة'],
    },
  },
  {
    id: 10,
    name: 'Abu Ubaydah ibn Al-Jarrah',
    arabic: 'أبو عبيدة بن الجراح',
    title: 'The Trustworthy',
    titleAr: 'الأمين',
    description: 'Known for his trustworthiness and leadership.',
    descriptionAr: 'معروف بأمانته وقيادته.',
    achievements: {
      en: ['One of the first converts to Islam', 'Led Muslim armies to victory', 'Known for his trustworthiness', 'Participated in all major battles'],
      ar: ['أحد أوائل المسلمين', 'قاد الجيوش الإسلامية للنصر', 'معروف بأمانته', 'شارك في جميع المعارك الكبرى'],
    },
    virtues: {
      en: ['Trustworthiness', 'Leadership', 'Strong faith', 'Bravery'],
      ar: ['الأمانة', 'القيادة', 'الإيمان القوي', 'الشجاعة'],
    },
  },
]

export default function CompanionsPage() {
  const [selectedCompanion, setSelectedCompanion] = useState(companions[0])
  const [searchTerm, setSearchTerm] = useState('')
  const { language, t } = useLanguage()
  const isRTL = language === 'ar'

  const filteredCompanions = companions.filter(companion =>
    companion.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    companion.arabic.includes(searchTerm) ||
    companion.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className={`min-h-screen flex flex-col bg-[#fdf8ed] ${isRTL ? "font-['Amiri']" : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <main className="max-w-7xl mx-auto px-4 py-8 flex-grow w-full">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl mb-3 font-['Cormorant_Garamond'] text-[#2a1f0e]">
            {t('companions')}
          </h1>
          <div className="arabic-calligraphy mb-2 text-3xl">
            {isRTL ? 'العشرة المبشرون بالجنة' : 'العَشَرة المُبَشَّرون بالجَنّة'}
          </div>
          <p className="text-[#2a1f0e]/60 mt-2">
            {isRTL ? '' : t('tenPromisedParadise')}
          </p>
          <div className="w-16 h-px bg-[#c9a84c] mx-auto mt-4" />
        </div>

        {/* Mobile Dropdown Selector */}
        <div className="md:hidden mb-8">
          <div className="bg-white rounded-2xl shadow-md border border-[#c9a84c]/20 p-4">
            <input
              type="text"
              placeholder={t('search')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 mb-3 border border-[#c9a84c]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a84c] bg-[#fdf8ed]"
            />
            <select
              value={selectedCompanion.id}
              onChange={(e) => {
                const c = companions.find(c => c.id === parseInt(e.target.value))
                if (c) setSelectedCompanion(c)
              }}
              className="w-full p-3 border border-[#c9a84c]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a84c] bg-[#fdf8ed]"
            >
              {filteredCompanions.map((companion) => (
                <option key={companion.id} value={companion.id}>
                  {language === 'en' ? companion.name : companion.arabic} — {language === 'en' ? companion.title : companion.titleAr}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* List */}
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
                <h2 className="text-lg font-semibold mb-3 text-center text-[#2a1f0e]">{t('companions')}</h2>
                <div className="space-y-1.5 max-h-[65vh] overflow-y-auto pr-1">
                  {filteredCompanions.map((companion) => (
                    <button
                      key={companion.id}
                      onClick={() => setSelectedCompanion(companion)}
                      className={`w-full text-right p-3 rounded-xl transition-all ${
                        selectedCompanion.id === companion.id
                          ? 'bg-[#c9a84c] text-[#1a1208] font-semibold'
                          : 'hover:bg-[#c9a84c]/10 text-[#2a1f0e]'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-['Amiri'] text-base">{companion.arabic}</span>
                        <span className="text-sm">{companion.name}</span>
                      </div>
                      <div className="text-xs opacity-70 mt-0.5 text-right">
                        {language === 'en' ? companion.title : companion.titleAr}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Detail */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-md border border-[#c9a84c]/20 p-8">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-['Cormorant_Garamond'] mb-3 text-[#2a1f0e]">
                  {selectedCompanion.name}
                </h2>
                <p className="text-3xl font-['Amiri'] mb-2 text-[#c9a84c]">
                  {selectedCompanion.arabic}
                </p>
                <div className="inline-block px-4 py-1 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#c9a84c] text-sm font-medium">
                  {language === 'en' ? selectedCompanion.title : selectedCompanion.titleAr}
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-[#fdf8ed] p-6 rounded-xl border border-[#c9a84c]/10">
                  <h3 className="text-xl font-semibold mb-3 text-[#2a1f0e]">{t('description')}</h3>
                  <p className="text-[#2a1f0e]/70 leading-relaxed">
                    {language === 'en' ? selectedCompanion.description : selectedCompanion.descriptionAr}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-[#fdf8ed] p-6 rounded-xl border border-[#c9a84c]/10">
                    <h3 className="text-xl font-semibold mb-3 text-[#2a1f0e]">{t('achievements')}</h3>
                    <ul className="space-y-2">
                      {selectedCompanion.achievements[language].map((a, i) => (
                        <li key={i} className="flex items-start gap-2 text-[#2a1f0e]/70 text-sm">
                          <span className="text-[#c9a84c] mt-0.5 flex-shrink-0">◆</span>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#fdf8ed] p-6 rounded-xl border border-[#c9a84c]/10">
                    <h3 className="text-xl font-semibold mb-3 text-[#2a1f0e]">{t('virtues')}</h3>
                    <ul className="space-y-2">
                      {selectedCompanion.virtues[language].map((v, i) => (
                        <li key={i} className="flex items-start gap-2 text-[#2a1f0e]/70 text-sm">
                          <span className="text-[#c9a84c] mt-0.5 flex-shrink-0">◆</span>
                          {v}
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