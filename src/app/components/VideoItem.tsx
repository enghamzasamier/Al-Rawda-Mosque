'use client'

import { useState } from 'react'
import Image from 'next/image'

interface VideoItemProps {
  id: string
  title: string
  platform: 'youtube' | 'facebook'
  originalUrl: string
}

export default function VideoItem({ id, title, platform, originalUrl }: VideoItemProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  // Use hqdefault as fallback if maxresdefault is not available for youtube
  const thumbnailUrl = platform === 'youtube'
    ? `https://img.youtube.com/vi/${id}/hqdefault.jpg`
    : null // FB thumbnails are harder to get without access token, we can use a placeholder or local asset

  const handlePlay = () => {
    setIsPlaying(true)
  }

  if (isPlaying) {
    let embedUrl = ''
    if (platform === 'youtube') {
      embedUrl = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`
    } else {
      // Facebook embed
      embedUrl = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(originalUrl)}&autoplay=1&show_text=0&width=560`
    }

    return (
      <div className="w-full h-full">
        <iframe
          src={embedUrl}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
        />
      </div>
    )
  }

  return (
    <div 
      className="relative w-full h-full cursor-pointer group bg-[#1a1208] flex items-center justify-center"
      onClick={handlePlay}
    >
      {thumbnailUrl ? (
        <Image
          src={thumbnailUrl}
          alt={title}
          fill
          className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 scale-105 group-hover:scale-100"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      ) : (
        // Placeholder for Facebook or when thumbnail fails
        <div className="absolute inset-0 bg-[#2a1f0e] flex items-center justify-center">
           <div className="text-[#c9a84c]/20 islamic-pattern-bg absolute inset-0 opacity-10" />
           <span className="text-[#c9a84c]/40 font-['Cormorant_Garamond'] italic text-sm px-4 text-center">
             {platform === 'facebook' ? 'Facebook Video Content' : 'Video content'}
           </span>
        </div>
      )}

      {/* Play Button Overlay */}
      <div className="relative z-10 w-16 h-16 rounded-full bg-[#c9a84c]/90 text-[#1a1208] 
                      flex items-center justify-center shadow-2xl transition-all duration-300
                      group-hover:bg-[#e8c97a] group-hover:scale-110">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 ml-1">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
      
      {/* Label Overlay */}
      <div className="absolute bottom-4 left-0 right-0 text-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-[#fdf8ed] text-[10px] uppercase tracking-widest bg-black/40 py-1 inline-block px-3 rounded-full">
          Click to Play
        </p>
      </div>
    </div>
  )
}
