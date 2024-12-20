'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface TechLogoProps {
  name: string
  icon: string
  color: string
}

export default function TechLogo({ name, icon, color }: TechLogoProps) {
  return (
    <motion.div
      className="relative group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className={`p-4 rounded-lg bg-white dark:bg-gray-800 shadow-lg 
                    hover:shadow-xl transition-all duration-300 
                    border border-gray-200 dark:border-gray-700
                    hover:border-${color} group-hover:bg-gray-50 dark:group-hover:bg-gray-700
                    flex flex-col items-center gap-3`}>
        <Image
          src={icon}
          alt={name}
          width={40}
          height={40}
          className="w-10 h-10 object-contain"
          unoptimized
        />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
          {name}
        </span>
      </div>
    </motion.div>
  )
} 