'use client'

import { useLanguage } from '../providers/language-provider'
import { motion } from 'framer-motion'

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="relative">
      <motion.div 
        className={`flex items-center gap-2 p-2 rounded-lg transition-all duration-300 cursor-pointer
                    bg-white/10 hover:bg-white/20 dark:bg-gray-800 dark:hover:bg-gray-700`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
      >
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {language === 'en' ? '🇺🇸 EN' : '🇪🇸 ES'}
        </span>
        <svg 
          className="w-4 h-4 text-gray-700 dark:text-gray-300" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </div>
  )
} 