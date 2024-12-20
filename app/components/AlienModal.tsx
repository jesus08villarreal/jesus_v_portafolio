'use client'

import { motion } from 'framer-motion'
import { useTranslations } from '../hooks/useTranslations'
import Modal from './Modal'
import { useEffect, useRef } from 'react'

interface AlienModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AlienModal({ isOpen, onClose }: AlienModalProps) {
  const t = useTranslations()
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (isOpen) {
      audioRef.current?.play()
    } else {
      audioRef.current?.pause()
      if (audioRef.current) {
        audioRef.current.currentTime = 0
      }
    }
  }, [isOpen])
  
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      showThemeToggle={true}
    >
      <div className="relative bg-transparent p-4 rounded-lg w-full max-w-[300px] sm:max-w-[400px]">
        <audio ref={audioRef} src="/alien_music.mp3" loop />
        <div className="flex justify-between items-center gap-2 mb-4">
          <img 
            src="/gnome_dancing.gif" 
            alt="Dancing Gnome 1"
            className="w-1/4 h-auto rounded-lg"
          />
          <img 
            src="/steam-green-alien.gif" 
            alt={t.modal.alienAlt || "Dancing Alien"}
            className="w-1/2 h-auto rounded-lg"
          />
          <img 
            src="/gnome_dancing2.gif" 
            alt="Dancing Gnome 2"
            className="w-1/4 h-auto rounded-lg"
          />
        </div>
        <button
          onClick={onClose}
          className="mt-4 w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 
                   text-gray-700 dark:text-gray-200 rounded-lg transition-colors duration-200"
        >
          {t.modal.close}
        </button>
      </div>
    </Modal>
  )
} 