'use client'

import { motion } from 'framer-motion'

interface AlienModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AlienModal({ isOpen, onClose }: AlienModalProps) {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        isOpen ? 'visible opacity-100' : 'invisible opacity-0'
      } transition-all duration-300 px-4`}
    >
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: isOpen ? 1 : 0 }}
        className="relative bg-transparent p-4 rounded-lg w-full max-w-[300px] sm:max-w-[400px]"
      >
        <img 
          src="/steam-green-alien.gif" 
          alt="Green Alien Dancing"
          className="w-full h-auto rounded-lg"
        />
      </motion.div>
    </div>
  )
} 