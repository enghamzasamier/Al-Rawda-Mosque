'use client'

import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import QRCodeComponent from './QRCode'

const INSTAPAY_URL = 'https://ipn.eg/S/khaledyosry87/instapay/7dZCSC'

export default function DonationSection() {
  const [copied, setCopied] = useState(false)
  const { language, t } = useLanguage()
  const isRTL = language === 'ar'
  const vodafoneCashNumber = '+20 102 470 5502'

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(vodafoneCashNumber)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-16 px-4 bg-[#fdf8ed]" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl mb-4 font-['Cormorant_Garamond'] text-[#2a1f0e]">
            {t('supportMosque')}
          </h2>
          <div className="w-16 h-px bg-[#c9a84c] mx-auto mb-6" />
          <div className="arabic-calligraphy mb-6 text-3xl">
            الصدقة تطفئ الخطيئة كما يطفئ الماء النار
          </div>
          <p className="text-base text-[#2a1f0e]/60 italic mb-2">
            Charity extinguishes sin as water extinguishes fire
          </p>
          <p className="text-lg text-[#2a1f0e]/70 max-w-2xl mx-auto leading-relaxed mt-4">
            {t('donationText')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Vodafone Cash */}
          <div className="bg-white rounded-2xl p-6 border border-[#c9a84c]/20 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#2a1f0e] mb-4">
              {t('vodafoneCash')}
            </h3>
            <div className="flex items-center gap-3">
              <span className="text-base font-mono text-[#2a1f0e] bg-[#fdf8ed] border border-[#c9a84c]/20 px-3 py-2 rounded-lg flex-1 text-center">
                {vodafoneCashNumber}
              </span>
              <button
                onClick={handleCopyNumber}
                className="btn-primary text-sm py-2 px-4 whitespace-nowrap"
                aria-label="Copy Vodafone Cash number"
              >
                {copied ? t('copied') : t('copy')}
              </button>
            </div>
          </div>

          {/* InstaPay */}
          <div className="bg-white rounded-2xl p-6 border border-[#c9a84c]/20 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center">
            <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#2a1f0e] mb-4 self-start">
              {t('instaPay')}
            </h3>
            <QRCodeComponent url={INSTAPAY_URL} size={120} />
            <p className="text-xs text-[#2a1f0e]/50 mt-2 mb-3">
              {language === 'ar' ? 'امسح للدفع' : 'Scan to pay'}
            </p>
            <a
              href={INSTAPAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary block text-center w-full"
              aria-label="Open InstaPay link"
            >
              {t('openInstaPay')}
            </a>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-[#2a1f0e]/60">{t('mayAllahReward')}</p>
          <div className="arabic-calligraphy mt-3 text-3xl">جزاكم الله خيراً</div>
        </div>
      </div>
    </section>
  )
}