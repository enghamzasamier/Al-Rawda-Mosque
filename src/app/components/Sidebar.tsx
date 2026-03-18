'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useLanguage } from '../context/LanguageContext'

const sections = [
  {
    name: 'home',
    path: '/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198c.03-.028.061-.056.091-.086L12 5.43z" />
      </svg>
    ),
  },
  {
    name: 'videos',
    path: '/videos',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
      </svg>
    ),
  },
  {
    name: 'quran',
    path: '/quran',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
      </svg>
    ),
  },
  {
    name: 'companions',
    path: '/companions',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
      </svg>
    ),
  },
  {
    name: 'ahadith',
    path: '/ahadith',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z" clipRule="evenodd" />
      </svg>
    ),
  },
]

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname()
  const { language, toggleLanguage } = useLanguage()
  const isRTL = language === 'ar'

  // Close sidebar on route change
  useEffect(() => {
    onClose()
  }, [pathname])

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="sidebar-overlay animate-overlay-fade lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar panel */}
      <aside
        className={`
          fixed top-0 ${isRTL ? 'right-0' : 'left-0'} h-full w-64 z-50
          bg-[#1a1208] border-r border-[#c9a84c]/20
          flex flex-col
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : (isRTL ? 'translate-x-full' : '-translate-x-full')}
          lg:translate-x-0
        `}
        aria-label="Navigation sidebar"
      >
        {/* Sidebar Header */}
        <div className="flex flex-col items-center py-8 px-4 border-b border-[#c9a84c]/20">
          <Link href="/" onClick={onClose} className="flex flex-col items-center gap-3">
            <div className="relative w-16 h-16">
              <Image
                src="/images/logo.avif"
                alt="Al-Rawda Mosque Logo"
                fill
                className="object-contain"
                sizes="64px"
                priority
              />
            </div>
            <span
              className="text-[#c9a84c] font-['Cormorant_Garamond'] text-lg font-bold text-center leading-tight"
            >
              {language === 'ar' ? 'مسجد الروضة' : 'Al-Rawda Mosque'}
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto" dir={isRTL ? 'rtl' : 'ltr'}>
          {sections.map((section) => {
            const isActive = pathname === section.path ||
              (section.path !== '/' && pathname.startsWith(section.path))
            return (
              <Link
                key={section.path}
                href={section.path}
                className={`sidebar-link ${isActive ? 'active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                <span className="flex-shrink-0">{section.icon}</span>
                <span className="text-sm font-medium">
                  {language === 'ar'
                    ? section.name === 'home' ? 'الرئيسية'
                    : section.name === 'videos' ? 'الفيديوهات'
                    : section.name === 'quran' ? 'القرآن'
                    : section.name === 'companions' ? 'الصحابة'
                    : 'الأحاديث'
                    : section.name.charAt(0).toUpperCase() + section.name.slice(1)
                  }
                </span>
              </Link>
            )
          })}
        </nav>

        {/* Language Toggle at bottom */}
        <div className="p-4 border-t border-[#c9a84c]/20">
          <button
            onClick={toggleLanguage}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl
                       bg-[#c9a84c]/10 hover:bg-[#c9a84c]/20 border border-[#c9a84c]/30
                       text-[#c9a84c] transition-all duration-200 text-sm font-medium"
            aria-label="Toggle language"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M9 2.25a.75.75 0 01.75.75v1.506a49.38 49.38 0 015.343.371.75.75 0 11-.186 1.489c-.66-.083-1.323-.151-1.99-.206a18.67 18.67 0 01-2.969 6.323c.317.384.65.753.998 1.107a.75.75 0 11-1.07 1.052A18.772 18.772 0 019 13.545a18.842 18.842 0 01-5.444 4.19.75.75 0 10-.612 1.37A20.342 20.342 0 009 14.544V19.5a.75.75 0 01-1.5 0V13.09a19.208 19.208 0 01-4.99-5.11.75.75 0 011.2-.9A17.712 17.712 0 009 11.977V3a.75.75 0 01.75-.75zm4.858 2.538a.75.75 0 01.882.11l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72h-3.9a.75.75 0 010-1.5h3.9l-1.72-1.72a.75.75 0 01.178-.89z" clipRule="evenodd" />
            </svg>
            {language === 'en' ? 'عربي' : 'English'}
          </button>
        </div>
      </aside>
    </>
  )
}

// Top navbar for mobile with logo in center, hamburger on one side, lang on other
export function TopNavbar({ onMenuToggle, isOpen }: { onMenuToggle: () => void, isOpen: boolean }) {
  const { language, toggleLanguage } = useLanguage()
  const isRTL = language === 'ar'

  return (
    <header
      className="lg:hidden fixed top-0 left-0 right-0 z-30 h-16
                 bg-[#1a1208] border-b border-[#c9a84c]/20
                 flex items-center justify-between px-4"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Hamburger - start side */}
      <button
        onClick={onMenuToggle}
        className="w-10 h-10 flex items-center justify-center rounded-xl
                   text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-colors"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Logo - center */}
      <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center">
        <div className="relative w-10 h-10">
          <Image
            src="/images/logo.avif"
            alt="Al-Rawda Mosque"
            fill
            className="object-contain"
            sizes="40px"
            priority
          />
        </div>
      </Link>

      {/* Language icon - end side */}
      <button
        onClick={toggleLanguage}
        className="w-10 h-10 flex items-center justify-center rounded-xl
                   text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-colors text-sm font-bold"
        aria-label="Toggle language"
      >
        {language === 'en' ? 'ع' : 'EN'}
      </button>
    </header>
  )
}
