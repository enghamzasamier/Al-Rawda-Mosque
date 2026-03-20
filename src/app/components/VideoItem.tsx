'use client'

import Image from 'next/image'

interface VideoItemProps {
  id: string
  title: string
  platform: 'youtube' | 'facebook'
  originalUrl: string
}

export default function VideoItem({ id, title, platform, originalUrl }: VideoItemProps) {
  // Use hqdefault for youtube thumbnails
  const thumbnailUrl = platform === 'youtube'
    ? `https://img.youtube.com/vi/${id}/hqdefault.jpg`
    : null

  return (
    <a 
      href={originalUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block w-full h-full cursor-pointer group bg-[#1a1208] overflow-hidden"
      aria-label={`Watch ${title} on ${platform}`}
    >
      {thumbnailUrl ? (
        <Image
          src={thumbnailUrl}
          alt={title}
          fill
          className="object-cover opacity-70 group-hover:opacity-100 transition-all duration-500 scale-105 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      ) : (
        <div className="absolute inset-0 bg-[#2a1f0e] flex items-center justify-center">
           <div className="text-[#c9a84c]/20 islamic-pattern-bg absolute inset-0 opacity-10" />
           <span className="text-[#c9a84c]/40 font-['Cormorant_Garamond'] italic text-sm px-4 text-center">
             {platform === 'facebook' ? 'Watch on Facebook' : 'Watch Video'}
           </span>
        </div>
      )}

      {/* Play Button Overlay - Static */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-16 h-16 rounded-full bg-[#c9a84c]/90 text-[#1a1208] 
                        flex items-center justify-center shadow-2xl transition-all duration-300
                        group-hover:bg-[#e8c97a] group-hover:scale-110">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 ml-1">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      
      {/* Platform Label */}
      <div className="absolute bottom-4 left-0 right-0 text-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-[#fdf8ed] text-[10px] uppercase tracking-widest bg-black/40 py-1.5 inline-block px-4 rounded-full backdrop-blur-sm">
          Open on {platform}
        </p>
      </div>
    </a>
  )
}
