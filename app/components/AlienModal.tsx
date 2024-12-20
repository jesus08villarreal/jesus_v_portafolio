'use client'

import { motion } from 'framer-motion'
import { useTranslations } from '../hooks/useTranslations'
import Modal from './Modal'

interface AlienModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AlienModal({ isOpen, onClose }: AlienModalProps) {
  const t = useTranslations()
  
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      showThemeToggle={true}
    >
      <div className="relative bg-transparent p-4 rounded-lg w-full max-w-[300px] sm:max-w-[400px]">
        <img 
          src="/steam-green-alien.gif" 
          alt={t.modal.alienAlt || "Dancing Alien"}
          className="w-full h-auto rounded-lg"
        />
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