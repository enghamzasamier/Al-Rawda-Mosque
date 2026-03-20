'use client'

import { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'

interface QRCodeProps {
  url: string
  size?: number
  showModal?: boolean
  onClose?: () => void
}

export default function QRCodeComponent({ url, size = 200, showModal = false, onClose }: QRCodeProps) {
  const [isModalOpen, setIsModalOpen] = useState(showModal)

  const handleClick = () => {
    setIsModalOpen(true)
  }

  const handleClose = () => {
    setIsModalOpen(false)
    onClose?.()
  }

  return (
    <>
      <div 
        className="cursor-pointer hover:opacity-90 transition-opacity"
        onClick={handleClick}
      >
        <QRCodeSVG
          value={url}
          size={size}
          level="H"
          includeMargin={true}
          className="rounded-lg"
        />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-[90vw] max-h-[90vh] overflow-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Share QR Code</h3>
              <button
                onClick={handleClose}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="flex flex-col items-center">
              <QRCodeSVG
                value={url}
                size={Math.min(400, window.innerWidth - 100)}
                level="H"
                includeMargin={true}
                className="rounded-lg mb-4"
              />
              <p className="text-sm text-gray-600 mb-2">Scan to share</p>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {url}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
} 