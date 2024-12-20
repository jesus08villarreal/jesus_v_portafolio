'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      className="relative w-64 h-64 md:w-80 md:h-80"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 
                    transform rotate-6 scale-105 opacity-75 blur-lg transition-transform 
                    group-hover:rotate-12 group-hover:scale-110" />
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800 
                   shadow-xl hover:shadow-2xl transition-shadow duration-300"
      >
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={320}
          height={320}
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 
                      hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-white text-sm font-medium text-center">
              Jesús Villarreal
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
} 